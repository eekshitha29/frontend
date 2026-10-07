// // Basic Syntax for "if" block:

// // if(condition){
// //     code or logic
// // }

// // Check given no is equal to 10

// // let n = 10
// // if (n==10){
// //     console.log("Given nember ",n, "is equal to 10")
// // }

// function equalTo10(){
//     let number = parseInt(document.getElementById("10").value);
//     let result;
//     if (number == 10){
//         result = "Yes";
//     }
//     document.getElementById("res_10").value = result;
// }

// // Check two numbers are equal

// // let a = 20
// // let b = 20
// // if (a==b){
// //     console.log("Two numbers are equal")
// // }

// function numEqual(){
//     let number1 = parseInt(document.getElementById("num1").value);
//     let number2 = parseInt(document.getElementById("num2").value);
//     let result;

//     if (number1 == number2){
//         result = "Equal";
//     }

//     else{
//         result = "Not Equal";
//     }

//     document.getElementById("res_equal").value = result;
// }

// // Basic Syntax for "if-else" block:

// // if(condition){
// //     code or logic
// // }
// // else{
// //     code or logic
// // }

// // Example:
// // if(true){
// //     console.log("Condition: True---If Block Executed")
// // }
// // else{
// //     console.log("Condition: False---else Block Executed")
// // }

// // Check and display the smallest number from given two values

// // n1 = 20;
// // n2 = 15;
// // if (n1>n2){
// //     console.log("n1 = ",n1, " is greater than n2 = ",n2);
// // }
// // else{
// //     console.log("n2 = ",n2, " is smaller than n1 = ",n1);
// // }

// function smallNum(){
//     let number1 = parseInt(document.getElementById("no1").value);
//     let number2 = parseInt(document.getElementById("no2").value);
//     let result;

//     if (number1 > number2){
//         result = number2;
//     }

//     else{
//         result = number1;
//     }

//     document.getElementById("s_num").value = result;
// }


// // Give the discount of 20% if the bill is above 5k else no discount and display the bill

// // bill = 5020;
// // discount = bill - (20/100);
// // if (bill > 5000){
// //     console.log(discount);
// // }
// // else{
// //     console.log(bill);
// // }


// function bill(){
//     let Bill = parseInt(document.getElementById("bill").value);
//     let discount = Bill * (20/100);
//     let t_dis = parseInt(discount);
//     let no_dis = "No Discount"
//     let total;

//     if (Bill >= 5000){
//         total = Bill - discount;
//         document.getElementById("discount").value = t_dis;
//     }

//     else{
//         total = Bill;
//         document.getElementById("discount").value = no_dis;
//     }

    
//     document.getElementById("t_bill").value = total;
// }
// // Check if given number is divisible by 5

// // n =780;
// // if (n % 5 ==0){
// //     console.log("The given number" , n, "is divisible by 5");
// // }
// // else{
// //     console.log("The given number" , n, "is not divisible by 5");
// // }


// function Divisibleby5(){
//     let n = parseInt(document.getElementById("divBy5").value);
//     let result;
//     if (n % 5 ==0){
//         result =  "is divisible by 5";
//     }
//     else{
//         result =  "is not divisible by 5";
//     }

//     document.getElementById("res_divBy5").value = result;

// }
// // Check if given number is Even or Odd

// // n =780;
// // if (n % 2 ==0){
// //     console.log("The given number" , n, "is even");
// // }
// // else{
// //     console.log("The given number" , n, "is odd");
// // }

// function EvenOrOdd(){
//     let n = parseInt(document.getElementById("EvenOrOdd_n").value);
//     let result;
//     if (n % 2 ==0){
//         result =  "is Even";
//     }
//     else{
//         result =  "is Odd";
//     }

//     document.getElementById("EvenOrOdd_res").value = result;

// }

// // Check given value is vowel (or) Not

// // let ch = "X";
// // if (ch=="A" || ch=="E" || ch=="I" || ch=="O" ||ch=="U" || ){
// //     console.log("It is Vowel");
// // }
// // else{
// //     console.log("Not an Vowel");
// // }

// function vowel(){
//     let ch = document.getElementById("char").value;
//     if (ch=="A" || ch=="E" || ch=="I" || ch=="O" ||ch=="U" ){
//         result = "Vowel";
//     }
//     else{
//         result = "Not a Vowel";
//     }
//     document.getElementById("vc").value = result;
// }
// // // Check given number is in between 1 to 10 or not

// // let n = 15;
// // if (n>=1 && n<=10){
// //     console.log("Given number is in between 1 to 10");
// // }
// // else{
// //     console.log("Given number is not in between 1 to 10");
// // }


// function inBtw(){
//     let n = parseInt(document.getElementById("btwnum").value);
//     if (n>=1 && n<=10){
//         result = "is in between 1 to 10";
//     }
//     else{
//         result = "is not in between 1 to 10";
//     }
//     document.getElementById("btwres").value = result;
// }
// // // Check given character is uppercase alphabet or not

// // let ch = "X";
// // if (ch >= "A" && ch <= "Z"){
// //     console.log("Is Uppercase");
// // }
// // else{
// //     console.log("Is lowercase");
// // }


// function isUpper(){
//     let ch = document.getElementById("u").value;
//     if (ch >= "A" && ch <= "Z"){
//         result = "Is Upperrcase";
//     }
//     else{
//         result = "Is lowercase";
//     }
//     document.getElementById("ures").value = result;
// }
// // // Check given character is lowercase alphabet or not

// // let ch = "d";
// // if (ch >= "a" && ch <= "z"){
// //     console.log("Is Lower case");
// // }
// // else{
// //     console.log("Is Upper case");
// // }

// function isLower(){
//     let ch = document.getElementById("l").value;
//     if (ch >= "A" && ch <= "Z"){
//         result = "Is Upperrcase";
//     }
//     else{
//         result = "Is lowercase";
//     }
//     document.getElementById("lres").value = result;
// }

// // // Check given character is Alphabet or not

// // let ch = "8";
// // if ((ch >= "A" && ch <= "Z") || (ch >= "a" && ch <= "z")){
// //     console.log("Is Alphabet");
// // }
// // else{
// //     console.log("Is not a Alphabet");
// // }


// function isUpperOrLower(){
//     let ch = document.getElementById("uorl").value;
//     if ((ch >= "A" && ch <= "Z") || (ch >= "a" && ch <= "z")){
//         result = "Is Alphabet";
//     }
//     else{
//         result = "Is not an Alphabet";
//     }
//     document.getElementById("uorlres").value = result;
// }

// // // Check given value is digit or not


// // let digit = -9;
// // if (digit >= -9 && digit <= +9){
// //     console.log("Is a Digit");
// // }
// // else{
// //     console.log("Is not a Digit");
// // }

// function isDigit(){
//     let digit = document.getElementById("d").value;
//     if (digit >= -9 && digit <= +9){
//         result = "Is a Digit";
//     }
//     else{
//         result = "Is not a Digit";
//     }
//      document.getElementById("dres").value = result;

// }

// // // Write a program for login if name is "Hero" and password is "Hero@123"

// // let name = "Hero";
// // let password = "Hero@123";
// // if (name == "Hero" && password == "Hero@123"){
// //     console.log("Login Succesful");
// // }
// // else{
// //     console.log("Invalid credentials");
// // }


// function Login(){
//     let name = document.getElementById("u_name").value;
//     let password = document.getElementById("u_password").value;
//     if (name == "Hero" && password == "Hero@123"){
//         result = "Login Succesful";
//     }
//     else{
//         result = "Invalid credentials";
//     }
//     document.getElementById("login").value = result;
// }

// // Check whether a given number is a 3-digit number or not.

// function threeDigit(){
//     let digit = parseInt(document.getElementById("threeNum").value);
//     if (digit >= 100 && digit <= 999){
//         result = "Is a three Digit";
//     }
//     else{
//         result = "Is not a three Digit";
//     }
//      document.getElementById("threeres").value = result;

// }

// function isDivisibleBy(){
//     let num = parseInt(document.getElementById("divisibleNum").value);
//     if (num % 3 == 0 && num % 5 == 0){
//         result = "Is Divisible by 3 and 5";
//     }
//     else{
//         result = "Is Not Divisible by 3 and 5";
//     }
//      document.getElementById("divisibleres").value = result;

// }

// function isTriangle(){
//     let angle1 = parseInt(document.getElementById("angle1").value);
//     let angle2 = parseInt(document.getElementById("angle2").value);
//     let angle3 = parseInt(document.getElementById("angle3").value);
//     if((angle1 + angle1 >= 180) || (angle2 + angle3 >= 180) || (angle1 + angle3 >= 180)){
//         result = "Is a Triangle";
//     }
//     else{
//         result = "Is Not a Triangle";
//     }
//     document.getElementById("triangleres").value = result;
// }

// function isMultiple(){
//     let num = parseInt(document.getElementById("multipleNum").value);
//     if (num % 10 == 0){
//         result = "Is Multiple Of 10";
//     }
//     else{
//         result = "Is Not Multiple Of 10";
//     }
//      document.getElementById("multipleres").value = result;

// }
// // Truthy and Falsy

// // if(){
// //     console.log("If block");
    
// // }
// // else{
// //     console.log("Else block");
    
// // }

// // --------------If-else-If block---------------------------

// // if (true){
// //     console.log("Condition 1 IS True; If Block");    
// // }
// // else if(false){
// //     console.log("Condition 1 is False & Condition 2 is True: 1st Else If block");
// // }
// // else if(false){
// //     console.log("Condition 1 & Condition 2 are False and Condition 3 True: 2nd Else If block");
// // }
// // else{
// //     console.log("All the above Conditions are False: Else block");
// // }


// ---------------------Multiple-If------------------

// if (true){
//     console.log("Condition 1 will be executed");
    
// }
// if (true){
//     console.log("Condition 2 will be executed");
    
// }
// if (true){
//     console.log("Condition 3 will be executed");
    
// }

// ---------------------Ternary Operator------------------------

// condition? if's value : else's value

// console.log(4%2==0? "Even" : "Odd");

// let age=85
// console.log(age>=18? "Eligible to vote" : "Not Eligible to vote");

// --------------------SWITCH Case---------------------------

// let n = 2;
// switch(n){
//     case 1:
//         console.log("Case 1");
//         break;
//     case 2:
//         console.log("Case 2");
//         break;
//     case 3:
//         console.log("Case 3");
//         break;
//     case 4:
//         console.log("Case 4");
//         break;
// }

// let color = "red";
// switch(color){
//     case "red":
//         console.log("Stop the bike and Relax");
//         break;
//     case "yellow":
//         console.log("Get ready to go");
//         break;
//     case "green":
//         console.log("Go safe");
//         break;
//         default:
//             console.log("Traffic Signals: Error");
// }


// Fallthrough Example
// let n = 2;
// switch(n){
//     case 1:
//         console.log("Case 1");
//     case 2:
//         console.log("Case 2");
//     case 3:
//         console.log("Case 3");
//     case 4:
//         console.log("Case 4");
//         default: 
//             console.log("Default Block");
        
// }

// let day = 1;
// switch(day){
//     case 1:
//         console.log("It's Sunday");
//         break;
//     case 2:
//         console.log("It's Monday");
//         break;
//     case 3:
//         console.log("It's Tuesday");
//         break;
//     case 4:
//         console.log("It's Wednesday");
//     case 5:
//         console.log("It's Thursday");
//     case 6:
//         console.log("It's Friday");
//     case 7:
//         console.log("It's Satday");
        
            
//         default:
//             console.log("Not a day");
// }


function switchCalculator(){
    let number1 = parseInt(document.getElementById("switchNum1").value);
    let number2 = parseInt(document.getElementById("switchNum2").value);
    let operator = document.getElementById("operator").value;
    let result;
    switch(operator){
        case "+":
            result = number1 + number2;
            break;
        case "-":
            result = number1 - number2;
            break;
        case "*":
            result = number1 * number2;
            break;
        case "/":
            result = number1 / number2;
            break;
        case "%":
            result = number1 % number2;
            break;
            default:
                result = "Invalid Operator";
    }
    document.getElementById("switchRes").value = result;
}
