//  Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”.
// Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.
// Nota: usar confirm()

let cadena = "";

do {
    cadena += prompt("Ingrese una cadena de texto") + "-";
    document.writeln(cadena);
    
} while (confirm("¿Desea ingresar otra cadena de texto?"));
