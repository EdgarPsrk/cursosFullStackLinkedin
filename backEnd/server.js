const http = require('http');
const fs = require('fs');

http.createServer((request, respuesta) => 
{
    respuesta.writeHead(200, {'Content-Type':'text/html'} );
    switch(request.url)
    {
        case '/':
            plantilla = 'inicion.html';
            break;
        case '/nodejs':
            plantilla = 'sobreNode.html';
            break;
        default:
            plantilla = '404.html';
            break;        
    }

    fs.readFile('./plantillas/' + plantilla, 
    (error, datos)=>
    {
        respuesta.write(datos);
        respuesta.end();
    } );
   
}).listen(3000, 'localhost');

console.log('el servidor se muestra en http://localhost:3000');


 // respuesta.write('Hola Nginx');
    // respuesta.end();