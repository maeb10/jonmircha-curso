// const saludar =  () => console.log("hola");
// saludar();

const saludar =  nombre => console.log(`Hola ${nombre}`);
saludar("Mario");

// const sumar = function(a,b) {
//     return a + b;
// }

const sumar = (a,b) => a + b;

console.log(sumar(2,2));

// Las arrow functions capturan el objeto "this" del contexto en el que
// se encuentran.

/* function Perro(){
    console.log(this);
}
Perro();
 */

const perro = {
    nombre:"Kenai",
    ladrar(){
        console.log(this);
    }
}

perro.ladrar();