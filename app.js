var name = "Alice";  //Function-scoped, housted - aboid in modern JS
let age = 25;        // Block-scoped, can be reassigned
const PI = 3.14159;  //Block-scoped, cannot be reassigned

let score = 0;
score =10;           // OK- reassignment allowed for let

const Max = 100;
// MAX = 200;        //type error: assisnment to constant variable

let homeAdress = "Not my home adress" // declared variable called homeAdress and assigned a string value to it of Not my own home adress