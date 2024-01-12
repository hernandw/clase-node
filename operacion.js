const fs = require('fs')

const multiplicarXbase = require('./multiplicar')

const [, , base = 1] = process.argv

/* console.log('La base es: ', base) */





fs.writeFileSync(`tabla-${base}.txt`, multiplicarXbase(base))
console.log(`Se ha creado el archivo tabla-${base}.txt`)