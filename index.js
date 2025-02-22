const express = require('express');
const cors = require('cors');
require('dotenv').config()

const router = require('./src/routes/routes');

const app = express()
app.use(cors())
app.use(express.json())
app.use(router)

// app.listen(4000, () => {
//     console.log("Aplicação está rodando na porta 4000");
// }); Como to usando o arquivo env pra esconder eu troco o numero da porta

app.listen(process.env.PORT, () => {
    console.log(`Aplicação está rodando na porta ${process.env.PORT}`);
});

app.get('/', (request, response) => {
    response.send('Olá Mundo!')
});
