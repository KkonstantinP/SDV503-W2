var name = "Alice";  //Function-scoped, housted - aboid in modern JS
let age = 25;        // Block-scoped, can be reassigned
const PI = 3.14159;  //Block-scoped, cannot be reassigned

let score = 0;
score =10;           // OK- reassignment allowed for let

const Max = 100;
// MAX = 200;        //type error: assisnment to constant variable

let homeAdress = "Not my home adress"; // declared variable called homeAdress and assigned a string value to it of Not my own home adress

let userAge = 19;    // declared variable userAge assigned it to 19 will change eventually to 20 when the user has a birthday
console.log(userAge);

let userInfo = [19, "Alice", "not my home adress"]; //declared variable userInfo and assigned it to an array with 3 values, the first value is a number, the second value is a string, and the third value is also a string

console.log(typeof userInfo); 