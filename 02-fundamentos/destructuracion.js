// creamos como un objeto en javascript
let persona = {
    nombre: 'Ruben',
    apellido: 'Mendez',
    profesion: 'Programador',
    getNombre: function() {
        return `${ this.nombre } ${ this.apellido } -profesion: ${ this.profesion }`
    }
};

//una forma de destructuracion 
// let nombre = persona.nombre;
// let apellido = persona.apellido;
// let profesion = persona.profesion;

// otra forma mejor es 
let { nombre: primerNombre, apellido: segundoNombre, profesion: profesionPersona } = persona;
console.log(primerNombre, segundoNombre, profesionPersona);