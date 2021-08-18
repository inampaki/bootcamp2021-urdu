//Removing completed task
import { TodoItem } from "./todoItem";
import { TodoCollection } from "./todoCollection";
import * as inquirer from 'inquirer';

let todos: TodoItem[] = [
 new TodoItem(1, "Buy Flowers"),
 new TodoItem(2, "Get Shoes"),
 new TodoItem(3, "Collect Tickets"), 
 new TodoItem(4, "Call Joe", true),
new TodoItem(5, "send an email", true)];
let collection: TodoCollection = new TodoCollection("Sana", todos);
let showCompleted = true;

function displayTodoList(): void {
    console.log(`${collection.userName}'s Todo List `
    + `(${ collection.getItemCounts().incomplete } items to do)`);
    collection.getTodoItems(true).forEach(item => item.printDetails());
    collection.getTodoItems(showCompleted).forEach(item => item.printDetails());
   }
   enum Commands {
    Toggle = "Show/Hide Completed",
    Quit = "Quit"
   }
   function promptUser(): void {
    console.clear();
    displayTodoList();
    inquirer.prompt({
    type: "list",
    name: "command",
    message: "Choose option",
    choices: Object.values(Commands),
    //badProperty: true
    }).then(answers => {
        switch (answers["command"]) {
            case Commands.Toggle:
            showCompleted = !showCompleted;
            promptUser();
            break;
 }
 })
}
promptUser();

console.clear();

//console.log(`${collection.userName}'s Todo List`);

//let newId: number = collection.addTodo("Go for shopping");

//let todoItem: TodoItem = collection.getTodoById(newId);

//todoItem.printDetails();
console.log(`${collection.userName}'s Todo List `
 + `(${ collection.getItemCounts().incomplete } items to do)`);

collection.getTodoItems(true).forEach(item => item.printDetails());