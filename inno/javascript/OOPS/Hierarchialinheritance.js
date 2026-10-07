// class Parent{
//     m1(){
//         console.log("M1 from parent");
        
//     }
// }
// class Child1 extends Parent{
//     m2(){
//         console.log("M2 from Child1");
        
//     }
// }
// class Child2 extends Parent{
//     m3(){
//         console.log("M2 from Child1");
        
//     }
// }

// let child1 = new Child1()
// child1.m2(); //own method -- yes
// child1.m1(); // parent method -- yes
// // child1.m3(); // sibling method -- no

// let child2 = new Child2()
// // child2.m2(); // sibling method -- no
// child2.m1(); // parent method -- yes
// child2.m3(); // own method -- yes



// // 5 examples ----------------- 2 normal 3 with constructor


// class Animal{
//     eat(){
//         console.log("I can eat");
        
//     }
//     sleep(){
//         console.log("I can sleep");
        
//     }
    
// }
// class dog extends Animal{
//     bark(){
//         console.log("bark bark bark............");
        
//     }
// }

// class cat extends Animal{
//     meow(){
//         console.log("meow meow meow............");
        
//     }
// }

// let aniDog = new dog();
// aniDog.eat();
// aniDog.sleep();
// aniDog.bark();

// let aniCat = new cat();
// aniCat.eat();
// aniCat.sleep();
// aniCat.meow();


// class vehicle{
//     start(){
//         console.log("Start.......");
        
//     }
//     stop(){
//         console.log("Stop.......");
        
//     }
// }
// class car extends vehicle{
//     drive(){
//         console.log("I have 4 wheels.You can drive me. ");
        
//     }
// }
// class bike extends vehicle{
//     ride(){
//         console.log("I have 2 wheels.You can ride me. ");
        
//     }
// }

// let carVeh = new car();
// carVeh.start();
// carVeh.stop();
// carVeh.drive();

// let bikeVeh = new bike();
// bikeVeh.start();
// bikeVeh.stop();
// bikeVeh.ride();


// class person{
//     constructor (fname,age){
//         this.fname = fname;
//         this.age = age;
//     }
//     displayDetails(){
//         console.log(this.fname);
//         console.log(this.age);  
//     }
// }

// class student extends person{
//     constructor (fname,age,rollNo){
//         super(fname,age)
//         this.rollNo = rollNo;
//     }
//     displayStudentDetails(){
//         super.displayDetails();
//         console.log(this.rollNo);  
//     }
// }
// class teacher extends person{
//     constructor (fname,age,subject){
//         super(fname,age)
//         this.subject = subject;
//     }
//     displayTeacherDetails(){
//         super.displayDetails();
//         console.log(this.subject);  
//     }
// }

// let s1 = new student("hero" ,22,85563);
// s1.displayStudentDetails();

// let t1 = new teacher("zero" ,38,"fsd");
// t1.displayTeacherDetails();


// class shape{
//     constructor(color){
//         this.color = "red";
//     }
//     displaycolor(){
//         console.log("I am in color ",this.color);
//     }
// }
// class circle extends shape{
//     constructor(color,radius){
//         super(color);
//         this.radius = "5cm"; 
//     }
//     displayRadius(){
//         super.displaycolor();
//         console.log("I am Circle. My radius is ",this.radius);
//     }
// }
// class rectangle extends shape{
//     constructor(color,length,width){
//         super(color);
//         this.length = "8cm";
//         this.width = "4cm";  
//     }
//     displaylength(){
//         super.displaycolor();
//         console.log("My length is ",this.length);
//         console.log("My width is ",this.width);
//     }
// }
// let c = new circle();
// c.displayRadius();

// let r = new rectangle();
// r.displaylength();


// class employee{
//     constructor(name,sal){
//         this.name = name;
//         this.sal = sal;
//     }
//     displaydetails(){
//         console.log(this.name);
        
//     }
// }
// class manager extends employee{
//     constructor(name,sal,teamsize){
//         super(name,sal);
//         this.teamsize = teamsize;
//     }
//     displayManagerDetails(){
//         super.displaydetails();
//         console.log(this.teamsize);
        
//     }
// }
// class developer extends employee{
//     constructor(name,sal,language){
//         super(name,sal);
//         this.language = language;
//     }
//     displayDeveloperrDetails(){
//         super.displaydetails();
//         console.log(this.language);
        
//     }
// }

// let m = new manager("Hero",5222200,15);
// m.displayManagerDetails();

// let d = new developer("Zero",566540,"Fsd");
// d.displayDeveloperrDetails();
