const fs = require('fs')

const multiplicarXbase = require('./multiplicar')

const base = 2;



fs.writeFileSync(`tabla-${base}.txt`, multiplicarXbase(base))
console.log(`Se ha creado el archivo tabla-${base}.txt`)