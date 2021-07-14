"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todoItem_1 = require("./todoItem");
const todoCollection_1 = require("./todoCollection");
// create a variable to store list of ids and tasks
let thingsTodo = [
    new todoItem_1.TodoItem(1, "Morning workout"), new todoItem_1.TodoItem(2, "Learn new thing"),
    new todoItem_1.TodoItem(3, "Code time"), new todoItem_1.TodoItem(4, "Help someone", true)
];
// create a variable that add thingsToDo in TodoCollection class
let collection = new todoCollection_1.TodoCollection("Awon", thingsTodo);
console.clear();
// display the number of incomplete items, along with completed items in console
console.log(`${collection.userName}'s Todo List`
    + `(${collection.getItemCounts().incomplete} items to do)`);
// call TodoItems method from TodoCollection
collection.getTodoItems(true).forEach(item => item.printDetails());
