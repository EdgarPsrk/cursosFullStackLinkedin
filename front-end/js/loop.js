
"use strict"
var productos = 5;
var producto = 5;

for (let contador = 0; contador < productos; contador ++)
{
    console.log("producto # "  + contador);
    
}

//WHILE pregunta luego ejecuta
while (productos > 0)
{
    console.log("producto vendido " + productos );
    productos--;
}

//DO-WHILE ejecuta y despues evalua
do
{
    console.log(producto)
    console.log("producto vendido # " + producto );
    producto--;
} 
while(producto > 0)