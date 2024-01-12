const fs = require('fs');

const person = fs.readFileSync('person.json', 'utf-8')
console.log(JSON.parse(person))