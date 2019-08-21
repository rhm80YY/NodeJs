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

let getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        let empleadoDB = empleados.find(empleado => empleado.id === id)
        if (!empleadoDB) {
            reject(`No existe un empleado con el ID ${ id }`);
        } else {
            resolve(empleadoDB); //en resolve solo podemos mandar uno o un objeto 
        }
    });
}
let getSalario = (empleado) => {
    return new Promise((resolve, reject) => {
        let salarioDB = salarios.find(salario => salario.id === empleado.id)
        if (!salarioDB) {
            reject(`No existe un salario para el usuario ${ empleado.nombre }`);
        } else {
            resolve({
                nombre: empleado.nombre,
                salario: salarioDB.salario,
                id: empleado.id
            }); //en resolve solo podemos mandar uno o un objeto 
        }
    });

}

getEmpleado(3).then(empleado => {
    // console.log('empleado de bd', empleado);
    getSalario(empleado).then(resp => {
        console.log(`El salario de ${ resp.nombre } es de ${ resp.salario }$`);
    }, (err) => console.log(err));
}, (err) => console.log(err));