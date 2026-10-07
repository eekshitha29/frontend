// class Test{
//     m1(){
//         console.log("I'm m1 from Test class");
        
//     }
// }
// class Abc extends Test{
//     //overriding
//     m1(){
//         console.log("I'm m1 from Abc class");
        
//     }
// }
// let a = new Abc();
// console.log("with child");

// a.m1();

// let t = new Test();
// console.log("with parent");

// t.m1();

// // Runtime polymorphism with multilevel inheritance
// class Parent{
//     behave(){
//         console.log("Happy");
        
//     }
// }
// class child extends Parent{
//     behave(){
//         console.log("Angry");
        
//     }
// }
// class Grandchild extends child{
//     behave(){
//         console.log("Sweet");
        
//     }
// }

// let p = new Parent();
// p.behave();

// let c = new child();
// c.behave();

// let g = new Grandchild();
// g.behave();

// class Mobile{
//     Camera(){
//         console.log("Camera: 5px");
        
//     }
//     Calling(){
//         console.log("Ringing....");
//     }
// }
// class smartMobile extends Mobile{
//     Camera(){
//         console.log("Camera: 35px");
//     }
//     Texting(){
//         console.log("Typing....");
//     }
// }
// class latestSmartMobile extends smartMobile{
//     Camera(){
//         console.log("Camera: 55px");   
//     }
//     voiceAssistant(){
//         console.log("You can speak to me.....");
//     }
// }
// let m = new Mobile();
// m.Camera();
// m.Calling();
// let sm = new smartMobile();
// sm.Camera();

// let lsm = new latestSmartMobile();
// lsm.Camera();
// lsm.Calling();
// lsm.Texting();


// class Animal{
//     sound(){
//         console.log("Animal sounds......");
        
//     }
// }
// class Dog extends Animal{
//     sound(){
//         console.log("Bow....Bow....");
        
//     }
// }
// class cat extends Dog{
//     sound(){
//         console.log("Meow....Meow....");
        
//     }
// }
// let ani = new Animal();
// ani.sound();

// let bow = new Dog();
// bow.sound();

// let meow = new cat();
// meow.sound();

// class test{
//     add(n1,n2){
//         console.log("2 parameters");
        
//     }

//     add(n1,n2,n3){
//         console.log(n1+n2+n3);
        
//     }
// }
// let t = new test();
// t.add(10,20,60); //Still 2nd method will be invoked

// // Example 1


// class vehicle{
//     start(){
//         console.log("Vehicle is starting");
//     }
// }
// class car extends vehicle{
//     start(){
//         console.log("Car starts with a key");
//     }
// }
// let c = new car();
// c.start();

// // Example 2


// class Employee {
//     work() {
//         console.log("Employee is working");
//     }
// }

// class Manager extends Employee {
//     work() {
//         console.log("Manager is managing the team");
//     }
// }

// let m = new Manager();
// m.work();

// // Example 3


// class BankAccount {
//     withdraw() {
//         console.log("Withdrawal from bank account");
//     }
// }

// class SavingsAccount extends BankAccount {
//     withdraw() {
//         console.log("Withdrawal from savings account");
//     }
// }

// let s = new SavingsAccount();
// s.withdraw();