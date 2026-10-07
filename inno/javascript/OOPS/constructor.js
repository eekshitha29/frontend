// class Test{
//     constructor(myName){
//         console.log("My name is ", myName);
        
//     }
// }
// let t = new Test("Constructor");

// class Test{
//     constructor(num){
//         return num ;
        
//     }
// }
// let t = new Test("Constructor");
// console.log(t);


// class Student{
//     constructor(name, age, course){
//         this.myname = name;
//         this.myage = age;
//         this.mycourse = course;
//     }
//     displayDetails(){
//         console.log("My name is ",this.myname);
//         console.log("My age is ",this.myage);
//         console.log("My course is ",this.mycourse);
        
//     }
// }

// let student1 = new Student("Hero", 21, "Python");
// // student1.set_data("Hero", 21, "Python");
// student1.displayDetails();

// class Employee{
//     constructor(name,designation,salary){
//         this.myname = name;
//         this.mydesignation = designation;
//         this.mysalary = salary;
//     }
//     displayDetails(){
//         console.log("My name is ",this.myname);
//         console.log("My designation is ",this.mydesignation);
//         console.log("My salary is ",this.mysalary);
        
//     }
// }
// let Emp1 = new Employee("Hero","HR","5000000");
// let Emp2 = new Employee("Zero","Manager","800000");
// Emp1.displayDetails();
// Emp2.displayDetails();

// Example 1

// class animal{
//         static kingdom = "Animalia";
//         static category = "Living";
// }
// class birds{
//     constructor(name,age,origin,lifespan,color,sound,){
//         this.name = name;
//         this.age = age;
//         this.origin = origin;
//         this.lifespan = lifespan;
//         this.color = color;
//         this.sound = sound;
//     }
//     displayBirdDetails(){
//         console.log("Name: ",this.name);
//         console.log("Age: ",this.age);
//         console.log("Origin: ",this.origin);
//         console.log("Lifespan: ",this.lifespan);
//         console.log("Color: ",this.color);
//         console.log("Sound: ",this.sound);
//     }
// }

// console.log(animal.kingdom);
// console.log(animal.category);

// let b1 = new birds("Parrot",5,"India",20,"Green","Squawk...squawk...");
// b1.displayBirdDetails();
// let b2 = new birds("Eagle",8,"USA",25,"Brown","Screech...Screech");
// b2.displayBirdDetails();

// Example 2

// class car{
//     static vehicleType = "Car";
//     static wheels = 4;
//     constructor(brand,model,color,price,year,fueltype){
//         this.brand = brand;
//         this.model = model;
//         this.color = color;
//         this.price = price; 
//         this.year = year;
//         this.fueltype = fueltype;
//     }
//     displayDetails(){
//         console.log("Brand: ",this.brand);
//         console.log("Model: ",this.model);
//         console.log("Color: ",this.color);
//         console.log("Price: ",this.price);
//         console.log("Year: ",this.year);
//         console.log("Fuel Type: ",this.fueltype);
//     }
// }
// console.log(car.vehicleType);
// console.log(car.wheels);

// let c1 = new car("Toyoto","Camry","Black",3000000,2024,"Petrol");
// c1.displayDetails();
// let c2  = new car("BMW","X5","White",7500000,2025,"Diesel")
// c2.displayDetails();

// Example 3

// class student{
//     static college = "Rishi";
//     static university = "JNTUH"
//     constructor(name,age,rollno,course,marks,city){
//         this.name = name;
//         this.age = age;
//         this.rollno = rollno;
//         this.course = course;
//         this.marks = marks;
//         this.city = city;
//     }
//     displayDetails(){
//         console.log("Name: ",this.name);
//         console.log("Age: ", this.age);
//         console.log("Roll no: ",this.rollno);
//         console.log("Course: ",this.course);
//         console.log("Marks: ",this.marks);
//         console.log("City: ",this.city);
//     }
// }
// console.log(student.college);
// console.log(student.university);

// let s1 = new student("Rahul",21,101,"FSD",85,"Hyderabad");
// s1.displayDetails();
// let s2 = new student("Priya",22,102,"Java",96,"Chennai");
// s2.displayDetails();