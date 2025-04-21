/* Realiza un script que pida una cadena de texto y la devuelva al revés. 
Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.
*/

const cadena = prompt("Introduce una cadena de texto");

const cadenaInvertida = cadena.split('').reverse().join('');

document.writeln(cadenaInvertida);