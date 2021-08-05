/**
 * Nuevo tipo de dato
 * Los sets es una estructura similar a un arreglo pero de datos únicos
 * 
 */

const set = new Set([1,2,3,3,true, false, true, false,{},{},"hola","HOLA"]);
console.log(set);
console.log(set.size);

const set2 = new Set();
set2.add(1);
set2.add(2);
set2.add(2);
set2.add(3);
set2.add(true);
set2.add(false);
set2.add(true);
set2.add({});
console.log(set2);

console.log("Recorriendo set");

for(item of set){
    console.log(item);
    
}
console.log("Recorriendo set2");

set2.forEach((item) => console.log(item));

// Se convierte un Set a un Array
let arr = Array.from(set);

console.log((arr))

// Borra un elemento de un set
set.delete("HOLA");

console.log(set);

// Comprueba que un set tenga el valor especificado
console.log(set.has(100));

// Este método limpia el set
set2.clear()
console.log(set2);
