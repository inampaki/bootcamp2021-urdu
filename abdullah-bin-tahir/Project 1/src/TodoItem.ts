// defining the data model for todo list application
// data model => describe application's data + operations performed by application

// classes are templates that describe a data type
// here the data type is one single todo item

export class TodoItem {
  public constructor(
    public id: number,
    public task: string,
    public status: boolean = false
  ) {}

  printDetails(): void {
    console.log(
      `${this.id}\t ${this.task} ${this.status ? "\t(COMPLETED)" : "\t"}`
    );
  }
}
