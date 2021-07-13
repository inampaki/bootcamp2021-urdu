import { TodoItem } from "./todoItem";

export class TodoCollection {
    // create instance to be used only in TodoCollection
    private nextId: number = 1;

    constructor(public userName: string, public todoItems: TodoItem[]=[]) {
        // no statements required
    }

    // create method to add items in the todoItems list
    addTodo(task: string): number {
        while (this.getTodoById(this.nextId)) {
            this.nextId++;   // nextId++ is same as nextId = nextId + 1;
        }
        // push task in todoItems list
        this.todoItems.push(new TodoItem(this.nextId, task));
        return this.nextId;
    }

    // create method to add task by id number
    getTodoById(id: number): TodoItem {
        return this.todoItems.find(item=>item.id === id);
    }

    // create method to update task completion status
    markComplete(id: number, complete: boolean) {
        const todoItem = this.getTodoById(id);
        if(todoItem) {
            todoItem.complete = complete;
        }
    }
}