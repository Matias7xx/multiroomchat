module.exports = (application) => {
    application.post('/chat', (req, res) => { //Caso a rota seja '/' ele executa a função
        application.app.controllers.chat.iniciaChat(application, req, res)
    })

    application.get('/chat', (req, res) => { //Caso a rota seja '/' ele executa a função
    application.app.controllers.chat.iniciaChat(application, req, res)
})
}