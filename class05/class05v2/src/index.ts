var message:string = "Hello World" 
console.log(message)

import {Task} from "./Task";
import {TaskCollection} from "./TaskCollection";

let task01 : TaskCollection = new TaskCollection();
task01.addTodo("Aam Ley Aoo");
task01.addTodo("Battery Terminal Ley Aoo");
task01.printAll();

task01.taskDone(2);
task01.printAll();

task01.addTodo("Dahi Lee Aooo");
task01.addTodo("Tikka Masla Lee Aooo");
task01.getTodoById(3);

