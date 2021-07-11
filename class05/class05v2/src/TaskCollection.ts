import {Task} from "./Task";

export class TaskCollection{
    private nextId : number = 1;
    private itemMap = new Map<number, Task>();

    constructor(public tasks: Task[] = []){

    }

    public addTodo(task: string) : void{
        let item: Task = new Task(this.nextId, task, false);
        // this.nextId = this.nextId + 1;
        this.nextId++;
        this.tasks.push(item);
        this.itemMap.set(this.nextId, new Task(this.nextId, task))
    }

    public printAll() : void{
        this.tasks.forEach((item: Task)=> item.printTask());
    }

    public taskDone(taskId: number){
        let item:Task = this.tasks.find((item)=>item.taskId == taskId);
        item.done = true;
    }

    getTodoById(id: number) : Task{
        return this.itemMap.get(id);
    }
}