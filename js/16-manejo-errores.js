
try {
    console.log("En el try se agrega el código a evaluar");
    noExiste;
    console.log("Segundo mensaje en el try");
}catch(error){
    console.log("Catch, Capura el error surgido en el try");
    console.log(error);
    
}finally{
    console.log("El bloque finally se ejecutará siempre al final de un bloque try-catch");
 
}

try {
    let numero = "ii";
    if( isNaN(numero) ) {
        throw new Error("El carácter introducido no es un número");
    }
console.log(numero*numero);

}catch(error) {
    console.log(`Se produjo el siguiente error ${error}`);
    
}