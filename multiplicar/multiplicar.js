const fs = require('fs');
const colors = require('colors/safe');

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(colors.red(`${base} no es un número.`));
            return;
        }
        const fileName = `./tablas/tabla(${base} al ${limite}).txt`;

        let data = '';

        for (let i = 1; i <= 10; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }

        fs.writeFile(fileName, data, (err) => {
            if (err) reject(err);
            else resolve(`${fileName}`);
        });
    })
}

let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(colors.red(`${base} no es un número.`));
            return;
        }
        const fileName = `./tablas/tabla(${base} al ${limite}).txt`;

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }
        console.log(data);
        resolve(data);
    })
}
module.exports = { crearArchivo, listarTabla };