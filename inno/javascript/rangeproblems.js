// // --------------MULTIPLICATION TABLE------------------
// for(j=1;j<=5;j++){
//     let n = j;
//     for(i = 1; i <= 10; i++){
//     console.log(n,  "x", i , "=" , n*i);
//     }
// }

// // -------------------FACTORIALS------------------

// for(j=5; j <= 10; j++){
//     let n = j;
//     let factorial = 1
//     for (let i=1;i<=n;i++){
//         factorial = factorial * i;
    
//     }
//     console.log("Factorial of ", n, " = ", factorial);
// }

// // ------------------PRIME NUMBERS--------------------

// for(j=1; j<=1000;j++){
//     let n = j;
//     let count = 0;
//     for(let i =1;i<=n;i++){
//         if(n%i==0){
//             count = count + 1
//         }
//     }
//     if(count==2){
//         console.log(n);
            
//     }
// }

// // -----------------PALINDROMES-------------------------

// for(i = 100; i<=200; i++){
//     n = i;
//     let original_number = n;
//     let reverse = 0
//     while(n>0){
//         last_digit = n % 10;
//         reverse = reverse * 10 + last_digit;
//         n = parseInt(n/10);
//     }
//     if(original_number == reverse){
//         console.log(original_number);
        
//     }
// }

// // Sum of Prime Numbers
// // Find the sum of all prime numbers between 20 and 150.


// let sum = 0;
// for( j = 20; j <= 150; j++){
//     let n = j;
//     let count = 0;
//     for(i = 1; i <= n; i++){
//         if(n % i == 0){
//             count = count + 1
//         }
//     }
//     if(count == 2){
//         sum = sum + n
//     }

// }

// console.log(sum);

// // Average of Perfect Numbers
// // Find the average of all perfect numbers between 1 and 1000.


// let avgsum = 0
// let count = 0
// for(j = 1; j <= 1000; j++){
//     let n = j;
//     let sum = 0;
//     for(i = 1; i <= n/2; i++){
//         if(n % i == 0){
//             sum = sum + i;
//         }
//     }
//     if(sum == n){
//         avgsum = avgsum + n;
//         count++;
        
//     }
// }

// console.log(avgsum/count);


// // Leap Years in a Range (Not Nested Loop Logic)
// // Print all leap years between 1900 and 2026.


// for(i = 1900; i <= 2026; i = i + 1){
//         if(i % 4 == 0){
//             if(i % 100 != 0 || i % 400 == 0){
//                 console.log(i);
//             }
            
//         }
//     }

// // Palindrome Numbers
// // Print all palindrome numbers between 100 and 500.

// for(j = 100; j <= 500; j++){
//     let n = j;
//     original = j
//     reverse = 0
//     while(n > 0){
//         last_digit = n % 10
//         reverse = reverse * 10 + last_digit;
//         n = parseInt(n/10);
//     } 
//     if(original == reverse){
//         console.log(original);
        
//     }
// }

// // Digit Sum = 10
// // Print all numbers between 120 and 850 whose digit sum is exactly 10.

// for(j = 120; j <= 850; j++){
//     let n = j
//     sum = 0
//     while(n > 0){
//         let digit = n % 10
//         sum = sum + digit

//         n = parseInt(n / 10);
//     }
//     if(sum == 10){
//         console.log(j);
        
//     }
// }


// // Pairs with Target Sum
// // Print all pairs (a, b) between 1 and 50 whose sum is 30. Print each pair only once.


// for(let a = 1; a <= 50; a++){
//     for(let b = a + 1; b <= 50; b++){
//         if(a + b == 30){
//             console.log("(", a , b , ")");
//         }
//     }
// }


// // Exactly 3 Factors
// // Print all numbers between 10 and 300 that have exactly 3 factors.


// for(let j = 10; j <= 300; j++){
//     let n = j;
//     let count = 0
//     for(let i = 1; i <= n; i++){
//         if(n % i == 0){
//             count = count + 1
//         }
//     }
//     if(count==3){
//         console.log(n);
        
//     }
// }


// // Prime Factors
// // Print the prime factors of every number between 20 and 50.

// for(let j = 20; j <= 50; j++){
//     let n = j;
    
//     for(let i = 1; i <= n; i++){
//         if(n % i == 0){
//             let count = 0
//             for(let k = 1; k <= i; k++){
//                 if(i%k==0){
//                     count++;
//                 }
//             }
//             if(count==2){
//                 console.log(n,i);
                
//             }
//         }
//     }
    
// }

// // Armstrong Numbers
// // Print all Armstrong numbers between 100 and 999.


// for(let j = 100; j <= 500; j++){
//     let n = j;
//     let original = n
//     let sum = 0
//     while(n>0){
//         let digit = n % 10
//         powerOfDigit = digit ** 3
//         sum = sum + powerOfDigit
//         n = parseInt(n/10)

//     }
//     if(sum == original){
//         console.log(original);
            
//     }
    
    
// }

// // Maximum Factors
// // Find the number between 50 and 150 that has the maximum number of factors.

// let maxCount = 0;
// let maxNumber = 0;
// for(let j = 50; j <= 150; j++){
//     let n = j
//     let count = 0
    
//     for(i = 1; i <= n; i++){
//         if(n % i == 0){
//             count+=1
//         }
//     }
//     if(count > maxCount){
//         maxCount = count;
//         maxNumber = n;
//     }
    
// }
// console.log("Number:", maxNumber);
// console.log("Factors:", maxCount);