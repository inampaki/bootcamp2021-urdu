import { TodoItem } from "./TodoItem";
import {ItemCollection} from "./itemCollection"

console.clear();

let col1:ItemCollection = new ItemCollection();

col1.addTodo("Purchase kurti of j.");
col1.addTodo("Purchase kurti of ideas.");
col1.addTodo("Purchase kurti of Gul Ahmed.");


col1.taskDone(3);
col1.printDetails();
