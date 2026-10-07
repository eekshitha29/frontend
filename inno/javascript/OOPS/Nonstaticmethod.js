// Static method

// class Test{
//     static m1(){
//         console.log("I'm static method - m1 of test");
        
//     }
// }
// Test.m1();



// Non-static

// class Test{
//     m1(){
//         console.log("I'm instance method - m1 of test");
        
//     }
// }
// // new Test().m1();

// let t = new Test();  //t => object reference variable
// t.m1();


// without input without return
// class Developer{
//     displayDesign(){
//         console.log("I'm fullstack developer");
        
//     }
// }

// let d = new Developer();
// d.displayDesign();

// with input without return

// class Student{
//     marks(n1,n2,n3){
//         console.log("English: ", n1);
//         console.log("Maths: ", n2);
//         console.log("Science: ", n3);
//     }
// }
// let m = new Student();
// m.marks("95","100","92");

// without input with return

// class Employee{
//     displayDepartment(){
//         return "Department = HR ";
//     }
// }


// let emp1 = new Employee();
// console.log(emp1.displayDepartment());

// with input with return

// class Salary{
//     displaySalary(basicSalary, bonus, pf){
        
//         let totalSal = (basicSalary + bonus) - pf;
//         return totalSal;
//     }
// }
// let total = new Salary();
// console.log(total.displaySalary(50000,2000,500));


// class Product{
//     displayDetails(){  //display details of product
        
//         // without input without return

//         console.log("Product Name: Iphone 18 Pro");
//         console.log("Color: Burgendy");
//         console.log("Storage: 256gb");
//         console.log("Price: 450000");
        
//     }

//     addToCart(items){ ///display quantity of product
        
//         // with input without return

//         console.log("Products in Cart : ",items);
//     }

//     displayPrice(){ //display price of product
        
//         // without input with return

//         return "Price: 450000";
//     }

//     displayTotal(price,quantity){ ///display quantity of product
       
//         // with input with return
//         let total = price * quantity;
//         return total;
        
//     }
// }

// let mobile = new Product();
// mobile.displayDetails();
// mobile.addToCart(5);
// console.log("Price of Product ",mobile.displayPrice());
// console.log("Total amount of products added in cart: ",mobile.displayTotal(450000,4));



