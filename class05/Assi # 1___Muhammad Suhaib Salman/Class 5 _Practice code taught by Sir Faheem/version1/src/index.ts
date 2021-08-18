console.clear()
console.log("Hello World")

/*let message : string = "This is Muhammad Suhaib Salman";      //var can also be used instead of let
let numeric : number = 23;
var floating_value :number = 8.99;             //Thus, the number datatype is used for both integer and float value
var  condition: boolean =true;
var conditon2: any = 123;        //Any datatype can be used for any dataype but it is not preferable

//Morever, its not necessary in typescript to tell a datatype but its better to tell the datatype
let my_name = "Muhammad Suhaib Salman";

//Functions

let id : number;
let student_name : string;
let email:string;

function set_student_values(id:number,student_name:string,email:string):void{
    this.id =id;
    this.student_name=student_name;
    this.email=email;
}
//The this keyword is used to call the global variable in a function

function print_details(){
    console.log("The name of the student is " + this.student_name + ", ID is " + this.id + " and his/her email address is "+ this.email);
}

set_student_values(1,"Muhammad Suhaib Salman","suhaibslamn200110@gmail.com");
print_details();
*/


class Student{

//Functions

 id : number;
 student_name : string;
 email:string;

 set_student_values(id:number,student_name:string,email:string):void{      //A setter is a function that is used to set a value
    this.id =id;
    this.student_name=student_name;
    this.email=email;
}
//We don't use the function keyword when writng a function
print_details():void {                    //In a funciton void is by default
    console.log("The name of the student is "+this.student_name+", ID is "+this.id+" and his email id is " +this.email)
}
}
let object_1 = new Student();     //Creating a new object from the class
object_1.set_student_values(1,"Muhammad Suhaib Salman","suhaibsalman200110@gmail.com")
object_1.print_details();



