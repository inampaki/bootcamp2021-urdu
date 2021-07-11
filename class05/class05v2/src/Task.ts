export class Task{
    public constructor(public taskId: number, public task: string, public done: boolean = true){

    }
    printTask():void{
        console.log(`The ID is: ${this.taskId} \n Task is: ${this.task} \n Completed: ${this.done}`)
    }
}