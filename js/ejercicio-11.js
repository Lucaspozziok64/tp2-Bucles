/*
Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *
*/

const edad1 = parseInt(prompt("Introduce la edad de la 1era persona"));
const edad2 = parseInt(prompt("Introduce la edad de la 2da persona"));
const edad3 = parseInt(prompt("Introduce la edad de la 3era persona"));

const nombre1 = prompt("Introduce el nombre de la 1era persona");
const nombre2 = prompt("Introduce el nombre de la 2da persona");
const nombre3 = prompt("Introduce el nombre de la 3era persona");

if (edad1 > edad2 && edad1 > edad3) {
    alert(nombre1 + " es el mayor");
} else if (edad2 > edad1 && edad2 > edad3) {
    alert(nombre2 + " es el mayor");    
} else if (edad3 > edad1 && edad3 > edad2) {
    alert(nombre3 + " es el mayor");
} else {
    alert("Hay dos o más personas con la misma edad");
}