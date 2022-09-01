/*

false value list : 

false
NaN
null
undefined
0
""

true value list :

true
[]
{}
any value

*/

// False value
console.log(false ? true : false);      // false
console.log(NaN ? true : false);        // false
console.log(null ? true : false);       // false
console.log(undefined ? true : false);  // false
console.log(0 ? true : false);          // false
console.log("" ? true : false);         // false

// true value
console.log(true ? true : false);       // true
console.log({} ? true : false);         // true
console.log([] ? true : false);         // true

if ({}) {
  console.log(`value is true`);
} else {
  console.log(`value is false`);
}

//output : value is false
