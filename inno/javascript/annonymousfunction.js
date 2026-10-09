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

// Without Input & Without Return

// ------------------------- Factorial --------------------

let factorial = function () {
    let n = 8;
    let fact = 1;

    for (let i = n; i >= 1; i--) {
        fact = i * fact;
    }

    console.log(fact);
};

factorial();


// ------------------------- Factors Of Number --------------------

let factor = function () {
    let n = 6;

    for (let i = 1; i <= n; i++) {
        if (n % i == 0) {
            console.log(i);
        }
    }
};

factor();


// ------------------------- Prime Number --------------------

let Prime = function () {
    let n = 5;
    let count = 0;

    for (let i = 1; i <= n; i++) {
        if (n % i == 0) {
            count = count + 1;
        }
    }

    if (count == 2) {
        console.log(n, "is prime");
    } else {
        console.log(n, "is not prime");
    }
};

Prime();


// ------------------------- Fibonacci Series --------------------

let fibonacci = function () {
    let n = 6;
    let a = 0;
    let b = 1;

    for (let i = 0; i < n; i++) {
        console.log(a);

        let c = a + b;
        a = b;
        b = c;
    }
};

fibonacci();


// ------------------------- Display Digits in Reverse --------------------

let reverseDigits = function () {
    let n = 12345;

    while (n > 0) {
        let digit = n % 10;
        console.log(digit);

        n = parseInt(n / 10);
    }
};

reverseDigits();


// ------------------------- Count Digits --------------------

let countDigits = function () {
    let n = 583921;
    let count = 0;

    while (n > 0) {
        count++;
        n = parseInt(n / 10);
    }

    console.log("Number of digits:", count);
};

countDigits();


// ------------------------- Sum of Digits --------------------

let sumDigits = function () {
    let n = 583921;
    let sum = 0;

    while (n > 0) {
        let digit = n % 10;
        sum = sum + digit;

        n = parseInt(n / 10);
    }

    console.log("Sum:", sum);
};

sumDigits();


// ------------------------- Reverse Number --------------------

let reverseNumber = function () {
    let n = 12345;
    let reverse = 0;

    while (n > 0) {
        let digit = n % 10;

        reverse = reverse * 10 + digit;

        n = parseInt(n / 10);
    }

    console.log("Reverse:", reverse);
};

reverseNumber();


// ------------------------- Palindrome --------------------

let palindrome = function () {
    let n = 121;
    let original = n;
    let reverse = 0;

    while (n > 0) {
        let digit = n % 10;

        reverse = reverse * 10 + digit;

        n = parseInt(n / 10);
    }

    if (original === reverse) {
        console.log("Palindrome");
    } else {
        console.log("Not Palindrome");
    }
};

palindrome();


// ------------------------- Multiplication Table --------------------

let multiplicationTable = function () {
    let n = 7;

    for (let i = 1; i <= 10; i++) {
        console.log(n + " x " + i + " = " + n * i);
    }
};

multiplicationTable();


// ------------------------- Swapping --------------------

let swapNumbers = function () {
    let a = 10;
    let b = 20;

    console.log("Before:", a, b);

    let temp = a;
    a = b;
    b = temp;

    console.log("After:", a, b);
};

swapNumbers();


// ------------------------- Perfect Number --------------------

let perfectNumber = function () {
    let n = 28;
    let sum = 0;

    for (let i = 1; i < n; i++) {
        if (n % i === 0) {
            sum = sum + i;
        }
    }

    if (sum === n) {
        console.log("Perfect Number");
    } else {
        console.log("Not a Perfect Number");
    }
};

perfectNumber();


// ------------------------- Smallest Digit --------------------

let smallestDigit = function () {
    let n = 583921;
    let smallest = 9;

    while (n > 0) {
        let digit = n % 10;

        if (digit < smallest) {
            smallest = digit;
        }

        n = parseInt(n / 10);
    }

    console.log("Smallest digit:", smallest);
};

smallestDigit();


// ------------------------- Armstrong Number --------------------

let armstrong = function () {
    let n = 153;
    let original = n;
    let temp = n;
    let count = 0;
    let sum = 0;

    while (temp > 0) {
        count++;
        temp = parseInt(temp / 10);
    }

    temp = n;

    while (temp > 0) {
        let digit = temp % 10;

        sum = sum + digit ** count;

        temp = parseInt(temp / 10);
    }

    if (sum === original) {
        console.log("Armstrong Number");
    } else {
        console.log("Not an Armstrong Number");
    }
};

armstrong();


// ------------------------- Second Largest Digit --------------------

let secondLargestDigit = function () {
    let n = 583921;

    let largest = -1;
    let secondLargest = -1;

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
};

secondLargestDigit();

// With Input & Without Return


// ------------------------- Factorial --------------------

let factorial2 = function (n) {
    let fact = 1;

    for (let i = 1; i <= n; i++) {
        fact = fact * i;
    }

    console.log("Factorial:", fact);
};

factorial2(5);


// ------------------------- Factors --------------------

let factors2 = function (n) {
    console.log("Factors:");

    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            console.log(i);
        }
    }
};

factors2(24);


// ------------------------- Prime --------------------

let prime2 = function (n) {
    let count = 0;

    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            count++;
        }
    }

    if (count === 2) {
        console.log("Prime Number");
    } else {
        console.log("Not a Prime Number");
    }
};

prime2(17);


// ------------------------- Fibonacci --------------------

let fibonacci2 = function (n) {
    let a = 0;
    let b = 1;

    console.log("Fibonacci Series:");

    for (let i = 0; i < n; i++) {
        console.log(a);

        let c = a + b;
        a = b;
        b = c;
    }
};

fibonacci2(8);


// ------------------------- Reverse Digits --------------------

let reverseDigits2 = function (n) {
    console.log("Digits in Reverse Order:");

    while (n > 0) {
        let digit = n % 10;
        console.log(digit);

        n = parseInt(n / 10);
    }
};

reverseDigits2(12345);


// ------------------------- Count Digits --------------------

let countDigits2 = function (n) {
    let count = 0;

    while (n > 0) {
        count++;
        n = parseInt(n / 10);
    }

    console.log("Number of Digits:", count);
};

countDigits2(583921);


// ------------------------- Sum Digits --------------------

let sumDigits2 = function (n) {
    let sum = 0;

    while (n > 0) {
        let digit = n % 10;
        sum = sum + digit;

        n = parseInt(n / 10);
    }

    console.log("Sum of Digits:", sum);
};

sumDigits2(583921);


// ------------------------- Reverse Number --------------------

let reverseNumber2 = function (n) {
    let reverse = 0;

    while (n > 0) {
        let digit = n % 10;

        reverse = reverse * 10 + digit;

        n = parseInt(n / 10);
    }

    console.log("Reverse:", reverse);
};

reverseNumber2(12345);


// ------------------------- Palindrome --------------------

let palindrome2 = function (n) {
    let original = n;
    let reverse = 0;

    while (n > 0) {
        let digit = n % 10;

        reverse = reverse * 10 + digit;

        n = parseInt(n / 10);
    }

    if (original === reverse) {
        console.log("Palindrome Number");
    } else {
        console.log("Not a Palindrome Number");
    }
};

palindrome2(121);


// ------------------------- Multiplication Table --------------------

let multiplicationTable2 = function (n) {
    for (let i = 1; i <= 10; i++) {
        console.log(n + " x " + i + " = " + n * i);
    }
};

multiplicationTable2(7);


// ------------------------- Swapping --------------------

let swap2 = function (a, b) {
    console.log("Before Swapping:");
    console.log("a =", a);
    console.log("b =", b);

    let temp = a;
    a = b;
    b = temp;

    console.log("After Swapping:");
    console.log("a =", a);
    console.log("b =", b);
};

swap2(10, 20);


// ------------------------- Perfect Number --------------------

let perfectNumber2 = function (n) {
    let sum = 0;

    for (let i = 1; i < n; i++) {
        if (n % i === 0) {
            sum = sum + i;
        }
    }

    if (sum === n) {
        console.log("Perfect Number");
    } else {
        console.log("Not a Perfect Number");
    }
};

perfectNumber2(28);


// ------------------------- Smallest Digit --------------------

let smallestDigit2 = function (n) {
    let smallest = 9;

    while (n > 0) {
        let digit = n % 10;

        if (digit < smallest) {
            smallest = digit;
        }

        n = parseInt(n / 10);
    }

    console.log("Smallest Digit:", smallest);
};

smallestDigit2(583921);


// ------------------------- Armstrong --------------------

let armstrong2 = function (n) {
    let original = n;
    let temp = n;
    let count = 0;
    let sum = 0;

    while (temp > 0) {
        count++;
        temp = parseInt(temp / 10);
    }

    temp = n;

    while (temp > 0) {
        let digit = temp % 10;

        sum = sum + digit ** count;

        temp = parseInt(temp / 10);
    }

    if (sum === original) {
        console.log("Armstrong Number");
    } else {
        console.log("Not an Armstrong Number");
    }
};

armstrong2(153);


// ------------------------- Second Largest Digit --------------------

let secondLargestDigit2 = function (n) {
    let largest = -1;
    let secondLargest = -1;

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

    console.log("Largest Digit:", largest);
    console.log("Second Largest Digit:", secondLargest);
};

secondLargestDigit2(583921);

//Without Input & With Return

// ------------------------- Factorial --------------------

let factorial3 = function () {
    let n = 5;
    let fact = 1;

    for (let i = 1; i <= n; i++) {
        fact = fact * i;
    }

    return fact;
};

console.log("Factorial:", factorial3());


// ------------------------- Factors --------------------

let factors3 = function () {
    let n = 24;
    let result = "";

    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            result = result + i + " ";
        }
    }

    return result;
};

console.log("Factors:", factors3());


// ------------------------- Prime --------------------

let prime3 = function () {
    let n = 17;
    let count = 0;

    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            count++;
        }
    }

    if (count === 2) {
        return "Prime Number";
    } else {
        return "Not a Prime Number";
    }
};

console.log(prime3());


// ------------------------- Fibonacci --------------------

let fibonacci3 = function () {
    let n = 8;
    let a = 0;
    let b = 1;
    let result = "";

    for (let i = 0; i < n; i++) {
        result = result + a + " ";

        let c = a + b;
        a = b;
        b = c;
    }

    return result;
};

console.log("Fibonacci:", fibonacci3());


// ------------------------- Reverse Digits --------------------

let reverseDigits3 = function () {
    let n = 12345;
    let result = "";

    while (n > 0) {
        let digit = n % 10;

        result = result + digit + " ";

        n = parseInt(n / 10);
    }

    return result;
};

console.log("Reverse Digits:", reverseDigits3());


// ------------------------- Count Digits --------------------

let countDigits3 = function () {
    let n = 583921;
    let count = 0;

    while (n > 0) {
        count++;
        n = parseInt(n / 10);
    }

    return count;
};

console.log("Number of Digits:", countDigits3());


// ------------------------- Sum Digits --------------------

let sumDigits3 = function () {
    let n = 583921;
    let sum = 0;

    while (n > 0) {
        let digit = n % 10;
        sum = sum + digit;

        n = parseInt(n / 10);
    }

    return sum;
};

console.log("Sum of Digits:", sumDigits3());


// ------------------------- Reverse Number --------------------

let reverseNumber3 = function () {
    let n = 12345;
    let reverse = 0;

    while (n > 0) {
        let digit = n % 10;

        reverse = reverse * 10 + digit;

        n = parseInt(n / 10);
    }

    return reverse;
};

console.log("Reverse:", reverseNumber3());


// ------------------------- Palindrome --------------------

let palindrome3 = function () {
    let n = 121;
    let original = n;
    let reverse = 0;

    while (n > 0) {
        let digit = n % 10;

        reverse = reverse * 10 + digit;

        n = parseInt(n / 10);
    }

    if (original === reverse) {
        return "Palindrome Number";
    } else {
        return "Not a Palindrome Number";
    }
};

console.log(palindrome3());


// ------------------------- Multiplication Table --------------------

let multiplicationTable3 = function () {
    let n = 7;
    let result = "";

    for (let i = 1; i <= 10; i++) {
        result = result + n + " x " + i + " = " + n * i + "\n";
    }

    return result;
};

console.log(multiplicationTable3());


// ------------------------- Swapping --------------------

let swap3 = function () {
    let a = 10;
    let b = 20;

    let temp = a;
    a = b;
    b = temp;

    return "a = " + a + ", b = " + b;
};

console.log("After Swapping:", swap3());


// ------------------------- Perfect Number --------------------

let perfectNumber3 = function () {
    let n = 28;
    let sum = 0;

    for (let i = 1; i < n; i++) {
        if (n % i === 0) {
            sum = sum + i;
        }
    }

    if (sum === n) {
        return "Perfect Number";
    } else {
        return "Not a Perfect Number";
    }
};

console.log(perfectNumber3());


// ------------------------- Smallest Digit --------------------

let smallestDigit3 = function () {
    let n = 583921;
    let smallest = 9;

    while (n > 0) {
        let digit = n % 10;

        if (digit < smallest) {
            smallest = digit;
        }

        n = parseInt(n / 10);
    }

    return smallest;
};

console.log("Smallest Digit:", smallestDigit3());


// ------------------------- Armstrong --------------------

let armstrong3 = function () {
    let n = 153;
    let original = n;
    let temp = n;
    let count = 0;
    let sum = 0;

    while (temp > 0) {
        count++;
        temp = parseInt(temp / 10);
    }

    temp = n;

    while (temp > 0) {
        let digit = temp % 10;

        sum = sum + digit ** count;

        temp = parseInt(temp / 10);
    }

    if (sum === original) {
        return "Armstrong Number";
    } else {
        return "Not an Armstrong Number";
    }
};

console.log(armstrong3());


// ------------------------- Second Largest Digit --------------------

let secondLargestDigit3 = function () {
    let n = 583921;

    let largest = -1;
    let secondLargest = -1;

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
};

console.log("Second Largest Digit:", secondLargestDigit3());

//With Input & With Return

// ------------------------- Factorial --------------------

let factorial4 = function (n) {
    let fact = 1;

    for (let i = 1; i <= n; i++) {
        fact = fact * i;
    }

    return fact;
};

console.log("Factorial:", factorial4(5));


// ------------------------- Factors --------------------

let factors4 = function (n) {
    let result = "";

    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            result = result + i + " ";
        }
    }

    return result;
};

console.log("Factors:", factors4(24));


// ------------------------- Prime --------------------

let prime4 = function (n) {
    let count = 0;

    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            count++;
        }
    }

    if (count === 2) {
        return "Prime Number";
    } else {
        return "Not a Prime Number";
    }
};

console.log(prime4(17));


// ------------------------- Fibonacci --------------------

let fibonacci4 = function (n) {
    let a = 0;
    let b = 1;
    let result = "";

    for (let i = 0; i < n; i++) {
        result = result + a + " ";

        let c = a + b;
        a = b;
        b = c;
    }

    return result;
};

console.log("Fibonacci:", fibonacci4(8));


// ------------------------- Reverse Digits --------------------

let reverseDigits4 = function (n) {
    let result = "";

    while (n > 0) {
        let digit = n % 10;

        result = result + digit + " ";

        n = parseInt(n / 10);
    }

    return result;
};

console.log("Reverse Digits:", reverseDigits4(12345));


// ------------------------- Count Digits --------------------

let countDigits4 = function (n) {
    let count = 0;

    while (n > 0) {
        count++;

        n = parseInt(n / 10);
    }

    return count;
};

console.log("Number of Digits:", countDigits4(583921));


// ------------------------- Sum Digits --------------------

let sumDigits4 = function (n) {
    let sum = 0;

    while (n > 0) {
        let digit = n % 10;

        sum = sum + digit;

        n = parseInt(n / 10);
    }

    return sum;
};

console.log("Sum of Digits:", sumDigits4(583921));


// ------------------------- Reverse Number --------------------

let reverseNumber4 = function (n) {
    let reverse = 0;

    while (n > 0) {
        let digit = n % 10;

        reverse = reverse * 10 + digit;

        n = parseInt(n / 10);
    }

    return reverse;
};

console.log("Reverse:", reverseNumber4(12345));


// ------------------------- Palindrome --------------------

let palindrome4 = function (n) {
    let original = n;
    let reverse = 0;

    while (n > 0) {
        let digit = n % 10;

        reverse = reverse * 10 + digit;

        n = parseInt(n / 10);
    }

    if (original === reverse) {
        return "Palindrome Number";
    } else {
        return "Not a Palindrome Number";
    }
};

console.log(palindrome4(121));


// ------------------------- Multiplication Table --------------------

let multiplicationTable4 = function (n) {
    let result = "";

    for (let i = 1; i <= 10; i++) {
        result = result + n + " x " + i + " = " + n * i + "\n";
    }

    return result;
};

console.log(multiplicationTable4(7));


// ------------------------- Swapping --------------------

let swap4 = function (a, b) {
    let temp = a;

    a = b;
    b = temp;

    return "a = " + a + ", b = " + b;
};

console.log("After Swapping:", swap4(10, 20));


// ------------------------- Perfect Number --------------------

let perfectNumber4 = function (n) {
    let sum = 0;

    for (let i = 1; i < n; i++) {
        if (n % i === 0) {
            sum = sum + i;
        }
    }

    if (sum === n) {
        return "Perfect Number";
    } else {
        return "Not a Perfect Number";
    }
};

console.log(perfectNumber4(28));


// ------------------------- Smallest Digit --------------------

let smallestDigit4 = function (n) {
    let smallest = 9;

    while (n > 0) {
        let digit = n % 10;

        if (digit < smallest) {
            smallest = digit;
        }

        n = parseInt(n / 10);
    }

    return smallest;
};

console.log("Smallest Digit:", smallestDigit4(583921));


// ------------------------- Armstrong --------------------

let armstrong4 = function (n) {
    let original = n;
    let temp = n;
    let count = 0;
    let sum = 0;

    while (temp > 0) {
        count++;

        temp = parseInt(temp / 10);
    }

    temp = n;

    while (temp > 0) {
        let digit = temp % 10;

        sum = sum + digit ** count;

        temp = parseInt(temp / 10);
    }

    if (sum === original) {
        return "Armstrong Number";
    } else {
        return "Not an Armstrong Number";
    }
};

console.log(armstrong4(153));


// ------------------------- Second Largest Digit --------------------

let secondLargestDigit4 = function (n) {
    let largest = -1;
    let secondLargest = -1;

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
};

console.log(
    "Second Largest Digit:",
    secondLargestDigit4(583921)
);
