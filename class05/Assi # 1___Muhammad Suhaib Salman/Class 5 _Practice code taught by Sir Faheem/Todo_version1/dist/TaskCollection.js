"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskCollection = void 0;
const Task_1 = require("./Task");
class TaskCollection {
    constructor(tasks = []) {
        this.tasks = tasks;
        this.nextID = 1;
        this.itemMap = new Map();
    }
    addTodo(task) {
        let item = new Task_1.Task(this.nextID, task, false);
        this.nextID++;
        this.tasks.push(item);
        this.itemMap.set(this.nextID, new Task_1.Task(this.nextID, task));
    }
    printAll() {
        this.tasks.forEach((item) => item.print_task());
    }
    taskDone(taskID) {
        let item = this.tasks.find((item) => item.taskID == taskID);
        item.done = true;
    }
    getTodoById(id) {
        return this.itemMap.get(id);
    }
}
exports.TaskCollection = TaskCollection;
