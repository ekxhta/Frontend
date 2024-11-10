// var is a traditional way for variable declaration that is not commonly used as they are function scoped or globally scoped, but not block scoper
function func()
{
    var x=20;
    console.log(x);
}

console.log(x) //ReferenceError: x is not defined

//it allows redeclaration

var x= "codesamadhan"
console.log(x);;

// the better and most used way of declaring variables is using the "let" keyword. It is block scoped.

let y= 10;
let y= "codeSamadhan" //error
//however reassigning of a value is allowed
y= "codeSamadhan"

// It also does not allow re declartation of a variable
{
    let z= 10;
}
let z="codeSamadhan";


// the const keyword helps in declaring variables whose values will remain constant throughout and cannot be reassigned
const pi=3.14;
pi=22/7; //error


// Javascript supports various primitive and non primitive data types.
// Some of these are numbers,boolean,text etc
// you can find out the datatype of any variable using the typeof function

console.log(typeof(x));
console.log(typeof(y));
console.log(typeof(z));
