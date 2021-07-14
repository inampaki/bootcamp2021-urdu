import { TodoItem } from "./todoItem";

export class TodoCollection {
    // create instance to be used only in TodoCollection
    private nextId: number = 1;
    // use JS Map function to store TodoItem objects using number as keys
    private itemMap = new Map<number, TodoItem>();

    constructor(public userName: string, todoItems: TodoItem[]=[]) {
        todoItems.forEach(item=>this.itemMap.set(item.id, item));
    }

    // create method to add items in the todoItems list
    addTodo(task: string): number {
        while (this.getTodoById(this.nextId)) {
            this.nextId++;   // nextId++ is same as nextId = nextId + 1;
        }
        this.itemMap.set(this.nextId, new TodoItem(this.nextId, task));
        return this.nextId;
    }

    // create method to add task by id number
    getTodoById(id: number): TodoItem {
        return this.itemMap.get(id);
    }

    // create method to update task completion status
    markComplete(id: number, complete: boolean) {
        const todoItem = this.getTodoById(id);
        if(todoItem) {
            todoItem.complete = complete;
        }
    }
}