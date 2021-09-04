// var message:string = "Hello World from new file" 
// var numberic: number = 10;
// var floting_value: number = 10.3;
// var condition:boolean = true;
// var condition02: any = true; // not used in TypeScript

// console.log(message)
// console.log(numberic)
// console.log(floting_value)
// console.log(condition)
// console.log(condition02)

// let id: number;
// let student_name: string;
// let email: string;

// // function declaration
// // function calling
// // function paramter
// // function return type
// function set_student_values(f_id:number,f_student_name:string, f_email:string) : void{
//     this.id = f_id;
//     this.student_name = f_student_name;
//     this.email = f_email;    
// } 

// function printStudent() : void {
//     console.log("The ID of student is " + this.id );
//     console.log("The student name is this "+ this.student_name );
//     console.log("student email " + this.email)
// }

// set_student_values(1,"Faheem","faheem@yahoo.com");
// printStudent();


class Student {
    id: number;
    student_name: string;
    email: string;
    active :  boolean;

    constructor(f_id: number, f_student_name: string, f_email: string, active:boolean = true) {
        this.id = f_id;
        this.student_name = f_student_name;
        this.email = f_email;
        this.active = active;
    }
    printStudent(): void {
        console.log("The ID of student is " + this.id);
        console.log("The student name is this " + this.student_name);
        console.log("student email " + this.email)
        console.log("student active " + this.active)
    }
}

let student01 = new Student(1,"Faheem","faheem@yahoo.com");
console.log(student01);
student01.printStudent();