console.log(process.argv)

const command = process.argv[2]
const argument = process.argv[3]

console.log('Command:', command)
console.log('Argument:', argument)

if (command === 'add') {
    console.log('Добавляю задачу!')
} else {
    console.log('Unknown command')
}