/**
 * Los maps son objetos que nos sirven para almacenar conjutos de valores asociados
 * a manera de objeto.
 */

const mapa = new Map();
// Para agregar valores a un Map hay 2 formas
// 1
mapa.set("nombre", "Mario");
mapa.set("apellido", "Ezqueda");
mapa.set("edad", "23");

console.log(mapa);
console.log("size",mapa.size);

console.log(mapa.has("correo"));
console.log(mapa.has("nombre"));
console.log(mapa.get("nombre"));
mapa.set("nombre", "Luis")
console.log(mapa.get("nombre"));

mapa.delete("apellido");
mapa.set(19,"diecinueve");
mapa.set(false,"falso");
mapa.set({},{});
console.log(mapa);

for(let [key, value] of mapa){
console.log(`LLave:${key}, Valor:${value}`);

}

const mapa2 = new Map([
    ["nombre", "Kenai"],
    ["edad", 7],
    ["animal", "perro"],
    [null, "nulo"]
]);

console.log(mapa2);

const llavesMapa2 = [...mapa2.keys()];
console.log(llavesMapa2);

const valoresMapa2 = [...mapa2.values()];
console.log(valoresMapa2);





