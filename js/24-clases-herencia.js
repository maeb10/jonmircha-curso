class Animal {

    constructor( nombre, genero ) {
        this.nombre = nombre;
        this.genero = genero;
    }

    sonar () {
        console.log(`Hago sonidos porque estoy vivo`);
    }
    
    saludar () {
        console.log(`Hola me llamo ${this.nombre}`);
    }

}

class Perro extends Animal {
    constructor ( nombre, genero, tamanio ) {
        super( nombre, genero);
        this.tamanio = tamanio;
        this.raza = null;
    }

    sonar () {
        console.log("Soy un perro y mi sonido es un ladrido");
    }

    ladrar () {
        console.log("guauu guauu!!!");
    }

    // Un método estatico se puede ejecutar sin necesidad de instanciar la clase
    static queEres () {
        console.log(`Los perros somos animales mamiferos que pertenecemos a la familia
                    de los caninos. Somos considerados los mejores amigos del hombre.`);
    }

    get getRaza () {
        return this.raza;
    }
    set setRaza (raza) {
        this.raza = raza;
    }

}


Perro.queEres();
const mimi = new Animal("Mimi", "Hembra");
const scooby = new Perro("Scooby", "Macho", "Grande");


console.log(mimi);
mimi.saludar();
mimi.sonar();
console.log(scooby);
scooby.saludar();
scooby.sonar();
scooby.ladrar();

scooby.setRaza = "Gran Danés";
console.log(scooby.getRaza);
