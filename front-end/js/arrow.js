"use strict"
//se llama ARROW, FAT ARRROW O LAMBDA
function imp(dato)
{
    console.log(dato);
}

var saludar = name => "Hola " + name;
imp(saludar("Qs"));

var sumar = cantidad => cantidad + 10;
imp(sumar(20));

var calcular = (datoA, datoB) =>
{
    var datoC = 5;
    return datoA + datoB + datoC;
}
imp(calcular(3, 4));

var generador = (datoA, datoB) => datoA + datoB;
imp(generador(8,7));

var validar = () => 
{
    return "validacion correcta";
}
imp(validar());
