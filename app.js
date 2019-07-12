//Importar configurações do servidor
const app = require('./config/server')
//Parametrizar a porta de escuta para escutar requisições
const server = app.listen(80, () => {
    console.log('Servidor online!')
})

const io = require('socket.io').listen(server)

app.set('io', io)

//Criar conexão por WebSocket
io.on('connection', (socket) => {
    console.log('Usuário conectou')

    socket.on('disconnect', () => {
        console.log('Usuário desconectou')
    })

    socket.on('msgParaServidor', (data) => {
        //Dialogo
        socket.emit('msgParaCliente', { apelido: data.apelido, mensagem: data.mensagem })

        socket.broadcast.emit('msgParaCliente', { apelido: data.apelido, mensagem: data.mensagem })

    //Participantes
    if(parseInt(data.apelido_atualizado_nos_clientes) == 0){
        socket.emit(
            'participantesParaCliente',
            { apelido: data.apelido}
        );
        socket.broadcast.emit(
            'participantesParaCliente',
            { apelido: data.apelido}
        );
    }
    })
}) //Escutando eventos de conexão
//On: Ouve pedidos de execução
//Emit: Pede para executar alguma ação