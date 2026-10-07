// By using (.) notation
// // Creation  (CRUD)

// let person = {
//     myName : "Eekshitha",
//     myAge : 21,

// };

// // Retrive or Accessing data from Object

// console.log(person);

// // Syntax by using (.) notation:
// // ObjectName.propertyName
// console.log("Person Name ", person.myName);

// // update
// console.log("Before update: ", person.myAge);

// //Syntax to update 
// // Object name.property name = changed value;
// person.myAge = person.myAge + 1;
// console.log("After update: ", person.myAge);

// // Add new property to the object

// console.log("Before updating: ");
// console.log(person);

// // Syntax: object name.new property name = value

// person.gender = "Female";
// console.log("After updating: ");
// console.log(person);

// person.location = "Hyderabad";
// console.log(person);

// // deletion

// delete person.location;
// console.log(person);


// // By using ([]) notation
// let myprice = "price"; //variable
// let laptop = {
//     "my name": "Lenovo",
//     "stor@ge" : "256gb",
//     myprice: 55000,
// };

// console.log(laptop["my name"]); //spaces
// console.log(laptop["stor@ge"]); //special charracters
// console.log(laptop["myprice"]); //dynamic variable

// let price = "myPrice"; //storing property name in a variable

// Nested objects

// let person = {
//     name: "Eekshitha",
//     age: 21,
//     address: {
//         state: "Telangana",
//         city: "Hyderabad",
//     }
// };
// console.log(person.address.state);
// console.log(person.address.city);

// let fullstackexperts = {
//     studentDetails: {
//         studentname: "Eekshitha",
//         batch: 60,
//         passout: 2026,
//     },
//     address: {
//         state: "Hyderabad",
//         city: "Telangana",
//         branch: "Nizampet",
//     },
//     course: {
//         courseName: "Full stack",
//         technologies: {
//             frontend: "HTML, CSS",
//             backend: "Javascript, Python",
//             database: "mySQL",
//         },
//         fees: "95000"
//     },
// }

// console.log(fullstackexperts);


// // CRUD operations using (.) notation
// // create
// fullstackexperts.course.duration = "6-8 months";
// console.log("After Creating: ");
// console.log(fullstackexperts);

// // read
// console.log("Student Name: ", fullstackexperts.studentDetails.studentname);
// console.log("Technologies: ", fullstackexperts.course.technologies);

// // update
// fullstackexperts.studentname = "Rocky"
// console.log(fullstackexperts.studentDetails.studentname);

// // delete
// delete fullstackexperts.course.fees;
// console.log(fullstackexperts.course);


// // CRUD operations using ([]) notation



// // Creating object by using object constructor

// let person = new Object()


// // access- retrieving
// console.log("Before");
// console.log(person);


// // add the data
// person.personName = "Hero";
// person["age"] = 21;
// console.log("After adding");
// console.log(person);


// // update the data

// person.personName = "Rockey";
// person["age"] = 90;
// console.log("After updating");
// console.log(person);

// // delete
// delete person.age
// console.log("After deleting");
// console.log(person);


// Dynamic syntax property

// let key = "name";
// let person = {
//     age: 21,
//     [key]: "hero",
// }
// console.log(person);

// // Normal way
// let fname = "Hero";
// let age = 21;
// let person = {
//     fname: fname,
//     age: age,
// };
// console.log(person);

// // Shoter proprty syntax
// let fname = "Hero";
// let age = 21;
// let person = {
//     fname,
//     age,
// };
// console.log(person);
// person.gender = "Female";
// console.log(person);

// Objects inside functions


// // named function without input and without return type

// function displayObject(){
//     let car = {
//     model: "BMW 440i",
//     price: 20000000,
//     color: "Matte Black"
//     };
//     console.log("Model of the car = ",car.model);
//     console.log("Price of the car = ",car["price"]);
//     console.log("color of the car = ",car.color);

// }
// displayObject();

// named function without input and with return type

// function displayObject(){
//     let car = {
//     model: "BMW 440i",
//     price: 20000000,
//     color: "Matte Black"
//     };
//     return car;

// }

// let mycar = displayObject();
// console.log(mycar.model);

// function displayObject(){
//     return {
//     model: "BMW 440i",
//     price: 20000000,
//     color: "Matte Black"
//     };

// }
// let mycar = displayObject();
// console.log(mycar.model);

// named function with input and with return type(object)

// function displayObject(model,price,color){
//     return{
//         model,
//         price,
//         color,
//     }
// }
// console.log(displayObject("BMW", "2cr", "black"));

// // named function with input and without return type(object)

// function displayObject(model,price,color){
//     let car = {
//     model: model,
//     price: price,
//     color: color,
//     };
//     console.log(car);
    
// }
// displayObject("BMW", "2cr", "black");


// Function inside object

// let person = {
//     fname: "Hero",
//     brave: function(){
//         console.log("I'm brave");
        
//     },
// };
// // console.log(person.brave());
// person.brave();


// let car = {
//     model: function modelName(){
//         console.log("Defender");
        
//     },
//     color: function(){
//         console.log("Black");
        
//     },

//     location: function(){
//         return "Hyd";
//     },

//     year: () => {
//         console.log("2026");
//     }


// };
// // car.model();
// car["model"]();
// car.color();
// let mycar = car.location();
// console.log(mycar);
// // console.log(car.location);

// car.year();







// 3 methods with 4 types













// // "This keyword"

// let person = {
//     fname: "Hero",
//     age: 21,
//     displayDetails: function(){
//         console.log("My Name ", this.fname); //person.name
//         console.log("My Age ", this.age);
//     },
//     displayDet: () => {
//         console.log("My Name ", this.fname); //window name
//         console.log("My Age ", person.age);
//     },
// };

// person.displayDetails();
// person.displayDet();


// function abc(){
//     console.log(this);
    
// }
// abc() //global object