import { TodoItem } from "./TodoItem";

export class ItemCollection{

    private nextId:number = 1;
    public constructor(public Items: TodoItem []=[]){

    }

    public addTodo(task:string):void{

        let item:TodoItem = new TodoItem(this.nextId , task ,false);
        this.nextId++;
        this.Items.push(item);
    }
    public printDetails():void{
        this.Items.forEach((item:TodoItem)=>item.printDetails())
    }
}