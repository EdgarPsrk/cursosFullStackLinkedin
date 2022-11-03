
//colocar stylo en html ==> <link rel = "stylesheet" type = "text/css" href = "css/stylo.css">
//otra forma de colocar stilos en html asi ==> @import "carpeta/archivo"

// objeto de referencia THIS nos permite hacer referencia a el mismo objeto
const boton = document.querySelector(".boton");
/*
//aqui podemos NO podemos mandar a otra direccion
boton.addEventListener(
    "click", function()
{
    console.log(this);
    this.location = "http://www.google.com"
}
);
*/
//aqui podemos hacer uso de THIS.LOCATION = para mandar a otra direccion
boton.addEventListener(
    "click", () =>
    {
        console.log(this.innerHTML);
        this.location = "https://www.chilango.com/ocio/parques-poco-conocidos-en-cdmx/"
    }

)
