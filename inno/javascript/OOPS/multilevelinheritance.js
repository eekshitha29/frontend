// class A{
//     m1(){
//         console.log("m1 from A");
        
//     }
// }
// class B extends A{
//     m2(){
//         console.log("m2 from B");
        
//     }
// }
// class C extends B{
//     m3(){
//         console.log("m3 from c");
        
//     }
// }
// let c = new C();
// c.m3() //its own method(C's method)
// c.m2() //Parent method(B's method)
// c.m1() //Grandparent method(A's method)




// class keypadMobile{
//     call(){
//         console.log("You can Call");
        
//     }
//     text(){
//         console.log("You can text");
//     }
// }

// class Mobile extends keypadMobile{
//     camera(){
//         console.log("You can Click pictures");
        
//     }
//     voice(){
//         console.log("You can send voice mails");
//     }
// }
// class smartMobile extends Mobile{
//     internet(){
//         console.log("You have internet connection");
        
//     }
// }

// let smart = new smartMobile()
// smart.internet();
// smart.camera();



// class bankAcct{
//     constructor(Acctno,AcctholdName){
//         this.Acctno = Acctno;
//         this.AcctholdName = AcctholdName;
//     }
//     displayBankDet(){
//         console.log("Account number: ", this.Acctno);
//         console.log("Account Holder Name: ", this.AcctholdName);
//     }
// }

// // let bank = new bankAcct(1001,"Hero");
// // bank.displayBankDet();



// class bankBlc extends bankAcct{
//     constructor(Acctno,AcctholdName,AcctBal){
//         super(Acctno,AcctholdName,AcctBal)
//         this.AcctBal = AcctBal;
//     }
//     displayBankDet(){
//         super.displayBankDet()
//         console.log("Account Balance: ", this.AcctBal);
//     }
// }

// // let bankBalc = new bankBlc(1001,"Hero",864526);
// // bankBalc.displayBankDet();

// class banktype extends bankBlc{
//     constructor(Acctno,AcctholdName,AcctBal,Banktype){
//         super(Acctno,AcctholdName,AcctBal,Banktype)
//         this.BankType = Banktype;
//     }
//     displaybank(){
//         super.displayBankDet()
//         console.log("Account Type: ", this.BankType);
        
//     }
// }

// let accType = new banktype(1001,"Zero",48565562,"Savings");
// accType.displaybank();

class Animal {
    constructor(name) {
        this.name = name;
    }

    eat() {
        console.log(this.name, "can eat");
    }
}

class Mammal extends Animal {
    constructor(name, legs) {
        super(name);
        this.legs = legs;
    }

    walk() {
        console.log(this.name, "can walk");
    }
}

// Example 1

// class Dog extends Mammal {
//     constructor(name, legs, breed) {
//         super(name, legs);
//         this.breed = breed;
//     }

//     bark() {
//         console.log(this.name, "can bark");
//     }
// }

// let d = new Dog("Tommy", 4, "German Shepherd");

// d.eat();
// d.walk();
// d.bark();

// console.log(d.name);
// console.log(d.legs);
// console.log(d.breed);

// Example 2

// class Person {
//     constructor(name) {
//         this.name = name;
//     }

//     displayName() {
//         console.log("Name:", this.name);
//     }
// }

// class Employee extends Person {
//     constructor(name, salary) {
//         super(name);
//         this.salary = salary;
//     }

//     displaySalary() {
//         console.log("Salary:", this.salary);
//     }
// }

// class Manager extends Employee {
//     constructor(name, salary, department) {
//         super(name, salary);
//         this.department = department;
//     }

//     displayDepartment() {
//         console.log("Department:", this.department);
//     }
// }

// let m = new Manager("Hero", 60000, "IT");

// m.displayName();
// m.displaySalary();
// m.displayDepartment();

// Example 3

// class Vehicle {
//     constructor(brand) {
//         this.brand = brand;
//     }

//     start() {
//         console.log(this.brand, "vehicle starts");
//     }
// }

// class Car extends Vehicle {
//     constructor(brand, model) {
//         super(brand);
//         this.model = model;
//     }

//     drive() {
//         console.log(this.model, "is driving");
//     }
// }

// class SportsCar extends Car {
//     constructor(brand, model, speed) {
//         super(brand, model);
//         this.speed = speed;
//     }

//     race() {
//         console.log(this.model, "is racing at", this.speed, "km/h");
//     }
// }

// let s = new SportsCar("Ferrari", "488", 340);

// s.start();
// s.drive();
// s.race();