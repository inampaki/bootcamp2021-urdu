import { TodoItem } from "./todoItem";
import { TodoCollection } from "./todoCollection";
import * as inquirer from 'inquirer';

// create a variable to store list of ids and tasks
let thingsTodo: TodoItem[] = [
    new TodoItem(1, "Morning workout"), new TodoItem(2, "Learn new thing"),
    new TodoItem(3, "Code time"), new TodoItem(4, "Help someone", true)
];

// create a variable that add thingsToDo in TodoCollection class
let collection: TodoCollection = new TodoCollection("Awon", thingsTodo);
// create a variable to show completed tasks
let showCompleted = true;


// add statements to make use of inquirer
function displayTodoList(): void {
    console.log(`${collection.userName}'s Todo List`
    + `(${collection.getItemCounts().incomplete} items to do)`);
    collection.getTodoItems(showCompleted).forEach(item=>item.printDetails());
}

enum Commands {
    Add = 'Add New Task',
    Toggle = 'Show/Hide Completed',
    Quit = 'Quit'
}

// create function to allow user to add new tasks
function promptAdd(): void {
    console.clear();
    inquirer.prompt({type: 'input', name: 'add', message: 'Enter Task:'})
    .then(answers=>{if (answers['add'] !== "") {
        collection.addTodo(answers['add']);
        }
        promptUser();
    })
}

function promptUser(): void {
    console.clear();
    displayTodoList();
    inquirer.prompt({
        type: 'list',
        name: 'command',
        message: 'Choose option',
        choices: Object.values(Commands)
    }).then(answers=>{
        switch (answers['command']) {
            case Commands.Toggle:
                showCompleted = !showCompleted;
                promptUser();
                break;
            case Commands.Add:
                promptAdd();
                break;
        }
    })
}

promptUser();