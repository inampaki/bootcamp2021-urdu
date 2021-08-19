export class Task{
    public constructor(public taskID: number,public task : string,public done: boolean = true ){

    }
     print_task():void{
         console.log(` ID : ${this.taskID}, Name : ${this.task}, Completion: ${this.done} `)
     }
}