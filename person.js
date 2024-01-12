const fs = require('fs')

const person = [
    {
        name: "John",
        age: 30
    },
    {
        name: "Jane",
        age: 25
    },
    {
        name: "Bob",
        age: 40
    },
    {
        name: "Alice",
        age: 35
    }
]

fs.writeFileSync('person.json', JSON.stringify(person))
console.log('Se ha creado el archivo person.json')