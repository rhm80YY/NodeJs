let nombre = 'Ruben';
let real = 'Mendez';

// console.log(nombre + ' ' + real);
// console.log(`${ nombre } ${ real }`);

// let nombreCompleto = nombre + ' ' + real;
// let nombreTemplate = `${ nombre } ${ real }`;
// console.log(nombreCompleto === nombreTemplate);

// aplicandolo en funciones
function getNombre() {
    return `${ nombre } ${ real }`;
}
console.log(`El nombre de: ${ getNombre() }`);