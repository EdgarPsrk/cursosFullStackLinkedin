
"use strict"

var y = 5;
var texto = "";

do{
    for (let x = 0; x < y; x++) {
        texto = texto + "*";
    }
    console.log(texto)
    texto = "";
    y--;
} 
while (y>0);


/*
"use strict"
var contador = 0;
var cuneta = 0;

for(contador = 0; cuneta <= 10; contador++)
{
    if (cuneta == 10)
    {
        break;
    }
    if(contador % 2 == 0)
    {
        //console.log(contador);
        continue;
    }
    cuneta++;
    console.log(contador);
}
console.log("Hay " + cuneta + " numeros impares");
*/