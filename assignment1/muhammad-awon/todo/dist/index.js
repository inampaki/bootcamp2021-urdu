"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todoItem_1 = require("./todoItem");
const todoCollection_1 = require("./todoCollection");
const inquirer = require("inquirer");
// create a variable to store list of ids and tasks
let thingsTodo = [
    new todoItem_1.TodoItem(1, "Morning workout"), new todoItem_1.TodoItem(2, "Learn new thing"),
    new todoItem_1.TodoItem(3, "Code time"), new todoItem_1.TodoItem(4, "Help someone", true)
];
// create a variable that add thingsToDo in TodoCollection class
let collection = new todoCollection_1.TodoCollection("Awon", thingsTodo);
// create a variable to show completed tasks
let showCompleted = true;
// add statements to make use of inquirer
function displayTodoList() {
    console.log(`${collection.userName}'s Todo List`
        + `(${collection.getItemCounts().incomplete} items to do)`);
    collection.getTodoItems(showCompleted).forEach(item => item.printDetails());
}
var Commands;
(function (Commands) {
    Commands["Add"] = "Add New Task";
    Commands["Complete"] = "Complete Task";
    Commands["Toggle"] = "Show/Hide Completed";
    Commands["Purge"] = "Remove Completed Tasks";
    Commands["Quit"] = "Quit";
})(Commands || (Commands = {}));
// create function to allow user to add new tasks
function promptAdd() {
    console.clear();
    inquirer.prompt({ type: 'input', name: 'add', message: 'Enter Task:' })
        .then(answers => {
        if (answers['add'] !== "") {
            collection.addTodo(answers['add']);
        }
        promptUser();
    });
}
// create function to allow user to mark completed tasks
function promptComplete() {
    console.clear();
    inquirer.prompt({ type: 'checkbox', name: 'complete',
        message: 'Mark Tasks Complete',
        choices: collection.getTodoItems(showCompleted).map(item => ({ name: item.task, value: item.id, checked: item.complete })) })
        .then(answers => {
        let completedTasks = answers['complete'];
        collection.getTodoItems(true).forEach(item => collection.markComplete(item.id, completedTasks.find(id => id === item.id) != undefined));
        promptUser();
    });
}
function promptUser() {
    console.clear();
    displayTodoList();
    inquirer.prompt({
        type: 'list',
        name: 'command',
        message: 'Choose option',
        choices: Object.values(Commands)
    }).then(answers => {
        switch (answers['command']) {
            case Commands.Toggle:
                showCompleted = !showCompleted;
                promptUser();
                break;
            case Commands.Add:
                promptAdd();
                break;
            case Commands.Complete:
                if (collection.getItemCounts().incomplete > 0) {
                    promptComplete();
                }
                else {
                    promptUser();
                }
                break;
            case Commands.Purge:
                collection.removeComplete();
                promptUser();
                break;
        }
    });
}
promptUser();
