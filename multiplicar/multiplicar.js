// requireds
// const fs = require('express');
// const fs = require('./fs');
const fs = require('fs');
var colors = require('colors');


let listarTabla = (base, limite) => {
    console.log();

    for (let i = 1; i <= limite; i++) {


        console.log(`El ${base} * ${i} = ${base * i}`.blue);
    }

}




creaTexto = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`No es un valor numerico ${base}`);
            return;
        }
        let data = '';
        for (let i = 1; i <= limite; i++) {

            data += `${base} * ${i}= ${base*i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err);
            else
                resolve(` tabla-${base}.txt`)
        });
    });
}


module.exports = {
    creaTexto,
    listarTabla

}