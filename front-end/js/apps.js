
"use strict"
//JSON JAVA SCRIPT OBJECT NOTACION
var persona = 
{
    nombre : "Edgar",
    tw : "Qs_dart"
};
console.log(persona.nombre);
console.log(persona.tw);

var personas 
[
    {nombre : "Eleonor" , edad : "34" },
    {nombre : "Martha", edad : "23" },
    {nombre : "Hugo", edad : "35" },
    persona
];

//convierte un objeto a texto plano
var personaJson = JSON.stringify(persona);

//convierte el texto plano a un objeto (interpreta)
var nuevaPersona = JSON.parse(personaJson);

console.log(personas);
console.log(personaJson);