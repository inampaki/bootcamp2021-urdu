import { TodoItem } from "./todoItem";

console.clear();

let item1: TodoItem = new TodoItem(1,"Purchase Mango", false);
let item2: TodoItem = new TodoItem(2,"Eat Biryani", false);

item1.printDetails();
item2.printDetails();