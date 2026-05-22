// console.log(process.argv)
const fs = require('fs')

const command = process.argv[2]
const argument = process.argv[3]

console.log('Command:', command)
console.log('Argument:', argument)

if (command === 'add') {
    const data = fs.readFileSync('tasks.json', 'utf-8')
    const tasks = JSON.parse(data)
    const newTask = {
        id: tasks.length + 1,
        description: argument,
        status: 'todo',
        createdAt: new Date().toISOString()
    }
    
    tasks.push(newTask)
    fs.writeFileSync('tasks.json', JSON.stringify(tasks, null, 2))
    console.log(`Task added successfully (ID: ${newTask.id})`)    
    console.log(tasks)
} else if (command === "list"){
    const data = fs.readFileSync('tasks.json', 'utf-8')
    const tasks = JSON.parse(data)
    tasks.forEach(task => {
        console.log(`[${task.id}] ${task.description} - ${task.status}`)
    });
    
} else {
    console.log('Unknown command')
}

