const database = require('../database/connection')

class TaskController {

    //Inserção de novas tarefas
    novaTarefa(request, response){
        const { tarefa, descricao, responsavel } = request.body

        database.insert({tarefa, descricao, responsavel }).table('tasks').then(data=>{
            console.log(data)
            response.json({message: "Tarefa criada com sucesso !"})
        }).catch(error => {
            console.log(error)
        })
    }
}

module.exports = new TaskController()