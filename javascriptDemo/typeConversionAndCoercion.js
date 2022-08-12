let res;

// string to number =============================================================================

res = Number("100");
console.log(res); // 100

// boolean to number ============================================================================

res = Number(false);
console.log(res); // 0
res = Number(" ");
console.log(res); // 0
res = Number("hello");
console.log(res); // NaN
res = Number(undefined);
console.log(res); // NaN

res= Boolean(1); // true
res= Boolean(0); // false
res= Boolean("hello"); // true
res= Boolean(""); // false

// Conversion To String =========================================================================

res = '3' + 4; 
console.log(res) // "34"
res = '9' + true; 
console.log(res); // "9true"
res= '0' + null; 
console.log(res); // "0null"

// Conversion To Number =========================================================================

res = '4' - '4'; 
console.log(res); // 0
res = '4' * 5;
console.log(res); // 20

// Boolean Conversion to Number =================================================================

res = '5' - true;
console.log(res); // 4
res = 10 + false;
console.log(res); // 10

res = 4 + null; // 4
res = 4 - undefined;// NaN


// Type conversion  ============================================================================

console.log('Welcome');
let myVar;
myVar = String(34);
// console.log(myVar, (typeof myVar));
let booleanVar = String(true);
// console.log(booleanVar, (typeof booleanVar));

let date = String(new Date());
// console.log(date, (typeof date));

let arr =  String([1,2,3,4,5]);
// console.log(arr.length, (typeof arr));

let i = 75;
// console.log(i.toString())

let stri = Number("3434");
stri = Number("343d4");
stri = Number(false);
stri = Number([1,2,3,4,5,6,7,8,9]);
// console.log(stri, (typeof stri));

let number = parseFloat('34.098');

console.log(number.toFixed(2), (typeof number));

// Type coercion

let mystr = Number("698");
let mynum = 34;

console.log(mystr + mynum);
