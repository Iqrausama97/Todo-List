#! /usr/bin/env node
import inquirer from "inquirer";
let todolist = [];
let loop = true;
while (loop) {
    let addTask = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: "What you want to add in your Todo List."
        },
        {
            name: "addMore",
            type: "confirm",
            message: "Do you want to add more?",
            default: "true"
        }
    ]);
    todolist.push(addTask.todo);
    loop = addTask.addMore;
    console.log(todolist);
}
