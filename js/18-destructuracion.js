const numeros = [1 ,2 , 3];

// Sin destructuración
let uno = numeros[0], 
    dos = numeros[1],
    tres = numeros[2];

console.log({uno},{dos},{tres});

// Con destructuracion
let [ one, two, three ] = numeros;

console.log({one},{two},{three});

let persona = {
    nombre:"Mario",
    apellido:"Ezqueda",
    edad:23
}

let {nombre:otroNombre, edad, apellido} = persona;

console.log({otroNombre},{edad},{apellido});


