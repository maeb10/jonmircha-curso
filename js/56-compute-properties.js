this.nombre = "Window";
const persona = {
    nombre : "Jon",
    saludar : function(){
        console.log(`Hola ${this.nombre}`);
    }
} 

persona.saludar();

const otraPersona = {
    nombre:"Mario",
    saludar: persona.saludar.bind(this)
}

otraPersona.saludar();