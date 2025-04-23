//Realiza un script que cuente el número de vocales que tiene un texto.

const texto = prompt("Ingrese un texto: ");
let vocales = 0;

if(texto !== null) {
    for(const letra of texto.toLowerCase()) {
        if("a,e,i,o,u".includes(letra)) {
            vocales++;
        }
    }
    document.writeln("Vocales encontradas: " + vocales);
}