const express = require('express');
const fs = require('fs');
const pug = require('pug');

const app = express();
app.use(express.static( __dirname + '/public'));

lista = [
    {color:'Naranja', imagen: 'images/estampa.jpg'},
    {color: 'verde', imagen: 'images/verde.jpg'},
    {color: 'rojo', imagen: 'images/ra.jpg'}
]

app.get( '/', (peticion, respuesta) => respuesta.render('index.pug',
{
    titulo:'Aplicacion con pug',
    texto:'cosas raras que hacemos con pug, para exportar esta variable a el index pug usamos #{"variable"}',
}) );

app.get( '/tienda.html', (peticion, respuesta) => respuesta.render('tienda.pug', { camisetas: lista} ) );

app.get( '/tienda/comprar/:color', (peticion, respuesta) => 
{
    let datosCamiseta = lista.filter( (item) => 
    {
        if(peticion.params.color == item.color)
        {
            return item
        } 
    })[0]

    respuesta.render('detalles.pug', 
    { 
        color: peticion.params.color,
        data: datosCamiseta
    } ) 
    
} 
);

app.use( (peticion, respuesta) =>
{
   respuesta.status(400);
   let urlError = peticion.originalUrl;
   respuesta.render('404.pug', {textoError: urlError});
})


app.listen(3000, () => console.log('Escuchando en localhost:3000'));