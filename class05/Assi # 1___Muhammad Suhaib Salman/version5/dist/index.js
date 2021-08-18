"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ItemCollection_1 = require("./ItemCollection");
console.clear();
/*let item1 : TodoItem = new TodoItem(1,"Mango",true)
let item2 : TodoItem = new TodoItem(2,"Grapes",true)
let item3 : TodoItem = new TodoItem(3,"Oranges",false)

item1.printDetails();
item2.printDetails();
item3.printDetails();*/
let col1 = new ItemCollection_1.ItemCollection(); //As no parameter is added so an empty list will be created
col1.addTodo("Eat Mangoes");
col1.addTodo("Eat Tikkah");
col1.addTodo("Eat Orange");
col1.taskDone(2);
col1.printDetails();
