
"use strict"

//podemos usar SETINTERVAL O SETTIMEOUT para jugar con el temporizadores 

/*
setTimeout(function()
{
    setColor();
}, time);
*/

var time = 2000;

var temporizador = setInterval( function()
{
    setColor();
}, time);

function setColor()
{
    var pagina = document.body;
    pagina.style.backgroundColor = pagina.style.backgroundColor == "blue" ? "green" : "blue";
    return 0;
}

function stopChangeColor()
{
    //var temporizador = 5;
    clearInterval(temporizador)
    console.log(temporizador);
    return 0;
}