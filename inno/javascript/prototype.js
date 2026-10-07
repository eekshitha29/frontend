var person = {
    name: "Eekshitha",
    age: 21,
};

var abc = {
    name: "abc",
    talk: () => {
        console.log("I'm talk method from abc");
        
    }
}

// Syntax: Prototype

// ObjectName .__ proto __ = Prototype(ObjectName)

person.__proto__ = abc;
// console.log(person);

// person.talk();

var xyz = {
    walk: () => {
        console.log("I'm walk method from xyz");
        
    },
};

abc.__proto__ = xyz;
// console.log(person);
abc.walk();
person.walk();