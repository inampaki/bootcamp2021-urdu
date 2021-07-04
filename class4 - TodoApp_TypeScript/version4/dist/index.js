"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const itemCollection_1 = require("./itemCollection");
console.clear();
let col1 = new itemCollection_1.ItemCollection();
col1.addTodo("Purchase Mango");
col1.addTodo("Eat Biryani");
col1.addTodo("Tikka");
col1.printDetails();
