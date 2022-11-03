
"use strict"
/*
var a = 2
function elevar(a)
{
    var x = 4**a;
    return x;
}

function base(b)
{
    var y = 3**a;
    return y;
}

var saludo = "Hola mundo";
var bise = elevar(a);
var erre = base(a);
function saludar(x, y)
{
    console.log(saludo);
    //c = x + y;
    return x + y;
}

 var v = saludar( bise, erre);
console.log(v)

//podemos inicializar una variable asi
function ser( contador = 0)
{
    console.log("valor " + contador);
    return saludo;
}
ser(10);
*/

/*
"use strict"
//uso de parametros REST se usa en la declaracion de la funcion
function compras(... masIngredientes)
{
    console.log(masIngredientes);
    return "soy el retorno";
}

//donde COMPRAS(), puede recibir n cantidada de parametros.
var rest = compras("huevo", "leche", "pan", "pescado", "jamon", "agua");


//parametros SPRED se usa en la invocacion
function cocinar(ingrediente1, ingrediente2, ...masIngredientes)
{
    console.log(ingrediente1);
    console.log(ingrediente2);
    console.log(masIngredientes);
}

cocinar(...rest);
*/


//funciones anonimas
var saludar = function(nombre)
{
    var erre = "Hola pequeño " + nombre;
    return erre;
}


//CALLBACK
function calcular(dato1, dato2, sumarCB, restarCB)
{
    var suma = dato1 + dato2;
    var resta = dato1- dato2;
    sumarCB(suma);
    restarCB(resta);
}

/*
var vuelta = function(resultado)
{
    console.log("Suma " + resultado);
}

var vuelta1 = function(resultado)
{
    console.log("resta " + resultado);
}
*/


calcular(
    4,
    3, 
    function(resultado)
{
    console.log("suma " + resultado);
}, 
    function(resultado)
{
    console.log("resta " + resultado);
}
);
