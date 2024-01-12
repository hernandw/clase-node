/* Crear la tabla del 5 usando un bucle for. */

const fs = require('fs');

let base = 5

let salida = ''
const multiplicarXbase = (base) => {
    
    for (let i = 1; i <= 10; i++) {
      salida += `${base} x ${i} = ${base * i}\n`;
    }
    return salida
    
    
}

module.exports = multiplicarXbase


/* 


console.log('================')
console.log(`TABLA DEL ${base}`)
console.log("================");
console.log(salida)
console.log(`Se ha creado el archivo tabla-${base}.txt`); */

