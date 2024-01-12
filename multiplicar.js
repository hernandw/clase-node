/* Crear la tabla del 5 usando un bucle for. */

const fs = require('fs');

const base = 3;
let salida = ''

for (let i = 1; i <= 10; i++) {
    salida += `${base} x ${i} = ${base * i}\n`;
}

fs.writeFileSync(`tabla-${base}.txt`, salida);
console.log('================')
console.log(`TABLA DEL ${base}`)
console.log("================");
console.log(salida)
console.log(`Se ha creado el archivo tabla-${base}.txt`);

