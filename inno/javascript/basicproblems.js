
function addTwo(){
    let n1 = parseInt(document.getElementById("Num1").value);
    let n2 = parseInt(document.getElementById("Num2").value);
    let sum=n1+n2;
    document.getElementById("Res").value=sum;
}

function avgThree(){
    let n1 = parseInt(document.getElementById("Number1").value);
    let n2 = parseInt(document.getElementById("Number2").value);
    let n3 = parseInt(document.getElementById("Number3").value);
    let avg = (n1+n2+n3)/3;
    document.getElementById("avg").value = avg;
}

function sumOfN(){
    let n = parseInt(document.getElementById("Number").value);
    let sumOfn = n*(n+1)/2;
    document.getElementById("n").value = sumOfn;
}

function avgOfN(){
    let n = parseInt(document.getElementById("No").value);
    let n1 = (n+1)/2;
    let avgofn = n*n1;
    document.getElementById("avgOfn").value = avgofn;
}

function missingAngle() {

    let angle1 = parseInt(document.getElementById("1").value);
    let angle2 = parseInt(document.getElementById("2").value);
    let sum = angle1 + angle2;
    let missing_angle = 180 - sum;
    document.getElementById("ma").value = missing_angle;
}


function simpleIntrest(){
    let Principal = parseInt(document.getElementById("p").value);
    let Time = parseInt(document.getElementById("t").value);
    let RateOfIntrest = parseInt(document.getElementById("r").value);
    let Simple_Intrest = (Principal*Time*RateOfIntrest)/100;
    document.getElementById("si").value = Simple_Intrest;
}

function profitPercentage(){
    let Selling_Price = parseInt(document.getElementById("sp").value);
    let Cost_Price = parseInt(document.getElementById("cp").value);
    let Profit = Selling_Price - Cost_Price;
    let Profit_percentage = (Profit * 100)/Cost_Price;
    document.getElementById("res").value = Profit_percentage + "%";
}

function grossSalary() {

    let basicSalary = parseInt(document.getElementById("basic_Salary").value);

    let intensive_per = parseInt(document.getElementById("intensive").value);
    let intensive = basicSalary * (intensive_per / 100);

    let bonus_per = parseInt(document.getElementById("bonus").value);
    let bonus = basicSalary * (bonus_per / 100);

    let Gross_Salary = basicSalary + intensive + bonus;

    document.getElementById("gross_Salary").value = Gross_Salary;
}

function g_Salary() {
    let basicSalary = parseInt(document.getElementById("bs").value);

    let intensive_per = parseInt(document.getElementById("i").value);
    let intensive = basicSalary * (intensive_per / 100);

    let bonus_per = parseInt(document.getElementById("b").value);
    let bonus = basicSalary * (bonus_per / 100);

    let Gross_Salary = basicSalary + intensive + bonus;

    document.getElementById("S").value = Gross_Salary;
}


function inhand_Salary() {
    let basicSalary = parseInt(document.getElementById("bs").value);

    let intensive_per = parseInt(document.getElementById("i").value);
    let intensive = basicSalary * (intensive_per / 100);

    let bonus_per = parseInt(document.getElementById("b").value);
    let bonus = basicSalary * (bonus_per / 100);

    let Gross_Salary = basicSalary + intensive + bonus;

    let pf_per = parseInt(document.getElementById("pf").value);
    let pf = basicSalary * (pf_per / 100);

    let hi_per = parseInt(document.getElementById("hi").value);
    let hi = basicSalary * (hi_per / 100);

    let Inhand_Salary = Gross_Salary - pf - hi;

    document.getElementById("S").value = Inhand_Salary;
}

function lastDigit(){
    let n = parseInt(document.getElementById("last_digit").value);
    
    
    let last_digit = n % 10;
    
    document.getElementById("lastDigitResult").value = last_digit;
}

function findLastDigit() {
    let number = parseInt(document.getElementById("givenNumber").value);

    let lastDigit = parseInt(number / 10);

    document.getElementById("lastDigitOutput").value = lastDigit;
}

function swapNumbers() {
    let num1 = parseInt(document.getElementById("firstNumber").value);
    let num2 = parseInt(document.getElementById("secondNumber").value);

    let temp = num1;
    num1 = num2;
    num2 = temp;

    document.getElementById("firstOutput").value = num1;
    document.getElementById("secondOutput").value = num2;
}

