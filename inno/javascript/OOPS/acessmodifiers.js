// class test{
//     static fname = "hero";
//     static m2(){
//         console.log("In inside class name = ", test.fname);
        
//     }
// }
// test.m1();
// console.log("In outside class name = ", test.fname);

// class test{
//     static fname = "hero";
// }
// class abc{
//     static m2(){
//         console.log("In another class name = ", test.fname);
        
//     }
// }
// abc.m2();

// class test{
//     static fname = "hero";
// }
// class abc extends test{
//     static m2(){
//         console.log("In Sub-class using parent name = ", abc.fname);
        
//     }
// }
// abc.m2();

// //Instance variable

// // within another class

// class test{
//     fname = "Zero";
// }
// class xyz{
//     display(){
//         let t1 = new test();
//         console.log("Within another class = ",t1.fname);
        
//     }
// }
// let x = new xyz();
// x.display();

// //in subclass

// class test{
//     fname = "Zero";
// }
// class xyz extends test{
//     display(){
//         let t1 = new test();
//         console.log("Within sub class = ",this.fname);
        
//     }
// }
// let x = new xyz();
// x.display();


// Private class member

// within same class

// class test{
//     static #fname = "Hero";
//     static m1(){
//         console.log("within same class ",test.#fname);
        
//     }
// }
// test.m1();

// outside class

// class test{
//     static #fname = "Hero";
// }
// class abc{
//     static m1(){
//         console.log("outside same class ",test.#fname);
        
//     }
// }
// test.m1();


// class test{
//     static #m1(){
//         console.log("Im m1");
        
//     }
//     static m2(){
//         console.log("Calling m1 with m2, within same class");
        
//         test.#m1();
//     }
// }
// test.m2();

// //Instance variable

// class test{
//     #age = 21; //private instance variable
//     m1(){
//         console.log("Within same class = ",this.#age);
        
//     }
// }
// let t = new test();
// t.m1();

// console.log("Outside class = ",t.#age);

// instance private variable using constructor

// class test{
//     constructor(age){
//         this.#name = #name;
//         this.#age = #age;
//     }
//     displayDetails(){
//         console.log(this.#name);
//         console.log(this.#age);
//     }
// }
// let t = new test("Zero",21);
// t.displayDetails();