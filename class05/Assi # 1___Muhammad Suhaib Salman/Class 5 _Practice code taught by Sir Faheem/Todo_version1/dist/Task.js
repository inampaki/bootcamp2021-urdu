"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
class Task {
    constructor(taskID, task, done = true) {
        this.taskID = taskID;
        this.task = task;
        this.done = done;
    }
    print_task() {
        console.log(` ID : ${this.taskID}, Name : ${this.task}, Completion: ${this.done} `);
    }
}
exports.Task = Task;
