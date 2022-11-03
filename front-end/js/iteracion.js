
"use strict"
//iteracion de un arreglo con FOR

var pagos = ['Agua', 'Gas', 'Internet', 'Predio'];
function imp(cosa)
{
    console.log(cosa);
}

/*
for(let i in pagos)
{
    imp(pagos[i])
}
*/

//podemos usar tambien un FOR EACH
//pagos.forEach( (pago, index) => console.log(index, pago) );

//usando FIND
var eleccion = pagos.find(pago => pago == 'Predio');
imp(eleccion);

var menu = 
[
    {nombre : 'tacos',
    precio : 15, 
    pais : 'Mexico'},

    {nombre : 'ceviche', 
    precio : 20, 
    pais : 'Peru'},

    {nombre : 'pasta', 
    precio : 50, 
    pais : 'Italia'},

    {nombre : 'pizza', 
    precio : 100, 
    pais : 'Italia'}
];

eleccion = menu.find(iterador => iterador.nombre =='tacos');
imp(eleccion);

//obtener la posicin de mi busqueda con FINDINDEX
var posicion  = pagos.findIndex(pago => pago == 'Agua');
imp('Posicion del index:');
imp(posicion);

posicion = menu.findIndex(iterador => iterador.nombre == 'pasta');
imp('Posicion del index:');
imp(posicion);
//si usamos FIND se trae solo la primer incidencia que encuentra con la busqueda
//sin encambio FILTER trae todas aquellas incidencia que se encuentra en el arreglo
eleccion = menu.filter(pais => pais.pais == 'Italia');
imp(eleccion);

//manera de usar el PUSH para agregar cosas al arreglo del objeto => en este caso para agregarplatillos a menu
var cuenta = menu.push({nombre: 'quesadilla',precio: 25,pais: 'Mexico'});
imp(cuenta);

menu.forEach( (platillo, index) => console.log(index, platillo) );

//usando SOME y EVERY donde SOME me perMite validar si alguno cumple coN la condicion y EVERY si todos la cumple

cuenta = menu.some(platillo => platillo.precio < 20);
imp('hay platillo');
imp(cuenta);

cuenta = menu.every(platillo => platillo.precio <100);
imp('hay platillo');
imp(cuenta);
