// Primer ejercicio 
function contarCaracteres  ( cadena ) {
    try {
        if( typeof cadena != "string" ){
            throw new Error("El párametro enviado debe de ser un string");
        }
        return cadena.length;
    }catch(error){
        console.error(error);
    }
}

console.log(contarCaracteres("Bravo Nuevo Mundo"));

// 2 ejercicio
function devolverCadena (cadena, num) {
    return cadena.substring(0, num + 1);
}
console.log(devolverCadena("Hola mundo", 4));

// 3 ejercicio
function separadora(cadena, separa) {
    return cadena.split(separa);
}

console.log(separadora("Hola que tal", " "));
