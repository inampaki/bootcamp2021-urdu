import { TodoItem } from "./todoItem";
import { TodoCollection } from "./todoCollection";

// create a variable to store list of ids and tasks
let thingsTodo: TodoItem[] = [
    new TodoItem(1, "Morning workout"), new TodoItem(2, "Learn new thing"),
    new TodoItem(3, "Code time"), new TodoItem(4, "Help someone", true)
];

// create a variable that add thingsToDo in TodoCollection class
let collection: TodoCollection = new TodoCollection("Awon", thingsTodo);

console.clear();
// display the number of incomplete items, along with completed items in console
console.log(`${collection.userName}'s Todo List`
+ `(${collection.getItemCounts().incomplete} items to do)`);

// call TodoItems method from TodoCollection
collection.getTodoItems(true).forEach(item=>item.printDetails());
