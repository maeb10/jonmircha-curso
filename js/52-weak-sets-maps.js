/**
 * A que se refiere que sean debiles (weak), significa que solo pueden 
 * almacenar referecias débiles, es decir, que las llaves deben de ser
 * de tipo objeto.
 * Los WEAKSET y WEAKMAPS no son elementos iterables, es decír que no podemos
 * recorrerlos, tampoco podemos borrar los elementos de un jalon ni usar la propieda size
 */

/* const ws = new WeakSet();

let valor1 = {"valor1":1};
let valor2 = {"valor2":2};
let valor3 = {"valor3":3};

ws.add(valor1);
ws.add(valor2);

console.log(ws);
console.log(ws.has(valor1));
console.log(ws.has(valor3));

ws.delete(valor2);
console.log(ws);

ws.add(valor2);
ws.add(valor3);
console.log(ws);

setInterval(() => {
    console.log(ws);
    setTimeout(() => {
        valor1 = null;
        valor2 = null;
        valor3 = null;
    }, 5000);
}, 1000); */

const wm = new WeakMap();

let llave1 = {};
let llave2 = {};
let llave3 = {};

wm.set(llave1, 1);
wm.set(llave2, 2);

console.log(wm);

console.log(wm.has(llave1));
console.log(wm.has(llave3));

console.log(wm.get(llave1));

wm.delete(llave1)
console.log(wm);

wm.set(llave1, 1);
wm.set(llave3, 3);
console.log(wm);

