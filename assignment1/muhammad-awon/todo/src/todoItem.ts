export class TodoItem {
    public id: number;
    public task: string;
    public complete: boolean=false;

    // create constructor to initialize the class attributes
    public constructor(myId: number, myTask: string, myStatus: boolean=false) {
        this.id = myId;
        this.task = myTask;
        this.complete = myStatus;
    }

    // create print method to display to-do item to the console
    public printDetails(): void {
        console.log(`${this.id}\t${this.task}\t${this.complete
        ? "\t(complete)": ""}`);
    }
}