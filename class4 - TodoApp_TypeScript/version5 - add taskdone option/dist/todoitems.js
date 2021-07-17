"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoitems = void 0;
class todoitems {
    constructor(id, task, complete) {
        this.id = id;
        this.task = task;
        this.complete = complete;
    }
    printdata() {
        console.log(`${this.id} \t ${this.task} \t ${this.complete}`);
    }
}
exports.todoitems = todoitems;
