/* Importar as configurações do servidor */
var app = require('./config/server');

/* Parametrizar a porta de escuta*/
app.listen(8080, function(){
    console.log('Servidor online');
})