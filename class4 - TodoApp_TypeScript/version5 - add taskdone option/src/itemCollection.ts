import { todoitems } from "./todoitems";

export class ItemCollection{
    private nextId: number = 1;

    public constructor(public Items: todoitems[]=[]){

    }

    public addTodo(task:string):void{
        let item:todoitems = new todoitems(this.nextId, task, false);
        this.nextId ++;
        this.Items.push(item);
    }

    public printDetails():void {
        this.Items.forEach((item:todoitems)=>item.printdata());
    }

    public taskDone(taskId:number){
        let item :todoitems = this.Items.find((item)=>item.id === taskId);
        item.complete = true;
    }


}