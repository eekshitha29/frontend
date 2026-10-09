class person{
    #name;
    #salary;
    assignData(myName,mySal){
        this.#name = myName;
        this.#salary = mySal;
    }
    accessName(){
        return this.#name;
    }
    accesssal(){
        return this.#salary;
    }
}
let p = new person();
console.log(person); //object is created
console.log("Name: ",person.#name); //direct acess is disabled


p.assignData("Zero",524100);
console.log("My name is ",p.accessName());

class person{
    #name;
    #salary;
    constructor(myName,mySal){
        this.#name = myName;
        this.#salary = mySal;
    }
    getName(){
        return this.#name;
    }
    getSal(){
        return this.#salary;
    }
    setName(newName){
        this.#name = newName;
    }
    setSal(newSal){
        this.#salary = newSal;
    }
}
let p = new person("Zero",524100);
// console.log("person"); //object is created
// console.log("Name: ",person.#name); //direct acess is disabled
console.log("Before updation");
console.log("My name is ",p.getName());
console.log("Salary: ",p.getSal());
p.setName("Hero");
p.setSal(9865986);
console.log("After updation");
console.log("My name is ",p.getName());
console.log("Salary: ",p.getSal());


class student{
    #name;
    #rollno;
    #course;
    #fees;
    constructor(myName,myRollno,myCourse,myFees){
        this.#name = myName;
        this.#rollno = myRollno;
        this.#course = myCourse;
        this.#fees = myFees; 
    }
    getName(){
        return this.#name;
    }
    getRollno(){
        return this.#rollno;
    }
    getCourse(){
        return this.#course;
    }
    getFees(){
        return this.#fees;
    }
    setName(newName){
        this.#name = newName;
    }
    setRollno(newRollno){
        this.#rollno = newRollno;
    }
    setCourse(newCourse){
        this.#course = newCourse;
    }
    setFees(newFees){
        this.#fees = newFees;
    }
}

let s = new student("Hero",530,"FSD",48000);
console.log("Before updataing...");

console.log(s.getName());
console.log(s.getRollno());
console.log(s.getCourse());
console.log(s.getFees());

s.setName("Zero");
s.setRollno("501");
s.setCourse("Data Analytics");
s.setFees(28000);

console.log("After updataing...");

console.log(s.getName());
console.log(s.getRollno());
console.log(s.getCourse());
console.log(s.getFees());

class bank{
    #acctNo;
    #acctBal;
    constructor(acctNo,acctBal){
        this.#acctNo = acctNo;
        this.#acctBal = acctBal;
    }
    getacctNo(){
        return this.#acctNo;
    }
    getaccBal(){
        return this.#acctBal;
    }
    setacctNo(newAcc){
        this.#acctNo = newAcc;
    }
    setaccBal(newBal){
        this.#acctBal = newBal;
    }
    deposite(amount){
        this.#acctBal = this.#acctBal + amount;
        console.log(amount, "Deposited successfully and total balance is ",
            this.#acctBal);
    }
    withdraw(amount){
        if(this.#acctBal >= amount){
            this.#acctBal = this.#acctBal - amount;
            console.log(amount, "withdraw successfully and total balance is ",
            this.#acctBal);
        }
        else{
            console.log("Insufficient balance");
            
        }
    }
    
}
let b = new bank(5678,10);
console.log("Before updating...");
console.log("Account Number: ", b.getacctNo());
console.log("Account Balance: ", b.getaccBal());
// b.deposite(50000);
b.withdraw(20000);


// b.setacctNo(23456);
// b.setaccBal(536);

// console.log("After updating...");
// console.log("Account Number: ", b.getacctNo());
// console.log("Account Balance: ", b.getaccBal());



// 3 real world examples for encapsulation

class shoppingCart{
    #customerName;
    #items;
    #totalAmount;
    constructor(customerName){
        this.#customerName = customerName;
        this.#items = [];
        this.#totalAmount = 0;
    }
    getCustomerName(){
        return this.#customerName;
    }
    getItems(){
        return this.#items;
    }
    getTotalAmount(){
        return this.#totalAmount;
    }
    addItem(name, price, quantity){
        this.#items.push({
            name: name,
            price: price,
            quantity: quantity
            });
        this.#totalAmount += price * quantity;
    }
    
}
let sc = new shoppingCart("Anne");


sc.addItem("Laptop", 50000, 1);
sc.addItem("Mouse", 500, 2);

console.log(sc.getItems());
console.log(sc.getTotalAmount());


class electricityBill {
    #customerName;
    #units;
    #billAmount;

    constructor(customerName, units) {
        this.#customerName = customerName;
        this.#units = units;
        this.#billAmount = 0;
    }

    getCustomerName() {
        return this.#customerName;
    }

    getUnits() {
        return this.#units;
    }

    getBillAmount() {
        return this.#billAmount;
    }

    calculateBill() {
        this.#billAmount = this.#units * 5;
        console.log("Total bill amount:", this.#billAmount);
    }

    payBill(amount) {
        if (amount > 0 && amount <= this.#billAmount) {
            this.#billAmount = this.#billAmount - amount;

            console.log(
                amount,
                "paid successfully. Remaining bill:",
                this.#billAmount
            );
        } else {
            console.log("Invalid payment");
        }
    }
}

let e = new electricityBill("Rahul", 100);

console.log("Customer:", e.getCustomerName());
console.log("Units consumed:", e.getUnits());

e.calculateBill();
e.payBill(200);

console.log("Remaining bill:", e.getBillAmount());


class mobileRecharge {
    #mobileNo;
    #balance;

    constructor(mobileNo, balance) {
        this.#mobileNo = mobileNo;
        this.#balance = balance;
    }

    getMobileNo() {
        return this.#mobileNo;
    }

    getBalance() {
        return this.#balance;
    }

    setBalance(newBalance) {
        this.#balance = newBalance;
    }

    recharge(amount) {
        if (amount > 0) {
            this.#balance = this.#balance + amount;

            console.log(
                amount,
                "recharged successfully. Total balance:",
                this.#balance
            );
        } else {
            console.log("Invalid recharge amount");
        }
    }

    makeCall(amount) {
        if (amount > 0 && this.#balance >= amount) {
            this.#balance = this.#balance - amount;

            console.log(
                amount,
                "deducted successfully. Remaining balance:",
                this.#balance
            );
        } else {
            console.log("Insufficient balance or invalid amount");
        }
    }
}

let m = new mobileRecharge(9876543210, 100);

console.log("Mobile Number:", m.getMobileNo());
console.log("Initial Balance:", m.getBalance());

m.recharge(50);
m.makeCall(30);

console.log("Final Balance:", m.getBalance());
