import { TodoItem } from "./TodoItem";
import { TodoCollection } from "./TodoCollection";
import * as lowdb from "lowdb";
import * as FileSync from "lowdb/adapters/FileSync";

// ? import * => Import the entire module into a single variable,
// ? and use it to access the module exports
// * https://www.typescriptlang.org/docs/handbook/modules.html#import-the-entire-module-into-a-single-variable-and-use-it-to-access-the-module-exports

type schemaType = {
  // ! an array of objects with 3 keys (id, task, status) in each object

  tasks: {
    id: number;
    task: string;
    status: boolean;
  }[];
};

export class JsonTodoCollection extends TodoCollection {
  // ? set up a schema type in the Todos.json database
  // ? see schemaType => key tasks has a value of array of objects, similarly,
  // ? Todos.json has the same schema

  private database: lowdb.LowdbSync<schemaType>;

  constructor(public userName: string, todoItems: TodoItem[] = []) {
    // ? passing [] since tasks we want tasks to be loaded from databases,
    // ? not index.ts (see line 15 in index.ts)

    super(userName, []);

    // ? create a database called Todos.json

    this.database = lowdb(new FileSync("Todos.json"));

    if (this.database.has("tasks").value()) {
      let dbItems = this.database.get("tasks").value();

      // ! item is an object literal ({id: , task:, status: }) here
      // ! so we make it an object of class TodoItem explicitly
      // ! (compare with line 28 in TodoCollection.ts)

      // * https://stackoverflow.com/questions/58300615/what-is-the-difference-between-an-object-and-an-object-from-a-class-in-javascrip

      dbItems.forEach((item) =>
        this.itemMap.set(item.id, new TodoItem(item.id, item.task, item.status))
      );
    } else {
      this.database.set("tasks", todoItems).write();

      // ! item is an object literal here

      todoItems.forEach((item) => this.itemMap.set(item.id, item));
    }
  }

  addTodo(task: string): number {
    let result = super.addTodo(task);
    this.storeTasks();
    return result;
  }

  markComplete(id: number, status: boolean): void {
    super.markComplete(id, status);
    this.storeTasks();
  }

  removeComplete(): void {
    super.removeComplete();
    this.storeTasks();
  }

  private storeTasks() {
    // * The values() method returns a new Iterator object that
    // * contains the values for each element in the Map object in insertion order.

    // ? create array of objects using spread operator ...
    // ? write to database

    this.database.set("tasks", [...this.itemMap.values()]).write();
  }
}
