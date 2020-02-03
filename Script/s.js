"use strict";

 // Juan Felipe Torres: Me pareció super útil la función, funciona bien y pues hace un poco más dinámica la página.//
 // Faltó documentar la función, yo lo pondría así:

 // eslint-disable-next-line no-unused-vars
/** Función que muestra cierto texto en la pñagina dependiendo del valor que tome el div, en este caso el valor pasa por´
 * Parámetro y se asigna en el onclick() del elemento HTML.
 * Value. Valor entre 1-3 que determina que texto poner.
 */
 function mostrarTexto(value) {
    var div = document.getElementById("div");
    var text = "";
    if (value == 1) text += " 2001-2015 : Gimnasio los ocobos is located in Villavicencio. Here I did all my studies as a schoolboy.";
    if (value == 2) text += " 2016 : Miami Dade College is located in the city of Miami. After finishing my studies as a bachelor, I went to live in Miami for 6 months where I studied intensive English to improve this language.";
    if (value == 3) text += " 2016- present: After arriving from Miami I started studying at the University of the Andes my professional career where I am currently a student.";
    div.innerHTML = text;
}

   
