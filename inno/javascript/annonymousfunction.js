// // Annonymous function without input and without return type

// let x = function(){
//     console.log("Annonymous: Say Hello");
    
// };

// x()

// let smallest_number = function(){
//     let n1 = 20;
//     let n2 = 15;
//     let n3 = 25;
//     if(n1<n2 && n1<n3){
//         console.log(n1);
        
//     }
//     else if(n2<n1 && n2<n3){
//         console.log(n2);
//     }
//     else{
//         console.log(n3);
//     }
// };

// smallest_number();

// // Annonymous function with input and without return type

// let myName = function(name){
//     console.log("My name is " + name);
    
// };
// myName("Eekshitha");


// let palindrome = function(num){
    
//     let n = num;
//     let reverse = 0;
//     while(n > 0){
//         let digit = n % 10;
//         reverse = reverse * 10 + digit

//         n = parseInt(n/10);
//     }
//     if(reverse == num){
//         console.log(num,"Is Palindrome");
        
//     }
//     else{
//         console.log(num," is not a palindrome");
        
//     }

// };

// palindrome(101);

// // Annonymous function without input and with return type

// let sayHello = function(){
//     return "Hello";
    
// };
// // let newMsg = sayHello();
// // console.log(newMsg);
// console.log(sayHello);


// // Leap year

// let leapYear = function(){
//     let Year = 2004;
//     if((Year % 400 === 0) || (Year % 4 === 0 && Year % 100 !== 0)){
//         return Year;
//     }
//     else{
//         return "Not a leap Year";
//     }
// };

// let result = leapYear();
// console.log(result);


// // Annonymous function with input and with return type

// let displayName = function(fname){
//     return "My Name is " + fname;

// };

// let myName = displayName("Eekshitha");
// console.log(myName);


// Perfect number

let perfectnum = function(n){
    let number = n;
    let sum = 0;
    for(let i = 1; i < n; i++){
        if(n % i == 0){
            sum = sum + i;
        }
    }
    if(sum == n){
        return n + " is a perfect number"
    }
    else{
        return n + " is not a perfect number"
    }
};
let result = perfectnum(6);
console.log(result);
