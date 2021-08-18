"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Listing 1-18. Using a Map in the todoCollection.ts File in the src Folder
const todoItem_1 = require("./todoItem");
const todoCollection_1 = require("./todoCollection");
let todos = [
    new todoItem_1.TodoItem(1, "Buy Flowers"),
    new todoItem_1.TodoItem(2, "Get Shoes"),
    new todoItem_1.TodoItem(3, "Collect Tickets"),
    new todoItem_1.TodoItem(4, "Call Joe", true),
    new todoItem_1.TodoItem(5, "send an email", true)
];
let collection = new todoCollection_1.TodoCollection("Sana", todos);
console.clear();
console.log(`${collection.userName}'s Todo List`);
//let newId: number = collection.addTodo("Go for shopping");
//let todoItem: TodoItem = collection.getTodoById(newId);
//todoItem.printDetails();
collection.getTodoItems(true).forEach(item => item.printDetails());
