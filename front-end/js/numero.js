//podemos usar esto para trabajar con numero
"use strict"

var numero = 2.5;
function imp(argumento)
{
    console.log(argumento);
}

imp("toExponencial: " +  numero.toExponential(2) );
imp("toFixed: " + numero.toFixed(2) );
imp("toPrecision: " + numero.toPrecision(4) );
imp("toString: " + numero.toString() );