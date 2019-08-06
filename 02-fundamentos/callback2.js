let empleados = [{
    id: 1,
    nombre: 'Ruben'
}, {
    id: 2,
    nombre: 'Hector'
}, {
    id: 3,
    nombre: 'Maria'
}]

let salarios = [{
    id: 1,
    salario: 1000
}, {
    id: 2,
    salario: 2000
}];

// let getEmpleado = (id, callback) => {
//     let empleadoDB = empleados.find(empleado => empleado.id === id)
//     if (!empleadoDB) {
//         callback(`No existe un empleado con el ID ${ id }`)
//     } else {
//         callback(null, empleadoDB);
//     }
//     console.log(empleadoDB);
// }


//la respuesta debe de ser 
// nombre:  'Ruben'
// salario: 300

//error 
// no se encontro un salario para el usuario fernasndo

// tarea 
let getSalario = (id, callback) => {
    let salarioBD = salarios.find(salario => salario.id === id)
    console.log(salarioBD);
    // tienen que encontrar el salario para un empleado en particular 
}

getSalario(1, (empleado) => {
    console.log(empleado)
});



// getEmpleado(1, (err, empleado) => {
//     if (err) {
//         return console.log(err);
//     }
//     console.log(empleado);
// });