// Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir,
//  si la edad ingresada no es un número válido indicarlo en un mensaje.


const edad = parseInt(prompt("Ingrese su edad por favor"));

if (isNaN(edad) || edad <=0 || edad >= 95) {
    document.writeln("<h1>No es un numero o la edad ingresada no esta en rango valido para conducir</h1>");
} else {
    while(true) {
        if (edad >= 18) {
            document.writeln("<h1>Usted puede conducir</h1>");
            break;
        } else {
            document.writeln("<h1>Usted Aún no puede conducir</h1>");
            break;
        }
    }
}