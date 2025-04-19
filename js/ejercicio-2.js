/* Escribir un programa que solicite una nota (número) de 0  a 10.
Luego mostrar la calificación en un alert según los siguientes  rangos de nota:
0-2: Muy deficiente
3-4: Insuficiente
5-6: Suficiente
7: Bien
8-9: Notable
10: Sobresaliente

Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. Si el número ingresado no es válido mostrar el mensaje “Introduce un número válido”.
*/

do {
    let nota = parseInt(prompt("Ingrese su nota por favor de: (0-10)"));

    //condicion que controla entrada de dato tipo texto
    if (isNaN(nota)){
        alert("Introduce un numero valido");
        continue;
    }

    //condicion que controla si el dato esta fuera de rango 0 a 10
    if (nota < 0 || nota > 10) {
        alert("Numero erróneo");
        continue;
    }

    //condiciones para las notas con su break
    if (nota >= 0 && nota <= 2){
        alert("Muy deficiente");
        break;
    } else if (nota >= 3 && nota <= 4){
        alert("Insuficiente");
        break;
    } else if (nota >= 5 && nota <= 6){
        alert("Suficiente");
        break;
    } else if (nota == 7){
        alert("Bien");
        break;
    } else if (nota >= 8 && nota <= 9){
        alert("Notable");
        break;
    } else if (nota == 10){
        alert("Sobresaliente");
        break;
    }
} while (true);