console.clear()
//In a class if the parameters to the constructor are not given then the obejct would not be created if the default value of the parameter is not given
//When calling a class we give parameters to the constructor by giving parameters to the class  
//A constructor is also a setter function



class Student{


 id : number;
 student_name : string;
 email:string;

 constructor(id:number,student_name:string,email:string){      
    this.id =id;
    this.student_name=student_name;
    this.email=email;
}
//We don't use the function keyword when writng a function
print_details():void {                 
    console.log("The name of the student is "+this.student_name+", ID is "+this.id+" and his email id is " +this.email)
}
}
let object_1 = new Student(1,"Muhammad Suhaib Salman","suhaibsalman200110@gmail.com");     //Creating a new object from the class

object_1.print_details();



