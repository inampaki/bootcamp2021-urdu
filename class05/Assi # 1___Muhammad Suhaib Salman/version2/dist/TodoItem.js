"use strict";
/* A class consists of 2 components:
   Attributes
   Methods(functions)*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoItem = void 0;
class TodoItem {
    constructor(id, task, complete) {
        this.id = id;
        this.task = task;
        this.complete = complete;
    }
    printDetails() {
        console.log(`ID: ${this.id} \t Task: ${this.task} \t Completion: ${this.complete}`);
    }
}
exports.TodoItem = TodoItem;
