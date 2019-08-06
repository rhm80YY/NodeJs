// DIFERENCIAS ENTRE LAS FUNCIONES NORMALES Y LAS FUNCIONES DE FLECHA
// function sumar(a, b) {
//     return a + b;
// }

// ahora hacemos algo igual para la funcion flechas que es lo mismo 
// esta forma se hace la funcion flechas

// let sumar = (a, b) => {
//     return a + b;
// }

// si la respuesta o retorno es en una sola linia podemos hacer la funcion mas corta 
// let sumar = (a, b) => a + b;
// console.log(sumar(10, 20));




// function saludar() {
//     return 'Hola Mundo';
// }

// let saludar = () => 'Hola Mundo';

// funcion flecha corta con parametros
// let saludar = (nombre) => `Hola ${ nombre }`


// console.log(saludar('Ruben'));

// algo mas complejo en este tipod e declaracion no se permite 
// poner la funcion de flecha
let persona = {
    nombre: 'Ruben',
    apellido: 'Mendez',
    profesion: 'Programador',
    // getNombre: function() {
    //         return `${ this.nombre } ${ this.apellido } -profesion: ${ this.profesion }`
    //     }
    // otra forma de definir la funcion 
    getNombre() {
        return `${ this.nombre } ${ this.apellido } -profesion: ${ this.profesion }`
    }
};
console.log(persona.getNombre());