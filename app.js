/* Importar as configurações do servidor */
var app = require('./config/server');

/* Parametrizar a porta de escuta*/
var server = app.listen(8080, function(){
    console.log('Servidor online');
})

require('socket.io').listen(server);