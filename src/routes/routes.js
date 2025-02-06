const connection = require('../database/connection')
const express = require('express');
const router = express.Router();
const TaskController = require('../controllers/TaskController')
const UserController = require ('../controllers/UserController')
const verificarToken = require ('../middleware/authMiddleware');
const TwoFaController = require('../controllers/TwoFaController');


router.post('/usuario/autenticar', UserController.autenticarUsuario)
router.get('/users', (request, response) => {
    response.send('Lista de usuários')
})

//Rota do TaskController
router.post('/novaTarefa', TaskController.novaTarefa)
router.get('/tarefa/:id', TaskController.listarUmaTarefa)
router.put('/tarefa/atualizar/:id', TaskController.atualizarTarefa)
router.delete('/tarefa/remover/:id', TaskController.removerTarefa)
router.get('/tarefas', verificarToken, TaskController.listarTarefas)

//Rota do UserController
router.post('/usuario/criar', UserController.cadastrarUsuario)
router.post('/usuario/autenticar', UserController.autenticarUsuario)
router.get('/usuarios',verificarToken, UserController.listarUsuarios)
router.get('/usuario/:id', UserController.listarUmUsuario)
router.put('/usuarios/atualizar/:id', verificarToken, UserController.atualizarUsuario)
router.delete('/usuario/delete/:id', UserController.removerUsuario)
router.put('/usuario/redefinirSenha/:id', UserController.redefinirSenha)
 

//Rota do TwoFaController
router.get('/2fa/gerar', TwoFaController.gerarToken)
router.post('/2fa/validar',TwoFaController.validarToken)





module.exports = router