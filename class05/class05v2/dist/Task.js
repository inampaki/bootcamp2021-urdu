"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
class Task {
    constructor(taskId, task, done = true) {
        this.taskId = taskId;
        this.task = task;
        this.done = done;
    }
    printTask() {
        console.log(`The ID is: ${this.taskId} \n Task is: ${this.task} \n Completed: ${this.done}`);
    }
}
exports.Task = Task;
