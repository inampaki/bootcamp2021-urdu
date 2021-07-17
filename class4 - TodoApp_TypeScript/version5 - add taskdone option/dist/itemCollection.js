"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemCollection = void 0;
const todoitems_1 = require("./todoitems");
class ItemCollection {
    constructor(Items = []) {
        this.Items = Items;
        this.nextId = 1;
    }
    addTodo(task) {
        let item = new todoitems_1.todoitems(this.nextId, task, false);
        this.nextId++;
        this.Items.push(item);
    }
    printDetails() {
        this.Items.forEach((item) => item.printdata());
    }
    taskDone(taskId) {
        let item = this.Items.find((item) => item.id === taskId);
        item.complete = true;
    }
}
exports.ItemCollection = ItemCollection;
