// Realiza un script que pida números hasta que se pulse “cancelar”. 
// Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. 
// Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.

let sumaTotal = 0;

while(true) {
    let numero = parseInt(prompt("Introduce un número (Pulsa cancelar para terminar)"));

    if (isNaN(numero)) {
        if(confirm("¿Deseas terminar y ver el resultado?")) {
            document.writeln(`<h1>La suma total de los números introducidos es: ${sumaTotal}</h1>`);
            break;
        }
        continue;
    }
    sumaTotal += numero;
}