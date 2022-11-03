
"use strict"

function imp(cosa)
{
    console.log(cosa);
}

var contador = 0;
//podemos declarar asi un arreglo 
var pagos = ["agua", "luz", "netflix"];
//o asi ;)
var compras = new Array ("jamon", "aguacate", "jitomate", "arroz", "queso");

//imprimir elementos del array
imp(pagos[1]);

imp("hay " + pagos.length + " pendientes");

var cosas = [pagos, compras];

imp(cosas[1][2]);
imp(cosas[0][2]);

//empujar elementos a un array podemos usar PUSH y para quitar elementos usamos POP tambien podemos usar JOIN para mostar el contenido de el
//arreglo como un texto plano oase una cadena de caracteres.
pagos.push("predio");
pagos.push("internet");

imp("Estos son los pagos: ");
imp(pagos.length);

for (contador; contador < pagos.length; contador++)
{
    imp(pagos[contador]);
}

pagos.pop();
imp(pagos.length);

var message = pagos.join();
imp(message);

//crear arrays desde cadenas de texto
var buy = "jamon, queso, aguacate, arroz, agua";
var platillos = buy.split(", ");
imp(platillos);

//podemos crear arrays trayendo informacion del HTML con ARRAY.FROM()
var platillosHTML = Array.from(document.querySelectorAll('.platillos p'));
imp("this is arrayof" + platillosHTML);
var platillosHTML1 = platillosHTML.map(platillos => platillos.textContent); 
imp(platillosHTML1);

//podemos usar ARRAY.OF para crear un arreglo desde 0
var esto = Array.of("jamon, queso, aguacate, arroz, agua");
imp(esto);
//****************** */
//ordenar un arreglo
imp('estos son los pagos sin ordenar ' + compras);
compras.sort();
imp(compras);

//imprimir del ultimo al primero REVERSE
compras.reverse();
imp("este es el arreglo despues del reverse:")
imp(compras);

//desesctrutura de un arreglo 
imp("cosas en el arreglo " + compras.length);
/*
var objeto0 = compras[0];
var objeto1 = compras[1];
var objeto2 = compras[2];
var objeto3 = compras[3];
var objeto4 = compras[4];
*/

//esto es desestryucturar el arreglo
var [objeto0, objeto1, objeto2, objeto3,objeto4] = compras;
console.log(objeto0, objeto1, objeto2, objeto3,objeto4);


