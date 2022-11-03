
"use strict"
function imp(coso)
{
    console.log(coso);
}


//aprendiendo cadenas de texto
var mensaje = "Esto es divertido por las mañana, pero como va pasando el tiempo ya no es divertido. NI MOOD T.T ";
imp("la cadena es: " + mensaje);
imp("La cadena de texto tiene: " + mensaje.length + " letras");

//la palabra INDEXOF nos busca la posicion o la primera posicion donde empieza una palabra.
var resultado = mensaje.indexOf("divertido");
imp("posicion index of: " + resultado);

//la palabtra LASTINDEXOF nos buca la ultima posicion donde empieza la palabra
resultado = mensaje.lastIndexOf("divertido");
imp("posicion lastindex of: " + resultado);

//la palabra SERCH es como INDEXOF
resultado = mensaje.search("divertido");
imp("posicion search: " + resultado)

//posemos usar serch con una expresion regular y es asi
resultado = mensaje.search(/di/i);
imp("posicion expresion regular: " + resultado);

//mas palabras MATCH la usamoa para buscar todas la palabras que coincidan con lo que nesesitamos
resultado = mensaje.match(/divertido/gi);
imp("posicion match: " + resultado);

//SUBSTR a este nole entendi bien cuenta del caracter en la posicion que le das y termina en la posicin que indicas para este caso 
//imprime desde la posicion 6 - 17 
resultado = mensaje.substr(6,11);
imp("posicion substr: " + resultado);

//SUBSTRING a este menos imprime desde la posicion que indicas hasta la que mandas pero esta cuenta desdel principio
resultado = mensaje.substring(6,17);
imp("posicion substring: " + resultado);

//charAt imprime el caracter de la posicio que indicas, la cuenta emoieza en 0
resultado = mensaje.charAt(8);
imp("posicion del charate.jajajaja: " + resultado);

//nuevos metodos de buesqueda
//STARWHIT comomsu nombre lo indica si la cadena empieza conlo que buscados.
resultado = mensaje.startsWith("Es");
imp(resultado);

//existe una variante donde podemos indicar donde queremos que comienze la busqueda
var textoEn = mensaje.indexOf("tiempo");
resultado = mensaje.startsWith("ti", textoEn);
imp("this is star: " + resultado);

//ENDWHIT la usamos para saber si la cadena termina con lo que buscamos
resultado = mensaje.endsWith("T");
imp("this is end: " + resultado);

//INCLUDE busca si la cadema incluye los caracteres que indicamos
resultado = mensaje.includes("tiempo");
imp("this is include: " + resultado);

//tambien tiene la variante donde le indicamos donde queremos que comienze l a busqueda
textoEn = mensaje.indexOf("NI");
resultado = mensaje.includes("tiempo", textoEn);
imp("variante include: " + resultado);

//REPEAT repite frases
resultado = mensaje.repeat(2);
imp("this is repeat:\n" + resultado);

//remplace remplaza una frase y nno afecta al valor original
resultado = mensaje.replace("divertido", "bueno");
imp("this is remplace:\n" + resultado);

//slice parte el mensaje y escribe desde donde le indiquemos elimina lo demas
resultado = mensaje.slice(6);
imp("this is slice: " + resultado);
//tambien tiene l avariamte dond epodemo sescoger donde empieza ytermina
resultado = mensaje.slice(6, 19);
imp("variante slice: " + resultado);

//SPLIT separa la cadena por el elemento que indiques, en est ecaso indicaremos los espacios
resultado = mensaje.split(" ");
imp("this is split: " + resultado);

//TRIM elimmibna los espacio en blanco al principio y final de la cadena
resultado = mensaje.trim();
imp("tbis is trim: " + resultado);

//************************************ */
//conversion de string

var message = " AsI eS EsTo ";
var number = 1209;

resultado = number.toString();
imp("str: " + resultado);

resultado = mensaje.toLowerCase();
imp("lower: " + resultado);

resultado = mensaje.toUpperCase();
imp("upper: " + resultado);

textoEn = number.toString();
resultado = mensaje.concat(message, textoEn);
imp("This is concat: " + resultado);

//plantillas y literales
//para usar esta forma usamos las comillas raras `` comilla invertida
resultado = `Me gusta ${message} y este es un numero ${textoEn}`;
imp(resultado);