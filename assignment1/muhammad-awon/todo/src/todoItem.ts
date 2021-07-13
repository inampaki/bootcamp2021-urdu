export class TodoItem {
    // use TS features that allow class to be defined concisely
    public constructor(public id: number, public task: string, public complete: boolean=false) {
        // no statements required
    }

    // TS by default assumes that all methods and properties are public, unless explicitly defined
    printDetails(): void {
        console.log(`${this.id}\t${this.task}\t${this.complete
        ? "\t(complete)": ""}`);
    }
}