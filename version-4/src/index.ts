import { TodoItem } from "./todoItem";
import { TodoCollection } from "./todoCollection";

let todos: TodoItem[] = [
 new TodoItem(1, "Buy Flowers"),
 new TodoItem(2, "Get Shoes"),
 new TodoItem(3, "Collect Tickets"), 
 new TodoItem(4, "Call Joe", true),
new TodoItem(5, "send an email", true)];
let collection: TodoCollection = new TodoCollection("Sana", todos);

console.clear();

console.log(`${collection.userName}'s Todo List`);

let newId: number = collection.addTodo("Go for shopping");

let todoItem: TodoItem = collection.getTodoById(newId);

todoItem.printDetails();