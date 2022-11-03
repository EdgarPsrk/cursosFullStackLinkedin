
"use strict"
//*** Propiedades y métodos del DOM

var boton = document.getElementById("boton");

var todosLosParrafos = document.getElementsByTagName('p');
var parrafoPorClase = document.getElementsByClassName('principal')[0].textContent;

var foto = document.createElement('img');
foto.src = "pic/foto1.jpg";
foto.name = "foto1";
foto.width = 400;
document.body.appendChild(foto);

foto.addEventListener('click', function ()
{

    if (this.name === 'foto1') {
        this.src = 'pic/foto2.jpg';
        this.name = 'foto2';
    } else {
        this.src = 'pic/foto1.jpg';
        this.name = 'foto1';
    }

});



boton.addEventListener('click', function ()
{
   
    if (boton.style.backgroundColor === 'green') 
    {
      boton.style.backgroundColor = "blue";
      boton.style.color = "white";
      boton.style.width = "200px";
    }   
    else 
    {
      boton.style.backgroundColor = "green";
      boton.style.color = "white";
      boton.style.width = "200px";
    }
});


var boton1 = document.getElementById("boton1");

boton1.addEventListener('click', function () 
{
   console.log(window.location.href);

    window.location.href = 'http://github.com/yacafx';
})
