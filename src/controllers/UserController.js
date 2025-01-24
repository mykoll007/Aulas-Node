const database = require('../database/connection')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

class UserController{

   async cadastrarUsuario(request, response){
        const {nome, email, senha, situacao} = request.body

        const senhaSegura = await bcrypt.hash(senha, 10)

        database.insert({nome, email,senha: senhaSegura, situacao}).table("users").then(data=>{
            response.json({message: "Usuário cadastrado com sucesso !"})
        }).catch(error => {
            console.log(error)
        })
    }

     autenticarUsuario(request, response){
        const {email, senha} = request.body

        database.select('*').where({email: email}).table("users").then(async usuario => {
            if(!usuario[0])
                response.status(401).json({message: "Autenticação Falhou !"})

            const validarSenha = await bcrypt.compare(senha, usuario[0].senha)
            
            if(!validarSenha)
                response.status(401).json({message: "Autenticação falhou !"})

            const token = jwt.sign({id: usuario[0].id}, 'Titos@2025 !', {
                expiresIn: '1h'
            })
            response.status(200).json({token})
            
        }).catch(error => {
            console.log(error)
        })
    }
}

module.exports = new UserController()