//un callback es algo que se ejecuta cuando algo sucede 
// setTimeout(() => {
//     console.log('Hola Mundo');
// }, 3000);

//hacemos algunos callback
let getUsuarioById = (id, callback) => {
    let usuario = {
        nombre: 'Ruben',
        // id: id, es igual a 
        id
    }
    if (id === 20) {
        callback(`El usuario con id ${ id }, no existe en la BD`);
    } else {
        callback(null, usuario);
    }
}

getUsuarioById(1, (err, usuario) => {
    console.log('ver' + err);
    if (err) {
        return console.log(err);
    }
    console.log('El usuario de la BD es ', usuario);
});