import { todoitems } from "./todoitems";
import {ItemCollection} from "./itemCollection";

console.clear();

let col1:ItemCollection = new ItemCollection();

col1.addTodo("Go to Bazar");
col1.addTodo("Take classes on zoom");
col1.addTodo("Finish college assignment");


col1.taskDone(1);
col1.taskDone(3);

col1.printDetails();