// ciclo de vida de node 
console.log('Inicio del programa');
//el set
setTimeout(function() {
    console.log('Primer Timeout');
}, 3000);

setTimeout(function() {
    console.log('Segundo Timeout');
}, 0);

setTimeout(function() {
    console.log('Tercer Timeout');
}, 0);

console.log('Fin del programa');