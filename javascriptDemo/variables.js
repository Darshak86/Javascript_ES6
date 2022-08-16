console.log("Variables demo");

// Variables in js
// var, let, const

var user = "Darshak";
var channel;
var marks = 3454;
marks = 0;
channel = "Hello world";
console.log(user, channel, marks);

// Rules for creating JavaScript Variables
/*
  1. Variable names must begin with a letter, an underscore (_) or a dollar sign ($). 
  2. Variable names can only contain letters, numbers, underscores, or dollar signs.
  3. Variable names are case-sensitive. 
  
  The variable’s names are case sensitive that means uppercase letters like ‘A’  and lowercase letters like ‘a’ are treated differently.  

  var firstName ;   // Valid
  var _lastName ;   // Valid
  var $age ;        // Valid
  var abc ;         // Valid
  var ABC ;         // Valid

// Numbers are not allowed as a first character.
     var 100age ;        // Not Valid   

// Variable name can not contain a Mathematical or Logical Operator in the Name  
     var === ;           // Not Valid   

// Variable names can not contain spaces.
     var first name ;    // Not Valid 
     
// "-" is not allowed in the variable names. it is reserved for subtraction.    
     var first-name ;    // Not Valid

// Reserved keyword can not be used in the variable names.
     var for ;           // Not Valid

// Variables can not be named starting from other symbols.     
     var #name ;         // Not Valid

*/

var city = "Delhi";
console.log(city);

const ownersName = "Ram";

// ownersName = 'Shyam'; // Cannot do this (error)

console.log(ownersName);
const fruit = "Orange";

{
  let city = "Rampur";
  city = "Kolkata";
  console.log(city);
}
console.log(city);

const arr1 = [12, 23, 12, 53, 3];
// arr1.push(45);
console.log(arr1);

// var age = 25; // Number
// var name = "John"; // String
// var developer = true;// Boolean
// var location = null; // Null
// var task; // undefined

// const age = 20; 
// const job = 'developer';
// const name; // SyntaxError: missing initializer
// const num = 10;
// num = 20; //Compiler Error: Cannot assign to 'num' because it is a constant or read-only property

let age = 25; // Number
let name = "John"; // String
let developer = true;// Boolean
// let location = null; // Null
let task; // undefined

console.log(age); // SyntaxError: identifier "age" has already been declared.

/* Most common programming case types:

1. camelCase   // most used
2. kebab-case
3. snake_case 
4. PascalCase 

*/

// most of use variables : let and const 

// 3 Types of error 
// SyntaxError, TypeError and ReferenceError

// ReferenceError
  // console.log(a) // Uncaught ReferenceError: Cannot access 'a' before initialization
  // let a = 10

// TypeError
  // const b = 20
  // b = 30         // Uncaught TypeError: Assignment to constant variable.

// SyntaxError
  // const c        // Uncaught SyntaxError: Missing initializer in const declaration
  // c = 100


// var            : Functional Scope
// let and const  : Block Scope

function data()
{
  var a = 10;
  console.log(a); // 10

  {
    let b = 30;
    const c = 40;
    console.log(b); // 30
    console.log(c); // 40
  }

// Block Scope
  // console.log(b); // Uncaught ReferenceError: b is not defined
  // console.log(c); // Uncaught ReferenceError: c is not defined
}

// Functional Scope
  // console.log(a) // Uncaught ReferenceError: a is not defined

data();

// Hoisting
  // console.log(a) // undefined
  // var a = 100

// let & const : 🔥Temporal Dead Zone  

