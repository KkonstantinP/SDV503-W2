/* var name = "Alice";  //Function-scoped, housted - aboid in modern JS
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

5 === 5           // true
5 !== 3           // true (strict: checks type + value)
5 == "5"          // true loose
5 === "5"         // false scrict
10 > 3            // true
4 <= 4            // true

/*                                            == vs ===
use === (strict equality) - checks both value and type. == performs type coercion causing subtle bugs. 
Example. 0 == false is true, but 0 === false is false because 0 is a number and false is a boolean so it comes up with false.) 

if (name === "Alice") {             
    userIsLoggedIn = true;         //if name is equal to Alice is asignes the value true to the variable userIsLoggedIn
} else {                         
    userIsLoggedIn = false;        // if the condition is false, it assigns the value false to the variable userIsLoggedIn
}

if (userIsLoggedIn === true) {     
    console.log("Hello " + name + "!");   // if the condition is true it will print Hello Alice! in the console
}
*/
const msg = "Hello, Javascript!"; 

msg.length;                // 18
msg.toUpperCase();         // "HELLO, JAVASCRIPT!"
msg.toLowerCase();         // "hello, javascript!"
msg.includes("Java");      // true
msg.startsWith("He");      // true
msg.indexOf("Java");       // 7
msg.slice(7, 17);          // "JavaScript"
msg.replace("Hello", "Hi") // "Hi, JavaScript!"
msg.split(",");            // ["Hello", " JavaScript!"]
" hi ".trim();             // "hi"

console.log(msg.toUpperCase());
 
console.log(msg.replace("Hello", "Hi"));

const name = "Konstantin";
const age = 25;

// Old way - concatenation (error-prone)
const msg1 = "Hello, " + name + "! You are " + age + " years old.";

// New way - template literal (clean and readable)
const msg2 = `Hello, ${name}! You are ${age} years old.`;

console.log(msg1);
console.log(msg2);

// Multi-line strings 
const html = `
<div>
    <h1>Welcome, ${name}!</h1>
    <p>Your age is ${age}.</p>
</div>
`;
console.log(html);

//Any expression works inside ${}
const total = `Price: ${(12.99 * 3).toFixed(2)}`; // "Price: $38.97"
console.log(total); 

console.log(`The length of the msg is ${msg.length}`);

console.log(msg.length) 

// if / else if / else
    const score =75;
if (score >= 90) {
    console.log("A");
} else if (score >= 80) {
    console.log("B");
} else if (score >= 70) {
    console.log("C");
} else {
    console.log("below C");
}

//switch great for exact matches

const day = "Monday";
switch (day) {
    case "Monday":
    case "Tuesday":
        console.log("Start of the week");
        break;
    case "Friday":
        console.log("TGIF!");
        break
    default:
        console.log("Midweek");
}
