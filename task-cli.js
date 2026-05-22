// console.log(process.argv)
const fs = require('fs')

const command = process.argv[2]
const argument = process.argv[3]
const description = process.argv[4]

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
} else if (command === "delete"){
    const data = fs.readFileSync('tasks.json', 'utf-8')
    const tasks = JSON.parse(data)
    const newTasks = tasks.filter(task => task.id !== Number(argument))
    fs.writeFileSync('tasks.json', JSON.stringify(newTasks, null, 2))
    console.log(`Task deleted successfully`)
} else if (command === 'mark-done') {
    const data = fs.readFileSync('tasks.json', 'utf-8')
    const tasks = JSON.parse(data)
    tasks.forEach(task => {
        if (task.id === Number(argument)) {
            task.status = 'done'
        }
    })
    fs.writeFileSync('tasks.json', JSON.stringify(tasks, null, 2))
    console.log('Task marked as done')
} else if (command === "mark-in-progress") {
    const data = fs.readFileSync('tasks.json', 'utf-8')
    const tasks = JSON.parse(data)
    tasks.forEach(task => {
        if (task.id === Number(argument)) {
            task.status = 'in-progress'
        }
    })
    fs.writeFileSync('tasks.json', JSON.stringify(tasks, null, 2))
    console.log('Task marked as in-progress')
} else if (command === 'update'){
    const data = fs.readFileSync('tasks.json', 'utf-8')
    const tasks = JSON.parse(data)
    tasks.forEach(task => {
        if (task.id === Number(argument)){
            task.description = description
        }
    })
    fs.writeFileSync('tasks.json', JSON.stringify(tasks, null, 2))
    console.log('Task updated')
} else {
    console.log('Unknown command')
}

