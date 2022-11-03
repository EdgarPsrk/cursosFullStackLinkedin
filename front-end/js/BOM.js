
"use strict"
//obtenemos el objeto de estudio
var boton = document.getElementById('boton');
var principal = document.getElementsByClassName('principal')[0];

//funciones de la ventana
console.log('innerHeight: ', window.innerHeight);
console.log('innerWidth', window.innerWidth);

//propiedad de la ventana LOCAL STORAGE
window.localStorage.setItem('contenido', 'Codigo y cafe es una gran convinacion');

boton.addEventListener('click', function()
    {
        var contenido = window.localStorage.getItem('contenido');
        window.principal.innerHTML = contenido;
    }
)

//otras funciones 
// window.history.forward() avanza con el menu en el historial
// window.history.back()    retrocede con el menu en el historial
// window.history.go(3)     te mueve atraves de historico que tienes de navegacion
