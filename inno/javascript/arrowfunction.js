// // Arrow function without input and without return type

// let sayHello = () =>{
//     console.log("Arrow Function: Say Hello");
    
// };

// sayHello();

// // Display even numbers in range 1 to 10

// let Even = () =>{
    // for(i = 1; i <= 10; i++){
    //     if(i % 2 == 0){
    //         console.log(i);
            
    //     }
    // }
// };

// Even();


// // Arrow function with input and without return type

// let displayName = (fname) => {
//     console.log("My name is ", fname);
    
// };

// displayName("Eekshitha");

// // Display odd numbers within range 1 to 10

// let odd = (a,b) => {
//     for(i = a; i <= b; i++){
//         if(i % 2 != 0){
//             console.log(i);
            
//         }
//     }
// };
// odd(20,30);

// // Arrow function without input and with return type

// Normal way

// let displayName = () =>{
//     return "Eekshitha";
// }
// console.log(displayName());

// // or Concised way

// let displayName = () => "Eekshitha";
// console.log(displayName());


// // Arrow function with input and with return type

// let displayName = (fname) =>{
//     return "My name is " + fname;
// }
// console.log(displayName("Eekshitha"));

// // Concised: when we use single parameter and single return(expression)

// let displayName = name => name ;
// console.log(displayName("Eekshitha"));

// let even = (n) => {
//     if(n % 2 == 0){
//         return n + " is Even";
            
//     }
//     else{
//         return n + " is Odd";
//     }
// }
// console.log(even(10));
