// // Global scope

// let myName = "Hero"; //Global variables
// console.log("Outside ", myName);

// function gbscope(){
//     console.log("Inside Function : ", myName);
    
// }
// gbscope();
// if(true){
//     console.log("Inside Block name =", myName);
    
// }

// // local scope or functional scope
// function localscope(){
//     let myName = "Hero";    //localvariable
//     console.log("Inside Name = ", myName);
//     if(true){
//         console.log("Inside Block = ", myName);
        
//     }
    
// }
// localscope();
// console.log("Outside Name =", myName); //❌❌❌


// function displayName(msg) {
//     console.log("Message Inside ",msg);
    
// }
// displayName("Study Well");

// console.log("Message Outside: ", msg);

// // Block scope

    
// function Blockscope(){
//     if(true){
//         let myName = "Zero"; //Block Level variable
//         console.log("Inside Block: ",myName);
    
//     }

//     console.log("Outside Block: ", myName); //❌❌
// }

// function blockscope(){
//     for(let i = 1; i <= 5; i++){

//     }
//     console.log(i);
    
// }

// blockscope();

// let fname = "Inno";
// function scopeEx() {
//     // let fname = "Zero";
//     if(true){
//     // let fname = "Hero";
//     console.log("Inside Name = ",fname);
//     }
// }
// scopeEx();

