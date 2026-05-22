// console.log(process.argv)
const fs = require('fs')

const command = process.argv[2]
const argument = process.argv[3]

console.log('Command:', command)
console.log('Argument:', argument)

if (command === 'add') {
    const data = fs.readFileSync('tasks.json', 'utf-8')
    const tasks = JSON.parse(data)
    console.log(tasks)
} else {
    console.log('Unknown command')
}
