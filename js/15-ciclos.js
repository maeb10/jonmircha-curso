const persona = {
    nombre:"Mario",
    apellido:"Ezqueda",
    edad:23
}
const numeros = [10,20,30,40,50];

const cadena = "Hola Mundo";

for( const prop in persona ){
    console.log(`Key: ${prop}, Value:${persona[prop]}`);
}

for( const num of numeros ) {
    console.log(num);
}

for( const carac of cadena ) {
    console.log(carac);
}