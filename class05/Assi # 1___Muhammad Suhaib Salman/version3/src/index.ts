import { TodoItem } from "./TodoItem";
console.clear();

let item1 : TodoItem = new TodoItem(1,"Mango",true)
let item2 : TodoItem = new TodoItem(2,"Grapes",true)
let item3 : TodoItem = new TodoItem(3,"Oranges",false)

item1.printDetails();
item2.printDetails();
item3.printDetails();