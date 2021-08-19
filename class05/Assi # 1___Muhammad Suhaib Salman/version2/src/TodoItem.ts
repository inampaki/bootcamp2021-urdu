/* A class consists of 2 components:
   Attributes 
   Methods(functions)*/


export class TodoItem{                  
    public id: number;
    public task: string;
    public complete: boolean;

    public constructor(id:number,task:string,complete:boolean)               //To make object from this class constructor is used and constrcutor is a type of method
    {
        this.id = id;
        this.task = task;
        this.complete = complete;
    }
    public printDetails() : void{
        console.log(`ID: ${this.id} \t Task: ${this.task} \t Completion: ${this.complete}`);
    }

}