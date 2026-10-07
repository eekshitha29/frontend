// Named Function without Input and without return

// // Declaration

// function sayHello(){
//     console.log("Hello");
    
// }

// // Calling

// sayHello();


// function addThree(){
//     let a = 10;
//     let b = 20;
//     let c = 30;
//     let sum = a + b + c;
//     console.log("Sum of Three numbers = ", sum);
    
// }

// addThree()

// function displayName(){
//     let name = "Eekshitha"
//     console.log("My name is ",name);
    
// }
// displayName();

// Named Function with Input and without return

// Declaration

// function displayName(fName){
//     console.log("My Name is ",fName);
    
// }

// // Calling

// displayName("Eekshitha");



// function EvenOrOdd(n){
//     if(n % 2 == 0){
//         console.log("Even");
        
//     }
//     else{
//         console.log("Odd");
        
//     }
// }

// EvenOrOdd(11);

// function avgOfThree(a,b,c){
    
//     let average = (a + b + c) / 2;
//     console.log("Average of Three numbers = ", average);
    
// }

// avgOfThree(10,20,30)

// // Named Function without Input and with return

// // Declaration

// function displayName(){
//     Myname = "Eekshitha";
//     return Myname;
    
// }

// // Calling

// let fname = displayName();
// console.log(fname);

// function displayFactorial(){
//     let n = 5
//     fact = 1
//     for(i = 5; i >= 1; i--){
//         fact = fact * i ;
    
//     }
// return "Factorial of " + n + " = " + fact;
// }
// let factorial = displayFactorial();
// console.log(factorial);


// // Named Function with Input and with return

// // Declaration

// function displayName(fname){
//     return fname;
    
// }

// // Calling

// let myname = displayName("Eekshitha");
// console.log(myname);

function checkEven(n){
    if(n % 2 == 0){
        return n + " Is Even";
    }
    else{
        return n + " Is Odd";
    }
}

// let ans = checkEven(10);
// console.log(ans);

console.log(checkEven(5));
