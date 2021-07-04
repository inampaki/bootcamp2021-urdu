"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemCollection = void 0;
const todoItem_1 = require("./todoItem");
class ItemCollection {
    constructor(Items = []) {
        this.Items = Items;
        this.nextId = 1;
    }
    addTodo(task) {
        let item = new todoItem_1.TodoItem(this.nextId, task, false);
        this.nextId++;
        this.Items.push(item);
    }
    printDetails() {
        this.Items.forEach((item) => item.printDetails());
    }
}
exports.ItemCollection = ItemCollection;
