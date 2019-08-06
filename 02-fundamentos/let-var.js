//con var podemos asignar cuant aveces deseemos 
//la variable se queda con la ultima asignacion 

// var nombre = 'Batman';
// console.log(nombre);

//let solo puede ser inializisada una vez dentro de un scope 
// o ambito no puede estar definida dos veces en un mismo ambito
// let nombre = 'Batman';
// if (true) {
//     let nombre = 'Rojo';
// }
// console.log(nombre);

// probemos con un ciclo for 

let i = 'hola mundo';
for (let i = 0; i <= 5; i++) {
    console.log(`i: ${ i }`);
}
console.log(i);