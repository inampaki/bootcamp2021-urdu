var message:string = "Hello World" 
console.log(message)

import {Task} from "./Task";
import {TaskCollection} from "./TaskCollection";

let task01 : TaskCollection = new TaskCollection();
task01.addTodo("Aam Ley Aoo");
task01.printAll();