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

//Without Input & Without Return

// ------------------------- Factorial --------------------

let factorial = () => {
    let n = 8;
    let fact = 1;

    for (let i = n; i >= 1; i--) {
        fact = i * fact;
    }

    console.log(fact);
};

factorial();


// ------------------------- Factors Of Number --------------------

let factor = () => {
    let n = 6;

    for (let i = 1; i <= n; i++) {
        if (n % i == 0) {
            console.log(i);
        }
    }
};

factor();


// ------------------------- Prime Number --------------------

let Prime = () => {
    let n = 5;
    let count = 0;

    for (let i = 1; i <= n; i++) {
        if (n % i == 0) {
            count++;
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

let fibonacci = () => {
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

let reverseDigits = () => {
    let n = 12345;

    while (n > 0) {
        let digit = n % 10;
        console.log(digit);

        n = parseInt(n / 10);
    }
};

reverseDigits();


// ------------------------- Count Digits --------------------

let countDigits = () => {
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

let sumDigits = () => {
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

let reverseNumber = () => {
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

let palindrome = () => {
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

let multiplicationTable = () => {
    let n = 7;

    for (let i = 1; i <= 10; i++) {
        console.log(n + " x " + i + " = " + n * i);
    }
};

multiplicationTable();


// ------------------------- Swapping --------------------

let swapNumbers = () => {
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

let perfectNumber = () => {
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

let smallestDigit = () => {
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

let armstrong = () => {
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

let secondLargestDigit = () => {
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

let factorial2 = (n) => {
    let fact = 1;

    for (let i = 1; i <= n; i++) {
        fact = fact * i;
    }

    console.log("Factorial:", fact);
};

factorial2(5);


// ------------------------- Factors --------------------

let factors2 = (n) => {
    console.log("Factors:");

    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            console.log(i);
        }
    }
};

factors2(24);


// ------------------------- Prime --------------------

let prime2 = (n) => {
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

let fibonacci2 = (n) => {
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

let reverseDigits2 = (n) => {
    console.log("Digits in Reverse Order:");

    while (n > 0) {
        let digit = n % 10;
        console.log(digit);

        n = parseInt(n / 10);
    }
};

reverseDigits2(12345);


// ------------------------- Count Digits --------------------

let countDigits2 = (n) => {
    let count = 0;

    while (n > 0) {
        count++;
        n = parseInt(n / 10);
    }

    console.log("Number of Digits:", count);
};

countDigits2(583921);


// ------------------------- Sum Digits --------------------

let sumDigits2 = (n) => {
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

let reverseNumber2 = (n) => {
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

let palindrome2 = (n) => {
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

let multiplicationTable2 = (n) => {
    for (let i = 1; i <= 10; i++) {
        console.log(n + " x " + i + " = " + n * i);
    }
};

multiplicationTable2(7);


// ------------------------- Swapping --------------------

let swap2 = (a, b) => {
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

let perfectNumber2 = (n) => {
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

let smallestDigit2 = (n) => {
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

let armstrong2 = (n) => {
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

let secondLargestDigit2 = (n) => {
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

// Without Input & With Return

// ------------------------- Factorial --------------------

let factorial3 = () => {
    let n = 5;
    let fact = 1;

    for (let i = 1; i <= n; i++) {
        fact = fact * i;
    }

    return fact;
};

console.log("Factorial:", factorial3());


// ------------------------- Factors --------------------

let factors3 = () => {
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

let prime3 = () => {
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

let fibonacci3 = () => {
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

let reverseDigits3 = () => {
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

let countDigits3 = () => {
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

let sumDigits3 = () => {
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

let reverseNumber3 = () => {
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

let palindrome3 = () => {
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

let multiplicationTable3 = () => {
    let n = 7;
    let result = "";

    for (let i = 1; i <= 10; i++) {
        result = result + n + " x " + i + " = " + n * i + "\n";
    }

    return result;
};

console.log(multiplicationTable3());


// ------------------------- Swapping --------------------

let swap3 = () => {
    let a = 10;
    let b = 20;

    let temp = a;
    a = b;
    b = temp;

    return "a = " + a + ", b = " + b;
};

console.log("After Swapping:", swap3());


// ------------------------- Perfect Number --------------------

let perfectNumber3 = () => {
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

let smallestDigit3 = () => {
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

let armstrong3 = () => {
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

let secondLargestDigit3 = () => {
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

let factorial4 = (n) => {
    let fact = 1;

    for (let i = 1; i <= n; i++) {
        fact = fact * i;
    }

    return fact;
};

console.log("Factorial:", factorial4(5));


// ------------------------- Factors --------------------

let factors4 = (n) => {
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

let prime4 = (n) => {
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

let fibonacci4 = (n) => {
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

let reverseDigits4 = (n) => {
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

let countDigits4 = (n) => {
    let count = 0;

    while (n > 0) {
        count++;

        n = parseInt(n / 10);
    }

    return count;
};

console.log("Number of Digits:", countDigits4(583921));


// ------------------------- Sum Digits --------------------

let sumDigits4 = (n) => {
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

let reverseNumber4 = (n) => {
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

let palindrome4 = (n) => {
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

let multiplicationTable4 = (n) => {
    let result = "";

    for (let i = 1; i <= 10; i++) {
        result = result + n + " x " + i + " = " + n * i + "\n";
    }

    return result;
};

console.log(multiplicationTable4(7));


// ------------------------- Swapping --------------------

let swap4 = (a, b) => {
    let temp = a;

    a = b;
    b = temp;

    return "a = " + a + ", b = " + b;
};

console.log("After Swapping:", swap4(10, 20));


// ------------------------- Perfect Number --------------------

let perfectNumber4 = (n) => {
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

let smallestDigit4 = (n) => {
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

let armstrong4 = (n) => {
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

let secondLargestDigit4 = (n) => {
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
