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
var Student = (function () {
    function Student(f_id, f_student_name, f_email, active) {
        if (active === void 0) { active = true; }
        this.id = f_id;
        this.student_name = f_student_name;
        this.email = f_email;
        this.active = active;
    }
    Student.prototype.printStudent = function () {
        console.log("The ID of student is " + this.id);
        console.log("The student name is this " + this.student_name);
        console.log("student email " + this.email);
        console.log("student active " + this.active);
    };
    return Student;
})();
var student01 = new Student(1, "Faheem", "faheem@yahoo.com");
console.log(student01);
student01.printStudent();
