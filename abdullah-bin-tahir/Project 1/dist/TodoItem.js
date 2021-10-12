"use strict";
// defining the data model for todo list application
// data model => describe application's data + operations performed by application
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoItem = void 0;
// classes are templates that describe a data type
// here the data type is one single todo item
class TodoItem {
    constructor(id, task, status = false) {
        this.id = id;
        this.task = task;
        this.status = status;
    }
    printDetails() {
        console.log(`${this.id}\t ${this.task} ${this.status ? "\t(COMPLETED)" : "\t"}`);
    }
}
exports.TodoItem = TodoItem;
