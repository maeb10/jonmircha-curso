// UN PROTOTIPO ES UN MECANISMO POR EL CUAL UN OBJETO PUEDE HEREDAR DE UN
// OBJETO PADRE ATRIBUTOS Y MÉTODOS.

// funcion constructora
function Animal( nombre, genero) {
    this.nombre = nombre;
    this.genero = genero;
}

// Métodos agregados al prototipo de la funcion constructora
Animal.prototype.sonar = function() {
    console.log(`Hago sonidos porque estoy vivo`);
}

Animal.prototype.saludar = function() {
    console.log(`Hola me llamo ${this.nombre}`);
}

// Herencia prototipica
function Perro(nombre, genero, tamanio) {
    this.super = Animal;
    this.super( nombre, genero );
    this.tamanio = tamanio;
}

// Perro está heredando de animal
Perro.prototype = new Animal();
Perro.prototype.constructor = Perro;

// Sobreescritura de métodos del prototipo padre en eñl hijo
Perro.prototype.sonar = function() {
    console.log("Soy un perro y mi sonido es un ladrido");
}
Perro.prototype.ladrar = function () {
    console.log("Guauu Guauu!!!!");
}

const snoopy    = new Perro("Snoopy","Macho","Mediano"),
      lolaBunny = new Animal("Lola Bunny","Hembra");

console.log(snoopy);
console.log(lolaBunny);

snoopy.sonar();
snoopy.saludar();
snoopy.ladrar();

lolaBunny.sonar();
lolaBunny.saludar();

