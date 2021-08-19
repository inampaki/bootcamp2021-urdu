import {Task} from "./Task";

export class TaskCollection{
    private nextID: number = 1;
    private itemMap = new Map<number,Task>();

    constructor (public tasks: Task[]=[]){

    }
    public addTodo(task: string): void{
        let item: Task = new Task(this.nextID,task,false);
        this.nextID++;
        this.tasks.push(item);
        this.itemMap.set(this.nextID,new Task(this.nextID,task))
    }
    public printAll():void{
        this.tasks.forEach((item:Task)=>item.print_task());
    }

    public taskDone(taskID:number)
{
    let item: Task = this.tasks.find((item)=>item.taskID==taskID);
    item.done=true;
}

getTodoById(id:number): Task{
    return this.itemMap.get(id);

}
}
