"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Removing completed task
const todoItem_1 = require("./todoItem");
const todoCollection_1 = require("./todoCollection");
const inquirer = require("inquirer");
let todos = [
    new todoItem_1.TodoItem(1, "Buy Flowers"),
    new todoItem_1.TodoItem(2, "Get Shoes"),
    new todoItem_1.TodoItem(3, "Collect Tickets"),
    new todoItem_1.TodoItem(4, "Call Joe", true),
    new todoItem_1.TodoItem(5, "send an email", true)
];
let collection = new todoCollection_1.TodoCollection("Sana", todos);
let showCompleted = true;
function displayTodoList() {
    console.log(`${collection.userName}'s Todo List `
        + `(${collection.getItemCounts().incomplete} items to do)`);
    collection.getTodoItems(true).forEach(item => item.printDetails());
    collection.getTodoItems(showCompleted).forEach(item => item.printDetails());
}
var Commands;
(function (Commands) {
    Commands["Toggle"] = "Show/Hide Completed";
    Commands["Quit"] = "Quit";
})(Commands || (Commands = {}));
function promptUser() {
    console.clear();
    displayTodoList();
    inquirer.prompt({
        type: "list",
        name: "command",
        message: "Choose option",
        choices: Object.values(Commands),
        //badProperty: true
    }).then(answers => {
        switch (answers["command"]) {
            case Commands.Toggle:
                showCompleted = !showCompleted;
                promptUser();
                break;
        }
    });
}
promptUser();
console.clear();
//console.log(`${collection.userName}'s Todo List`);
//let newId: number = collection.addTodo("Go for shopping");
//let todoItem: TodoItem = collection.getTodoById(newId);
//todoItem.printDetails();
console.log(`${collection.userName}'s Todo List `
    + `(${collection.getItemCounts().incomplete} items to do)`);
collection.getTodoItems(true).forEach(item => item.printDetails());
