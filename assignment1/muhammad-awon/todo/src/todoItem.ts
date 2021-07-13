export class TodoItem {
    // use TS features that allow class to be defined concisely
    // TS by default assumes that all methods and properties are public, unless explicitly defined
    constructor(public id: number, public task: string, public complete: boolean=false) {
        // no statements required
    }

    printDetails(): void {
        console.log(`${this.id}\t${this.task}\t${this.complete
        ? "\t(complete)": ""}`);
    }
}