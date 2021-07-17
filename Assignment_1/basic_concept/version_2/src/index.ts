import { TodoItem } from "./TodoItem";

console.clear();

let item1 : TodoItem = new TodoItem (1 ,"Purchase kurti of j.",false);
let item2 : TodoItem = new TodoItem (2,"Purchase shirt of ideas",false);
let item3 : TodoItem = new TodoItem (3,"Purchase shirt of Gulahemed",false);

item1.printDetails();
item2.printDetails();
item3.printDetails();