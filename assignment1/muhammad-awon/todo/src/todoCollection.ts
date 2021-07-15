import { TodoItem } from "./todoItem";
// statement for names and types combination (shape type)
type ItemCounts = {
    total: number,
    incomplete: number
}

export class TodoCollection {
    // create instance to be used only in TodoCollection
    private nextId: number = 1;
    // change the access control so that subclasses can access the Map
    protected itemMap = new Map<number, TodoItem>();

    constructor(public userName: string, todoItems: TodoItem[]=[]) {
        todoItems.forEach(item=>this.itemMap.set(item.id, item));
    }

    // ..methods omitted for brevity..
}