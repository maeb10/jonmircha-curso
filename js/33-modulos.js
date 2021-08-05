// Para que este archivo tenga la capacidad de importar otros archivos js
// en la etiqueta script debe haber un atributo type="module"
import saludar, { Saludar, PI, usuario } from "./constantes.js";
import {aritmetica as calculos} from "./aritmetica.js";

console.log("Archivos modulo.js");
console.log(PI, usuario, calculos.sumar(13, 17));
saludar();
let saludo = new Saludar();