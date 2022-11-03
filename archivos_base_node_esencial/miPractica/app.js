var express = require('express');

var app = express();

app.all( '/', function(petecion, respuesta)
{
    respuesta.send('Trapeton el show');
});

var server = app.listen(3000, function()
{
    
})