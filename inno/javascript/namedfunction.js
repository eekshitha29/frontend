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

//without input without return type


// 1. Factorial
function factorial1() {
    let n = 8, fact = 1;
    for (let i = n; i >= 1; i--) fact *= i;
    console.log("Factorial:", fact);
}
factorial1();

// 2. Factors
function factors1() {
    let n = 6;
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) console.log(i);
    }
}
factors1();

// 3. Prime Number
function prime1() {
    let n = 5, count = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) count++;
    }
    if (count === 2) console.log("Prime Number");
    else console.log("Not a Prime Number");
}
prime1();

// 4. Fibonacci Series
function fibonacci1() {
    let n = 6, a = 0, b = 1;
    for (let i = 0; i < n; i++) {
        console.log(a);
        let c = a + b;
        a = b;
        b = c;
    }
}
fibonacci1();

// 5. Display Digits in Reverse Order
function reverseDigits1() {
    let n = 12345;
    while (n > 0) {
        console.log(n % 10);
        n = parseInt(n / 10);
    }
}
reverseDigits1();

// 6. Count Digits
function countDigits1() {
    let n = 583921, count = 0;
    while (n > 0) {
        count++;
        n = parseInt(n / 10);
    }
    console.log("Number of digits:", count);
}
countDigits1();

// 7. Sum of Digits
function sumDigits1() {
    let n = 583921, sum = 0;
    while (n > 0) {
        sum += n % 10;
        n = parseInt(n / 10);
    }
    console.log("Sum:", sum);
}
sumDigits1();

// 8. Reverse Number
function reverseNumber1() {
    let n = 12345, reverse = 0;
    while (n > 0) {
        let digit = n % 10;
        reverse = reverse * 10 + digit;
        n = parseInt(n / 10);
    }
    console.log("Reverse:", reverse);
}
reverseNumber1();

// 9. Palindrome Number
function palindrome1() {
    let n = 121, original = n, reverse = 0;
    while (n > 0) {
        let digit = n % 10;
        reverse = reverse * 10 + digit;
        n = parseInt(n / 10);
    }
    if (original === reverse) console.log("Palindrome");
    else console.log("Not Palindrome");
}
palindrome1();

// 10. Multiplication Table
function multiplicationTable1() {
    let n = 7;
    for (let i = 1; i <= 10; i++) {
        console.log(n + " x " + i + " = " + n * i);
    }
}
multiplicationTable1();

// 11. Swapping Two Numbers
function swapNumbers1() {
    let a = 10, b = 20;
    console.log("Before:", a, b);
    let temp = a;
    a = b;
    b = temp;
    console.log("After:", a, b);
}
swapNumbers1();

// 12. Perfect Number
function perfectNumber1() {
    let n = 28, sum = 0;
    for (let i = 1; i < n; i++) {
        if (n % i === 0) sum += i;
    }
    if (sum === n) console.log("Perfect Number");
    else console.log("Not a Perfect Number");
}
perfectNumber1();

// 13. Smallest Digit
function smallestDigit1() {
    let n = 583921, smallest = 9;
    while (n > 0) {
        let digit = n % 10;
        if (digit < smallest) smallest = digit;
        n = parseInt(n / 10);
    }
    console.log("Smallest digit:", smallest);
}
smallestDigit1();

// 14. Armstrong Number
function armstrong1() {
    let n = 153, original = n, temp = n;
    let count = 0, sum = 0;

    while (temp > 0) {
        count++;
        temp = parseInt(temp / 10);
    }

    temp = n;
    while (temp > 0) {
        let digit = temp % 10;
        sum += digit ** count;
        temp = parseInt(temp / 10);
    }

    if (sum === original) console.log("Armstrong Number");
    else console.log("Not an Armstrong Number");
}
armstrong1();

// 15. Second Largest Distinct Digit
function secondLargestDigit1() {
    let n = 583921, largest = -1, secondLargest = -1;

    while (n > 0) {
        let digit = n % 10;

        if (digit > largest) {
            secondLargest = largest;
            largest = digit;
        } else if (digit > secondLargest && digit !== largest) {
            secondLargest = digit;
        }

        n = parseInt(n / 10);
    }

    console.log("Largest digit:", largest);
    console.log("Second largest digit:", secondLargest);
}
secondLargestDigit1();

//With input and without return

// 16. Factorial
function factorial2(n) {
    let fact = 1;
    for (let i = 1; i <= n; i++) fact *= i;
    console.log("Factorial:", fact);
}
factorial2(5);

// 17. Factors
function factors2(n) {
    console.log("Factors:");
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) console.log(i);
    }
}
factors2(24);

// 18. Prime Number
function prime2(n) {
    let count = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) count++;
    }
    if (count === 2) console.log("Prime Number");
    else console.log("Not a Prime Number");
}
prime2(17);

// 19. Fibonacci Series
function fibonacci2(n) {
    let a = 0, b = 1;
    for (let i = 0; i < n; i++) {
        console.log(a);
        let c = a + b;
        a = b;
        b = c;
    }
}
fibonacci2(8);

// 20. Display Digits in Reverse Order
function reverseDigits2(n) {
    while (n > 0) {
        console.log(n % 10);
        n = parseInt(n / 10);
    }
}
reverseDigits2(12345);

// 21. Count Digits
function countDigits2(n) {
    let count = 0;
    while (n > 0) {
        count++;
        n = parseInt(n / 10);
    }
    console.log("Number of digits:", count);
}
countDigits2(583921);

// 22. Sum of Digits
function sumDigits2(n) {
    let sum = 0;
    while (n > 0) {
        sum += n % 10;
        n = parseInt(n / 10);
    }
    console.log("Sum:", sum);
}
sumDigits2(583921);

// 23. Reverse Number
function reverseNumber2(n) {
    let reverse = 0;
    while (n > 0) {
        let digit = n % 10;
        reverse = reverse * 10 + digit;
        n = parseInt(n / 10);
    }
    console.log("Reverse:", reverse);
}
reverseNumber2(12345);

// 24. Palindrome Number
function palindrome2(n) {
    let original = n, reverse = 0;
    while (n > 0) {
        let digit = n % 10;
        reverse = reverse * 10 + digit;
        n = parseInt(n / 10);
    }
    if (original === reverse) console.log("Palindrome");
    else console.log("Not Palindrome");
}
palindrome2(121);

// 25. Multiplication Table
function multiplicationTable2(n) {
    for (let i = 1; i <= 10; i++) {
        console.log(n + " x " + i + " = " + n * i);
    }
}
multiplicationTable2(7);

// 26. Swapping Two Numbers
function swapNumbers2(a, b) {
    console.log("Before:", a, b);
    let temp = a;
    a = b;
    b = temp;
    console.log("After:", a, b);
}
swapNumbers2(10, 20);

// 27. Perfect Number
function perfectNumber2(n) {
    let sum = 0;
    for (let i = 1; i < n; i++) {
        if (n % i === 0) sum += i;
    }
    if (sum === n) console.log("Perfect Number");
    else console.log("Not a Perfect Number");
}
perfectNumber2(28);

// 28. Smallest Digit
function smallestDigit2(n) {
    let smallest = 9;
    while (n > 0) {
        let digit = n % 10;
        if (digit < smallest) smallest = digit;
        n = parseInt(n / 10);
    }
    console.log("Smallest digit:", smallest);
}
smallestDigit2(583921);

// 29. Armstrong Number
function armstrong2(n) {
    let original = n, temp = n, count = 0, sum = 0;

    while (temp > 0) {
        count++;
        temp = parseInt(temp / 10);
    }

    temp = n;
    while (temp > 0) {
        let digit = temp % 10;
        sum += digit ** count;
        temp = parseInt(temp / 10);
    }

    if (sum === original) console.log("Armstrong Number");
    else console.log("Not an Armstrong Number");
}
armstrong2(153);

// 30. Second Largest Distinct Digit
function secondLargestDigit2(n) {
    let largest = -1, secondLargest = -1;

    while (n > 0) {
        let digit = n % 10;

        if (digit > largest) {
            secondLargest = largest;
            largest = digit;
        } else if (digit > secondLargest && digit !== largest) {
            secondLargest = digit;
        }

        n = parseInt(n / 10);
    }

    console.log("Largest digit:", largest);
    console.log("Second largest digit:", secondLargest);
}
secondLargestDigit2(583921);

//Without input and with return

// 31. Factorial
function factorial3() {
    let n = 5, fact = 1;
    for (let i = 1; i <= n; i++) fact *= i;
    return fact;
}
console.log("Factorial:", factorial3());

// 32. Factors
function factors3() {
    let n = 24, result = "";
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) result += i + " ";
    }
    return result;
}
console.log("Factors:", factors3());

// 33. Prime Number
function prime3() {
    let n = 17, count = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) count++;
    }
    if (count === 2) return "Prime Number";
    else return "Not a Prime Number";
}
console.log(prime3());

// 34. Fibonacci Series
function fibonacci3() {
    let n = 8, a = 0, b = 1, result = "";
    for (let i = 0; i < n; i++) {
        result += a + " ";
        let c = a + b;
        a = b;
        b = c;
    }
    return result;
}
console.log("Fibonacci:", fibonacci3());

// 35. Display Digits in Reverse Order
function reverseDigits3() {
    let n = 12345, result = "";
    while (n > 0) {
        result += n % 10 + " ";
        n = parseInt(n / 10);
    }
    return result;
}
console.log("Reverse digits:", reverseDigits3());

// 36. Count Digits
function countDigits3() {
    let n = 583921, count = 0;
    while (n > 0) {
        count++;
        n = parseInt(n / 10);
    }
    return count;
}
console.log("Number of digits:", countDigits3());

// 37. Sum of Digits
function sumDigits3() {
    let n = 583921, sum = 0;
    while (n > 0) {
        sum += n % 10;
        n = parseInt(n / 10);
    }
    return sum;
}
console.log("Sum:", sumDigits3());

// 38. Reverse Number
function reverseNumber3() {
    let n = 12345, reverse = 0;
    while (n > 0) {
        let digit = n % 10;
        reverse = reverse * 10 + digit;
        n = parseInt(n / 10);
    }
    return reverse;
}
console.log("Reverse:", reverseNumber3());

// 39. Palindrome Number
function palindrome3() {
    let n = 121, original = n, reverse = 0;
    while (n > 0) {
        let digit = n % 10;
        reverse = reverse * 10 + digit;
        n = parseInt(n / 10);
    }
    if (original === reverse) return "Palindrome";
    else return "Not Palindrome";
}
console.log(palindrome3());

// 40. Multiplication Table
function multiplicationTable3() {
    let n = 7, result = "";
    for (let i = 1; i <= 10; i++) {
        result += n + " x " + i + " = " + n * i + "\n";
    }
    return result;
}
console.log(multiplicationTable3());

// 41. Swapping Two Numbers
function swapNumbers3() {
    let a = 10, b = 20;
    let temp = a;
    a = b;
    b = temp;
    return "a = " + a + ", b = " + b;
}
console.log(swapNumbers3());

// 42. Perfect Number
function perfectNumber3() {
    let n = 28, sum = 0;
    for (let i = 1; i < n; i++) {
        if (n % i === 0) sum += i;
    }
    if (sum === n) return "Perfect Number";
    else return "Not a Perfect Number";
}
console.log(perfectNumber3());

// 43. Smallest Digit
function smallestDigit3() {
    let n = 583921, smallest = 9;
    while (n > 0) {
        let digit = n % 10;
        if (digit < smallest) smallest = digit;
        n = parseInt(n / 10);
    }
    return smallest;
}
console.log("Smallest digit:", smallestDigit3());

// 44. Armstrong Number
function armstrong3() {
    let n = 153, original = n, temp = n, count = 0, sum = 0;
    while (temp > 0) {
        count++;
        temp = parseInt(temp / 10);
    }
    temp = n;
    while (temp > 0) {
        let digit = temp % 10;
        sum += digit ** count;
        temp = parseInt(temp / 10);
    }
    if (sum === original) return "Armstrong Number";
    else return "Not an Armstrong Number";
}
console.log(armstrong3());

// 45. Second Largest Distinct Digit
function secondLargestDigit3() {
    let n = 583921, largest = -1, secondLargest = -1;
    while (n > 0) {
        let digit = n % 10;
        if (digit > largest) {
            secondLargest = largest;
            largest = digit;
        } else if (digit > secondLargest && digit !== largest) {
            secondLargest = digit;
        }
        n = parseInt(n / 10);
    }
    return secondLargest;
}
console.log("Second largest digit:", secondLargestDigit3());

//With input and with return

// 46. Factorial
function factorial4(n) {
    let fact = 1;
    for (let i = 1; i <= n; i++) fact *= i;
    return fact;
}
console.log("Factorial:", factorial4(5));

// 47. Factors
function factors4(n) {
    let result = "";
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) result += i + " ";
    }
    return result;
}
console.log("Factors:", factors4(24));

// 48. Prime Number
function prime4(n) {
    let count = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) count++;
    }
    if (count === 2) return "Prime Number";
    else return "Not a Prime Number";
}
console.log(prime4(17));

// 49. Fibonacci Series
function fibonacci4(n) {
    let a = 0, b = 1, result = "";
    for (let i = 0; i < n; i++) {
        result += a + " ";
        let c = a + b;
        a = b;
        b = c;
    }
    return result;
}
console.log("Fibonacci:", fibonacci4(8));

// 50. Display Digits in Reverse Order
function reverseDigits4(n) {
    let result = "";
    while (n > 0) {
        result += n % 10 + " ";
        n = parseInt(n / 10);
    }
    return result;
}
console.log("Reverse digits:", reverseDigits4(12345));

// 51. Count Digits
function countDigits4(n) {
    let count = 0;
    while (n > 0) {
        count++;
        n = parseInt(n / 10);
    }
    return count;
}
console.log("Number of digits:", countDigits4(583921));

// 52. Sum of Digits
function sumDigits4(n) {
    let sum = 0;
    while (n > 0) {
        sum += n % 10;
        n = parseInt(n / 10);
    }
    return sum;
}
console.log("Sum:", sumDigits4(583921));

// 53. Reverse Number
function reverseNumber4(n) {
    let reverse = 0;
    while (n > 0) {
        let digit = n % 10;
        reverse = reverse * 10 + digit;
        n = parseInt(n / 10);
    }
    return reverse;
}
console.log("Reverse:", reverseNumber4(12345));

// 54. Palindrome Number
function palindrome4(n) {
    let original = n, reverse = 0;
    while (n > 0) {
        let digit = n % 10;
        reverse = reverse * 10 + digit;
        n = parseInt(n / 10);
    }
    if (original === reverse) return "Palindrome";
    else return "Not Palindrome";
}
console.log(palindrome4(121));

// 55. Multiplication Table
function multiplicationTable4(n) {
    let result = "";
    for (let i = 1; i <= 10; i++) {
        result += n + " x " + i + " = " + n * i + "\n";
    }
    return result;
}
console.log(multiplicationTable4(7));

// 56. Swapping Two Numbers
function swapNumbers4(a, b) {
    let temp = a;
    a = b;
    b = temp;
    return "a = " + a + ", b = " + b;
}
console.log(swapNumbers4(10, 20));

// 57. Perfect Number
function perfectNumber4(n) {
    let sum = 0;
    for (let i = 1; i < n; i++) {
        if (n % i === 0) sum += i;
    }
    if (sum === n) return "Perfect Number";
    else return "Not a Perfect Number";
}
console.log(perfectNumber4(28));

// 58. Smallest Digit
function smallestDigit4(n) {
    let smallest = 9;
    while (n > 0) {
        let digit = n % 10;
        if (digit < smallest) smallest = digit;
        n = parseInt(n / 10);
    }
    return smallest;
}
console.log("Smallest digit:", smallestDigit4(583921));

// 59. Armstrong Number
function armstrong4(n) {
    let original = n, temp = n, count = 0, sum = 0;
    while (temp > 0) {
        count++;
        temp = parseInt(temp / 10);
    }
    temp = n;
    while (temp > 0) {
        let digit = temp % 10;
        sum += digit ** count;
        temp = parseInt(temp / 10);
    }
    if (sum === original) return "Armstrong Number";
    else return "Not an Armstrong Number";
}
console.log(armstrong4(153));

// 60. Second Largest Distinct Digit
function secondLargestDigit4(n) {
    let largest = -1, secondLargest = -1;
    while (n > 0) {
        let digit = n % 10;
        if (digit > largest) {
            secondLargest = largest;
            largest = digit;
        } else if (digit > secondLargest && digit !== largest) {
            secondLargest = digit;
        }
        n = parseInt(n / 10);
    }
    return secondLargest;
}
console.log("Second largest digit:", secondLargestDigit4(583921));
