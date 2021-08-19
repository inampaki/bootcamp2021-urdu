"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemCollection = void 0;
const TodoItem_1 = require("./TodoItem");
class ItemCollection {
    constructor(Items = []) {
        this.Items = Items;
        this.NextID = 1; //This variable cannot be excessed outside
    }
    addTodo(task) {
        let item = new TodoItem_1.TodoItem(this.NextID, task, false);
        this.NextID++;
        this.Items.push(item);
    }
    printDetails() {
        this.Items.forEach((item) => item.printDetails());
    }
}
exports.ItemCollection = ItemCollection;
