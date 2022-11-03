/*
"use strict"

var a = 5
var b = 12
var c = 4

if ((b > c) && !(c < a)) {
    console.log('Se ejecutó la primera condición');
} else if (!(b >= a) && (c > !b)) {
    console.log('Se ejecutó la segunda condición');
} else {
    console.log('Se ejecutó el último else')
}
*/


/*
"use strict"

var a = 12
var b = 4
var c = 5

if (a>b) {
    if (b<c) {
       console.log("El valor de b es: " + b);
    }
    else if (b>c) {
       console.log("El valor de c es: " + c);
    }
 } 
 else {
    console.log("El valor de a es: " + a );
 }
 */


/*
 "use strict"

var a = 3;
var b = 1;
var c = 2;
var opcion;

opcion = c % b;
opcion += a;

switch(opcion) {
    case 1: 
        console.log("Opción 1");
    break;
    case 2: 
        console.log("Opción 2");
    break;
    case 3: 
        console.log("Opción 3");
    break;
    default: 
        console.log("Ninguna opción");
    break;
}
*/


/*
"use strict"

var a = 9
var b = 5
var c = 15

if((b > c) || !(a > c) && (b >= a)) {
    console.log('Se ejecutó la primera condición');
}

if((c > b) || !(c > a) && (a >= b)) {
    console.log('Se ejecutó la segunda condición');
}
*/


/*
"use strict"

var a = 5
var b = 12
var c = 4

if((b > c) && (c > a) || !(b >= a)) {
    console.log('Se ejecutó la primera condición');
} else {
    console.log('No se ejecutó la primera condición');
}

if((a <= b) || !(c < a) && (c < b)) {
    console.log('Se ejecutó la segunda condición');
} else {
    console.log('No se ejecutó la segunda condición')
}
*/



