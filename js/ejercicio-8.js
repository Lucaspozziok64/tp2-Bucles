/*
Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 
1
12
123
1234
12345
123456
……
*/

const numero = parseInt(prompt("Introduce un número del 1 al 50"));

if (numero > 50 || numero <= 0) {
    alert("El número introducido es mayor a 50 o menor igual a 0");
} else {
    for (let i = 1; i <= numero; i++) {
        for (let l = 1; l <= i; l++) {
            document.writeln(i);
        }
        document.writeln("<br>");
    }
}
