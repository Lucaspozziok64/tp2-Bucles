/*
Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)
de la siguiente forma : (suponiendo que indica 30).

303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22
1
*/

for(let numero = 50; numero >= 1; numero--){
    // bucle interno que repite cada numero tantas veces como su valor
    for(let i = 1; i <= numero; i++){
        document.writeln(numero);
    }
    document.writeln("<br>");
}