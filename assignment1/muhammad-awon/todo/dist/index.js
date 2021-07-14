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
// add statements to make us of inquirer
function displayTodoList() {
    console.log(`${collection.userName}'s Todo List`
        + `(${collection.getItemCounts().incomplete} items to do)`);
    collection.getTodoItems(true).forEach(item => item.printDetails());
}
var Commands;
(function (Commands) {
    Commands["Quit"] = "Quit";
})(Commands || (Commands = {}));
function promptUser() {
    console.clear();
    displayTodoList();
    inquirer.prompt({
        type: 'list',
        name: 'command',
        message: 'Choose option',
        choices: Object.values(Commands)
    }).then(answers => {
        if (answers['command'] !== Commands.Quit) {
            promptUser();
        }
    });
}
promptUser();
