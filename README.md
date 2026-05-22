# Task Tracker CLI

A simple command-line app to track your tasks.

Project from [roadmap.sh](https://roadmap.sh/projects/task-tracker)

## Requirements

- Node.js

## Usage

```bash
# Add a task
node task-cli.js add "Buy groceries"

# List all tasks
node task-cli.js list

# List by status
node task-cli.js list todo
node task-cli.js list done
node task-cli.js list in-progress

# Update a task
node task-cli.js update 1 "New description"

# Mark as done
node task-cli.js mark-done 1

# Mark as in progress
node task-cli.js mark-in-progress 1

# Delete a task
node task-cli.js delete 1
```