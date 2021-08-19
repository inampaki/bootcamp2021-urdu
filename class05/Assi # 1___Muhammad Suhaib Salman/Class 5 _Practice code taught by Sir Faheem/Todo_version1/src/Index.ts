import { Task } from "./Task";
import {TaskCollection} from "./TaskCollection";
let taks01 : TaskCollection = new TaskCollection();
taks01.addTodo("Buy Mangoes");
taks01.addTodo('Buy battery');
taks01.printAll();

taks01.taskDone(2);
taks01.printAll();

taks01.addTodo("Buy lights");
taks01.addTodo("Tikkah Massala")
taks01.getTodoById(3);
taks01.printAll();




