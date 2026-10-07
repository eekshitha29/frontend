// class Parent{
//     brave(){
//         console.log("I am Brave");
//     }
//     talent(){
//         console.log("I am talent");
//     }
// }
// class Child extends Parent{
//     artist(){
//         console.log("I am Artist");
//     }
// }

// let c = new Child()
// c.artist();
// c.brave();

// // static variable

// class Parent{
//     static ins_name = "Innomatics";
// }
// class child extends Parent{

// }
// console.log("Institute Name using parent ",Parent.ins_name);
// console.log("Institute Name using parent ",child.ins_name);

// class product{
//     displaydetails(){
//         console.log("Product name: ", this.name);
//         console.log("Product price: ", this.price);
//     }
// }
// let p = new product();
// p.name = "Product1";
// p.price = 95000;

// // p.displaydetails();

// class laptop extends product{

// }
// let l = new laptop();
// l.displaydetails();

// class product{
//     displaydetails(){
//         console.log("Product name: ", this.name);
//         console.log("Product price: ", this.price);
//     }
// }
// // let p = new product();
// // p.name = "Product1";
// // p.price = 95000;

// // p.displaydetails();

// class laptop extends product{
//     show_lap_det(){
//         console.log("RAM = ",this.ram);
        
//     }
// }
// let l = new laptop();
// l.ram = "12GB";
// l.name = "Product1";
// l.price = 95000;
// l.displaydetails();
// l.show_lap_det();

// // using constructor
// class product{
//     constructor(name,price){
//         this.name = name;
//         this.price = price;
//     }
//     displaydetails(){
//         console.log("Product name: ", this.name);
//         console.log("Product price: ", this.price);
//     }
// }
// class laptop extends product{}
// let lap = new product("Product1", 95000);
// lap.displaydetails();

// class product{
//     constructor(name,price){
//         this.name = name;
//         this.price = price;
//     }
//     displaydetails(){
//         console.log("Product name: ", this.name);
//         console.log("Product price: ", this.price);
//     }
// }
// class laptop extends product{
//     constructor(name,price,ram){
//         super(name,price)
//         this.ram = ram;
        
//     }
//     displayLapdetails(){
//         super.displaydetails()
//         console.log("Product name: ", this.ram);
//     }
// }

// let lap = new  laptop("Product1", 95000,"256gb");
// lap.displayLapdetails();

// // ----------------------------


// // within class outside method

// class Test{
//     fname = "Hero"; //Instance variable
// }
// class Test2 extends Test{}
// let t2 = new Test2();
// console.log(t2.fname);

// // ----------------------------


// // using object

// class test{}
// let t = new test();
// t.fname = "Hero";
// class test2 extends test{}
// let t2 = new test2();
// console.log(t2.fanme);


// // ----------------------------


// // using method

// class test{
//     m1(name){
//         this.fname = "hero";
//     }
// }
// let t = new test();
// t.m1()

// class test2 extends test{}

// let t2 = new test2();
// t2.m1()
// console.log(t2.fname);


// // ----------------------------


// // using constructor

// class test{
//     constructor(){
//         this.fname = "Hero";
//     }
// }
// class test2 extends test{
//     // constructor(){

//     // }
// }
// let t2 = new test2()
// console.log(t2.fname);


// class vehicle{
//     constructor(){
//         console.log("Vehicle constructor is called....");
        
//     }
//     ride(){
//         console.log("You can ride me");
        
//     }
// }
// class car extends vehicle{
//     doors(){
//         console.log("I have 4 doors");
        
//     }
// }

// let c = new car();
// c.doors();
// c.ride();


// class institute{
//     constructor(name,rollno){
//         this.name = name;
//         this.rollno = rollno;
        
//     }
//     displayDetails(){
//         console.log("Name: ",this.name);
//         console.log("Roll no: ",this.rollno);
        
//     }

// }

// class student extends institute{
//     constructor(name,rollno,course){
//         super(name,rollno);
//         this.course = course;
//     }
//     displayStudentDetails(){
//         super.displayDetails();
//         console.log("Course: ",this.course);
//     }
// }

// let s = new student("Zero",526,"FSD");
// s.displayStudentDetails();


// class person{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     displayDetails(){
//         console.log("My name is ",this.name);
//         console.log("I'm ",this.age,"year old");
//     }
// }
// class student extends person{
//     constructor(name,age,rollno){
//         super(name,age);
//         this.rollno = rollno;
//     }
//     displayStudentDetails(){
//         super.displayDetails();
//         console.log("Roll no: ",this.rollno);
        
//     }
// }

// let s = new student("Hero",22,502);
// s.displayStudentDetails();

// class Animal {
//     constructor(name) {
//         this.name = name;
//     }

//     eat() {
//         console.log(this.name + " can eat");
//     }
// }

// class Dog extends Animal {
//     constructor(name, breed) {
//         super(name);
//         this.breed = breed;
//     }

//     displayDetails() {
//         super.eat();
//         console.log("Breed:", this.breed);
//     }
// }

// let d = new Dog("Tommy", "German Shepherd");

// d.displayDetails();

// class Animal {
//     eat() {
//         console.log("I can eat");
//     }

//     sleep() {
//         console.log("I can sleep");
//     }
// }

// class Dog extends Animal {
//     bark() {
//         console.log("Dog is barking");
//     }
// }

// let d = new Dog();

// d.eat();
// d.sleep();
// d.bark();