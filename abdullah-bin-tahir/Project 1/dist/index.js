"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TodoItem_1 = require("./TodoItem");
const inquirer = require("inquirer");
const jsonTodoCollection_1 = require("./jsonTodoCollection");
let todoList = [
    new TodoItem_1.TodoItem(1, "Work on drone-detection"),
    new TodoItem_1.TodoItem(2, "understand 'this' keyword"),
    new TodoItem_1.TodoItem(3, "Sleep", true),
    new TodoItem_1.TodoItem(4, "Mail tech support"),
    new TodoItem_1.TodoItem(5, "Water plants"),
];
let collection = new jsonTodoCollection_1.JsonTodoCollection("Abdullah", todoList);
let showCompleted = true;
function displayTodoList() {
    console.log(`${collection.userName}'s Todo List! ` +
        ` (${collection.getItemCounts().incomplete} tasks to do)`);
    console.log("---------------------------------------");
    collection.getTodoItems(showCompleted).forEach((item) => item.printDetails());
}
// * https://stackoverflow.com/questions/4709175/what-are-enums-and-why-are-they-useful
// ! enums give increased compile-time checking
// ? this means there will be less issues during run time
// ! enums should be used when a variable (esp method parameter) can take one out of a small set of
// ! possible values for example => status: married, single, engineer
var Commands;
(function (Commands) {
    Commands["Add"] = "Add New Task";
    Commands["Toggle"] = "Show/ Hide Completed";
    Commands["Complete"] = "Complete Task";
    Commands["Remove"] = "Remove Completed Tasks";
    Commands["Quit"] = "Quit";
})(Commands || (Commands = {}));
// ! using validate instead of call back promise for validating user input
function promptAdd() {
    console.clear();
    inquirer
        .prompt({
        type: "input",
        name: "add",
        message: "Add Task:",
        validate: (answer) => {
            // ? check if the user entered an empty string
            if (answer == "") {
                return false;
                // ? with description
                // return "Please enter a valid task"
            }
            return true;
        },
    })
        .then((answers) => {
        collection.addTodo(answers["add"]);
        promptUser();
    });
}
function promptComplete() {
    console.clear();
    inquirer
        .prompt({
        type: "checkbox",
        name: "complete",
        message: "Mark the completed tasks: ",
        // * https://www.npmjs.com/package/inquirer
        // * choices: (Array|Function) Choices array or a function returning a choices array.
        // * Array values can be simple numbers, strings, or objects containing a name
        // * (to display in list), a value (to save in the answers hash)
        choices: collection.getTodoItems(showCompleted).map((item) => ({
            name: item.task,
            value: item.id,
            checked: item.status,
        })),
    })
        .then((answers) => {
        // todo: what is inside completedTasks
        let completedTasks = answers["complete"];
        console.log(completedTasks);
        collection
            .getTodoItems(true)
            .forEach((item) => collection.markComplete(item.id, completedTasks.find((id) => id === item.id) != undefined));
        promptUser();
    });
}
function promptUser() {
    console.clear();
    displayTodoList();
    inquirer
        .prompt({
        type: "list",
        name: "command",
        message: "Choose option",
        choices: Object.values(Commands),
    })
        .then((answers) => {
        // ? answers["command"] has the user input
        switch (answers["command"]) {
            case Commands.Toggle:
                showCompleted = !showCompleted;
                promptUser();
                break;
            case Commands.Add:
                promptAdd();
                break;
            case Commands.Complete:
                if (collection.getItemCounts().incomplete > 0) {
                    promptComplete();
                }
                else {
                    promptUser();
                }
                break;
            case Commands.Remove:
                collection.removeComplete();
                promptUser();
                break;
        }
    });
}
promptUser();
