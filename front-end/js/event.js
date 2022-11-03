//eventos del mouse
//NOTA ==> si se agraga CLICK sobre html directo se escribe ONCLICK

"use strict"

function imp(cosa)
{
    console.log(cosa);
}

//monitorera la carga de la ventana
window.addEventListener("load", function(event)
{
    imp("El contenido de la ventana se ha cargado");
});

var mensajeA = "El boton se ha pulsado";
var mensajeB = "El mouse esta sobre el boton";
var mensajeC = "El mouse esta fuera del boton";

const boton = document.querySelector(".boton");

boton.addEventListener("click",function()
{
    imp(mensajeA);
});

boton.addEventListener("mouseover", function()
{
    imp(mensajeB);
});

boton.addEventListener("mouseout", function()
{
    imp(mensajeC)
});

var a = "keydown";
var b = "keypress";
var c = "keyup";

window.addEventListener(a, function(event)
{
    imp("tecla " + a)
    imp(String.fromCharCode(event.keyCode));

});

/*
window.addEventListener(b, function()
{
    imp("tecla " + b)
});
*/

window.addEventListener(c, function(event)
{
    imp("tecla " + c)
});

