import { TodoItem } from "./TodoItem";

// ? type keyword is used to define type aliases
// ? type stringOrNum = string | number;
// ? much like structs in C
// ? user defined type

// todo: enum vs type

type itemCounts = {
  total: number;
  incomplete: number;
};

export class TodoCollection {
  private nextId: number = 1;

  // ? <> is generic type
  // ? number is key, TodoItem is value

  // ? private => properties are not accessible outside class
  // ? protected => subclasses have access to properties

  protected itemMap = new Map<number, TodoItem>();

  constructor(public userName: string, public todoItems: TodoItem[] = []) {
    // ! item is a class object here
    // ! (compare with line 36 in jsonTodoCollection.ts)

    // * https://stackoverflow.com/questions/58300615/what-is-the-difference-between-an-object-and-an-object-from-a-class-in-javascrip

    todoItems.forEach((item) => this.itemMap.set(item.id, item));
  }

  addTodo(task: string): number {
    // ! takes task and adds it in the list of todos
    // ! returns the unique id number for task that was added

    // ? traverse the todoItems array until undefined/ false

    while (this.getTodoById(this.nextId)) {
      this.nextId++;
    }

    this.itemMap.set(this.nextId, new TodoItem(this.nextId, task));
    return this.nextId;
  }

  getTodoById(id: number): TodoItem {
    // ! if the id is not present, it will return undefined

    return this.itemMap.get(id);
  }

  getTodoItems(includeComplete: boolean): TodoItem[] {
    // * The values() method returns a new Iterator object that
    // * contains the values for each element in the Map object in insertion order.

    // * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/values

    // ? create array of objects using spread operator ...
    // ? filter the objects
    // ? if includeComplete = true, we want all the todos whether completed or not completed
    // ? if includeComplete = false, item => !item.status ~ !(false) ~ !(tasks-not-completed) => return only those tasks that are pending

    return [...this.itemMap.values()].filter(
      (item) => includeComplete || !item.status
    );
  }

  markComplete(id: number, status: boolean) {
    const todoItem = this.getTodoById(id);
    if (todoItem) {
      todoItem.status = status;
    }
  }

  removeComplete() {
    this.itemMap.forEach((item) => {
      if (item.status) {
        this.itemMap.delete(item.id);
      }
    });
  }

  getItemCounts(): itemCounts {
    return {
      total: this.itemMap.size,
      incomplete: this.getTodoItems(false).length,
    };
  }
}
