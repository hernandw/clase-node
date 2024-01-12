const fs = require('fs')

const task = `
1. Ir al Gym
2. Ir al Cine
3. Ir al Parque
4. ir al Supermercado
5. ir a la tienda
6. ir al odontólogo
`

fs.writeFileSync('task.txt', task)
console.log('Se ha creado el archivo task.txt')

