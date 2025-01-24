const connection = require('../database/connection')
const express = require('express');
const router = express.Router();
const TaskController = require('../controllers/TaskController')
const UserController = require ('../controllers/UserController')
const verificarToken = require ('../middleware/authMiddleware')

router.post('/usuario/criar', UserController.cadastrarUsuario)
router.post('/usuario/autenticar', UserController.autenticarUsuario)
router.get('/users', (request, response) => {
    response.send('Lista de usuários')
})

//Rota do TaskController
router.post('/novaTarefa', TaskController.novaTarefa)
router.get('/tarefa/:id', TaskController.listarUmaTarefa)
router.put('/atualizar/tarefa/:id', TaskController.atualizarTarefa)
router.delete('/remover/tarefa/:id', TaskController.removerTarefa)
router.get('/tarefas', verificarToken, TaskController.listarTarefas)

//Rota do UserController
router.post('/usuario/criar', UserController.cadastrarUsuario)
router.post('/usuario/autenticar', UserController.autenticarUsuario)




module.exports = router