var name = "Alice";  //Function-scoped, housted - aboid in modern JS
let age = 25;        // Block-scoped, can be reassigned
const PI = 3.14159;  //Block-scoped, cannot be reassigned

let score = 0;
score =10;           // OK - reassignment allowed for let

const Max = 100;
// MAX = 200;        //type error: assisnment to constant variable

let homeAdress = "Not my home adress"; // declared variable called homeAdress and assigned a string value to it of Not my own home adress

let userAge = 19;    // declared variable userAge assigned it to 19 will change eventually to 20 when the user has a birthday
console.log(userAge);

let userInfo = [19, "Alice", "not my home adress"]; //declared variable userInfo and assigned it to an array with 3 values, the first value is a number, the second value is a string, and the third value is also a string

console.log(typeof userInfo); 
console.log(userInfo);

// Arithmetic
5 + 3 //8    
10 - 4 //6 
4*3 // 12
9 / 2 //4.5
9 % 2  // 1  
2 ** 3 // 8

// Comparison - always prefer === over ==
5 === 5 // true
5 !== 3 // true (strict: checks type + value)
5 == "5" // true loose
5 === "5" // false scrict
10 > 3 // true
4 <= 4 // true

/* == vs ===
use === (strict equality) - checks both value and type. == performs type coercion causing subtle bugs. 
Example. 0 == false is true, but 0 === false is false because 0 is a number and false is a boolean so it comes up with false.) */

if (name === "Alice") {
    userIsLoggedIn = true;
} else {
    userIsLoggedIn = false;
}

if (userIsLoggedIn === true) {
    console.log("Hello Alice!");
}
