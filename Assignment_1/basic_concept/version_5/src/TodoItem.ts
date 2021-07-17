export class TodoItem{
    

    public constructor (public id:number, public task:string, public complete:boolean){
       
    }
    printDetails():void{
        console.log(`${this.id}\t ${this.task}\t ${this.complete}`);
    }
}