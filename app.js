/* Importar as configurações do servidor */
var app = require('./config/server');

/* Parametrizar a porta de escuta*/
var server = app.listen(8080, function(){
    console.log('Servidor online');
})

var io = require('socket.io').listen(server);

app.set('io', io);

/* Criar a conexão por WebSocket */
io.on('connection', function(socket){
    console.log('Usuário conectou');

    socket.on('disconnect', function(){
        console.log('Usuário desconectou');
    });
});