module.exports = (application) => {
    application.get('/', (req, res) => { //Caso a rota seja '/' ele executa a função
        application.app.controllers.index.home(application, req, res)
})
}