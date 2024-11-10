// Operators are special symbols that help in executing some operations
// they can be : arithmetic , unary, binary

// arithmetic operator
console.log("Arithmetic operators");
   let a = 10;
   let b = 5;
   console.log(a+b)
   console.log(a-b);
   console.log(a*b);
   console.log(a/b);
   console.log(a%b);
   console.log(a**b);

//    unary operators
//  ++ - two types : pre increment ++a; and post increment ie a++
console.log("Unary operators");
console.log(++a); //increment then print
console.log(a++); //print then increment

// similarly for predecrement and post decrement 
console.log(--b);
console.log(b--);

// Assignment operator
let x=5; //= here is assignment operator
x=x+5;
x+=5; //shorthand notation for above
let y=6;
y=y-5;
y-=6;

// Comparision Operators : Loose Equality and Strict Equality , <=,>=,!=,==!=,<,> - checks and returns boolean output
// Both data type and value are checked when checking using '===' ie strict equality
// Only value is checked when checking using the loose equality operator using "=="
console.log("Comparision operators");
console.log(10=="10"); //loose equality
console.log(10==="10"); //strict equality


// Ternary Operators - syntax: consition ? if true : if false
// Ternary operator is a concise way to write conditional statements, it is widely used in JavaScript
let myAge=19;
(myAge>=18)?console.log("Eligible to vote"):console.log("Not eligible to vote");

// Logical operators are used to connect two or more expressions/connections 
// eg:(AND &&) (OR ||) ( NOT !)   