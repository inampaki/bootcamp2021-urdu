import { Task } from "./Task";
export class TaskCollection {
    constructor(tasks = []) {
        this.tasks = tasks;
        this.nextId = 1;
        this.itemMap = new Map();
    }
    addTodo(task) {
        let item = new Task(this.nextId, task, false);
        // this.nextId = this.nextId + 1;
        this.nextId++;
        this.tasks.push(item);
        this.itemMap.set(this.nextId, new Task(this.nextId, task));
    }
    printAll() {
        this.tasks.forEach((item) => item.printTask());
    }
}
