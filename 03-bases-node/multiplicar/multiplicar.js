const fs = require('fs'); //es un require nativo de node

//promesa
let crearArchivo = (base) => {
        return new Promise((resolve, reject) => {

            if (!Number(base)) {
                reject(`El valor introducido ${ base } no es un numero`);
                return;
            }

            let data = '';
            // console.log('tabla de multiplicar : ' + base);
            for (let i = 1; i <= 10; i++) {
                // console.log(base + ' * ' + i + ' = ' + (base * i));
                // en node utilisamos 
                // console.log(`${ base } * ${ i } = ${ base * i }`);
                data += `${ base } * ${ i } = ${ base * i }\n`;
            }
            fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
                if (err)
                    reject(err)
                else
                    resolve(`tabla-${ base }.txt`);
            });
        });
    }
    // podemos agregar al modulo los objetos que deseo utilizar en forma global
    // si tubieramos mas funciones podriamos aghregarlo una debajo de la otr
module.exports = {
    crearArchivo
}