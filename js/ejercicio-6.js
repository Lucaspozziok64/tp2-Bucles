/*Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :

1
22
333
4444
55555
666666
…….
*/

for(let numero = 1; numero <= 30; numero++){
    for(let i = 1; i <= numero; i++){
        document.writeln(numero);
    }
    document.writeln("<br>");
}