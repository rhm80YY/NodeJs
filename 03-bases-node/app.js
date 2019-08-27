// const fs = require('fs'); //es un require nativo de node
// const fs = require('express'); son expanciones no son nativos 
// const fs = require('../fs');son archivo que nosotros mismos escribimos 

// es una destructuracion  ver este tema 
const { crearArchivo } = require('./multiplicar/multiplicar');
let base = 'abc';

//node js tiene un objeto global que se llama modulo 
// console.log(module);

crearArchivo(base)
    .then(archivo => console.log(`archivo creado: ${ archivo }`))
    .catch(e => console.log(e));