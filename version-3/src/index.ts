import { TodoItem } from "./todoItem";
import { TodoCollection } from "./todoCollection";

let todos = [
 new TodoItem(1, "Buy Flowers"),
 new TodoItem(2, "Get Shoes"),
 new TodoItem(3, "Collect Tickets"), 
 new TodoItem(4, "Call Joe", true),
new TodoItem(5, "send an email", true)];
let collection = new TodoCollection("Sana", todos);

console.clear();

console.log(`${collection.userName}'s Todo List`);

let newId = collection.addTodo("Go for shopping");

let todoItem = collection.getTodoById(newId);

console.log(JSON.stringify(todoItem));