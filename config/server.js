// Importar o módulo do express
const express = require('express')

//Importar o módulo do consign
const consign = require('consign')

//... Body-Parser
const bodyParser = require('body-parser')

//... Express-Validator
const expressValidator = require('express-validator')

// Iniciar o objeto do express
const app = express(); //Executando função do express | Instância que o APP.JS espera no require das configs do servidor

//Configurar EJS | setar variáveis 'view engine' e 'views' do express
app.set('view engine', 'ejs')
app.set('views', './app/views') //Localização das Views

//Configurar middleware express.static
app.use(express.static('./app/public')) //Arquivos estáticos

//Configurar middleware body-parser
app.use(bodyParser.urlencoded({ extended: true }))

//Configurar middleware express-validator
app.use(expressValidator())

consign() //Auto-Load das rotas, models e controllers para o objeto app
    .include('app/routes')
    .then('app/models')
    .then('app/controllers')
    .into(app)

// Exportar o objeto app
module.exports = app