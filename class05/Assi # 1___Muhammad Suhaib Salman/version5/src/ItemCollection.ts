import { TodoItem } from "./TodoItem";
export class ItemCollection {
    
    private NextID: number = 1 ;              //This variable cannot be excessed outside
    
    public constructor(public Items: TodoItem[]=[]){            //Default argument(If list is not given then an empty array will be created)
        
    }

    public addTodo(task:string):void{
        let item: TodoItem = new TodoItem(this.NextID,task,false);
        this.NextID++;
        this.Items.push(item);
    }

    
    public printDetails():void{
        this.Items.forEach((item:TodoItem)=>item.printDetails());
    
    }

    public taskDone(taskId: number){
        let item: TodoItem = this.Items.find((item) => item.id === taskId)                  //=== means that the type should also be the same
        item.complete = true;
    }

}