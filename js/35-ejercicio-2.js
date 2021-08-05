// 5) Programa una función que invierta las palabras de una cadena de texto, 
// pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
const revertirPalabra = ( word = "" ) => (!word) ? console.warn("No introdujo una palabra") 
                                                 : console.warn(word.split("").reverse().join("")) 

revertirPalabra("Hola mundo");
revertirPalabra();

// 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. 
// miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
const contarpalabras = (cadena = "", palabra = "" ) => {
    
    if(!cadena) return console.warn("No ingresaste el texto largo");

    if(!palabra) return console.warn("No ingresaste la palabra evaluar");
    
    cadAr = cadena.split(" ");

    let pos = cadAr.indexOf(palabra);

    cont = 0;

    while( pos != -1 ) {
        cont++;
        pos = cadAr.indexOf(palabra, pos + 1);

    }

    
}
