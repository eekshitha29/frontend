// // 1. Print numbers from 1 lakh to 2 lakh.

// for (i = 100000; i<=200000; i=i+1){
//     console.log(i);
    
// }


// // 2. Print the sequence: 1 4 9 16 25 36 49 ... 100

// for (i = 1; i<=10; i=i+1){
//     console.log(i*i);
    
// }

// // 3. Print the sequence: 1 8 27 64 125 216 ... 1000

// for (i = 1; i<=10; i=i+1){
//     console.log(i**3);
    
// }

// // 4. Print numbers from 5 lakh to 4 lakh in reverse order.

// for (i = 500000; i>=400000; i=i-1){
//     console.log(i);
    
// }


// // 5. Print the sequence: 2.5 2 1.5 1 0.5

// for (i = 2.5; i>=0.5; i=i-0.5){
//     console.log(i);
    
// }

// // 6. Print the factorns of n

// n = 6
// for (i=1;i<=n;i++){
//     if(n%i==0){
//         console.log(i);
        
//     }
// }

// // 7. Count the factorns of n

// n = 6

// count = 0

// for(i=1; i <= n; i++){
//     if (n%i == 0){
//         count = count + 1
//     }
// }
// console.log(count);


// // 8. Print the Prime number

// n = 6
// count = 0
// for (i = 1; i<= n; i++){
//     if(n%i==0){
//         count = count + 1
//     }
// }
// console.log(count);
// if(count == 2){
//     console.log(n, "is Prime number");
            
// }
// else{
//     console.log(n, "is not a  Prime number");
// }


// 9. Write the program to find the sum of factors of given number

// n = 6
// sum = 0

// for (i = 1; i<=n; i++){
//     if(n % i == 0){
//         sum = sum + i
//     }
// }
// console.log(sum);


// 10. Write the program to find the count/sum of Prime numbers from 1 to 100

// if(n%i == 0){
//     console.log(i);
    
// }

// // 11. Check if perfect number {6,28,496,8128}

// n = 8128
// sum = 0
// for (i = 1; i< n; i++){
//     if(n % i == 0){
//         sum = sum + i;
//     }
// }
// console.log(sum);
// // Condition for perfect number

// if (sum == n){
//     console.log(n, "Is a perfect number");
    
// }
// else{
//     console.log(n, "Is not a perfect number");
// }



// 1.Find the average of numbers from 1 to N.
//     Example: If N = 5, calculate the average of 1, 2, 3, 4, 5.

// n=5
// sum = 0

// for(i = 1; i <= n; i = i + 1){
//     sum = sum + i;
//     average = sum/n;
// }

// console.log(average);


// 2.Find the sum of squares of numbers from 1 to N.
//     Example: If N = 5, calculate 1² + 2² + 3² + 4² + 5².

// n = 5
// sum = 0
// for(i = 1; i <= n; i = i + 1){
//     power = i**2
//     sum = sum + power
// }
// console.log(sum);

// 3.Find the sum of cubes of numbers from 1 to N.
//     Example: If N = 5, calculate 1³ + 2³ + 3³ + 4³ + 5³.

// n = 5
// sum = 0
// for(i = 1; i <= n; i = i + 1){
//     power = i**3
//     sum = sum + power
// }
// console.log(sum);


// 4.Calculate the power of a number without using the ** operator.
//     Example: If base = 2 and power = 5, calculate 2 × 2 × 2 × 2 × 2.

// base = 2
// power = 5
// result = 1
// for (i = 1; i <= 5; i = i + 1){
    
//     result = base * result
// }
// console.log(result);



// 5.Display the first N terms of the Fibonacci series.
//     Example: If N = 7, display 0, 1, 1, 2, 3, 5, 8.

// n = 7
// a = 0
// b = 1


// for(i = 0; i <= n; i++){
//     c = a + b
//     a = b
//     b = c
//     console.log(c);
    
    
// }

// 6.Display the first N terms of the series:
//     1, 1/2, 1/3, 1/4, ...
//     Example: If N = 4, display 1, 1/2, 1/3, 1/4.
// n = 5
// for(i = 1; i<=n; i++){
//     console.log("1/",i);
    
// }


// 7.Display the first N terms of the series:
//     1, 11, 111, 1111, 11111, ...
//     Example: If N = 5, display 1, 11, 111, 1111, 11111.

n = 5
term = " "
for(i = 1; i <= n ; i++){
    
}
// 8.Display the first N terms of the series:
//     1, 3, 9, 27, 81, ...
//     Each term is obtained by multiplying the previous term by 3.




