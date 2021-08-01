"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonTodoCollection = void 0;
const TodoItem_1 = require("./TodoItem");
const TodoCollection_1 = require("./TodoCollection");
const lowdb = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
class JsonTodoCollection extends TodoCollection_1.TodoCollection {
    constructor(userName, todoItems = []) {
        super(userName, []); // ! why [] ?!?
        this.userName = userName;
        // ? create a database called Todos.json
        this.database = lowdb(new FileSync("Todos.json"));
        if (this.database.has("tasks").value()) {
            let dbItems = this.database.get("tasks").value();
            // ! item is an object literal ({id: , task:, status: }) here
            // ! so we make it an object of class TodoItem explicitly
            // ! (compare with line 28 in TodoCollection.ts)
            // * https://stackoverflow.com/questions/58300615/what-is-the-difference-between-an-object-and-an-object-from-a-class-in-javascrip
            dbItems.forEach((item) => this.itemMap.set(item.id, new TodoItem_1.TodoItem(item.id, item.task, item.status)));
        }
        else {
            this.database.set("tasks", todoItems).write();
            // ! item is an object literal here
            todoItems.forEach((item) => this.itemMap.set(item.id, item));
        }
    }
    addTodo(task) {
        let result = super.addTodo(task);
        this.storeTasks();
        return result;
    }
    markComplete(id, status) {
        super.markComplete(id, status);
        this.storeTasks();
    }
    removeComplete() {
        super.removeComplete();
        this.storeTasks();
    }
    storeTasks() {
        // * The values() method returns a new Iterator object that
        // * contains the values for each element in the Map object in insertion order.
        // ? create array of objects using spread operator ...
        // ? write to database
        this.database.set("tasks", [...this.itemMap.values()]).write();
    }
}
exports.JsonTodoCollection = JsonTodoCollection;
