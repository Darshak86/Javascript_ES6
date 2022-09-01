let res;

// string to number =============================================================================

res = Number("100");
console.log(res); // 100

// boolean to number ============================================================================

// NaN is short for "Not-a-Number

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
// console.log(myVar, (typeof myVar)); // 34 string
let booleanVar = String(true);
// console.log(booleanVar, (typeof booleanVar)); // true string

let date = String(new Date());
// console.log(date, (typeof date)); // Thu Sep 01 2022 08:15:57 GMT+0530 (India Standard Time) string

let arr =  String([1,2,3,4,5]);
// console.log(arr.length, (typeof arr)); // 9 'string'

let i = 75;
// console.log(i.toString(), (typeof i)); // 75 number

let stri = Number("3434");
stri = Number("343d4");
stri = Number(false);
stri = Number([1,2,3,4,5,6,7,8,9]);
// console.log(stri, (typeof stri)); // NaN 'number'

let number = parseFloat('34.098');

console.log(number.toFixed(2), (typeof number)); // 34.10 number

// Type coercion

let mystr = Number("698");
let mynum = 34;

console.log(mystr + mynum); // 732

// Decimal Places ===============================================================================

// Format number to always show 2 decimal places
let num = new Number(14.120000);

// The toPrecision() method formats a number to a specified length.
console.log(num.toPrecision(2)); //outputs 14
console.log(num.toPrecision(3)); //outputs 14.1
console.log(num.toPrecision(4)); //outputs 14.12
console.log(num.toPrecision(5)); //outputs 14.120

// The toFixed() method converts a number to a string.
// The toFixed() method rounds the string to a specified number of decimals.
// Note
// If the number of decimals are higher than in the number, zeros are added.
console.log(num.toFixed(0)); //outputs 14
console.log(num.toFixed(1)); //outputs 14.1
console.log(num.toFixed(2)); //outputs 14.12
console.log(num.toFixed(4), typeof num); //outputs 14.1200 object

// A much more generic solution for rounding to N places
function roundN(num, n) {
  return parseFloat(
    Math.round(num * Math.pow(10, n)) / Math.pow(10, n)
  ).toFixed(n);
}

console.log(roundN(1, 2));       // 1.0;
console.log(roundN(1.34, 2));    // 1.34;
console.log(roundN(1.35, 2));    // 1.35;
console.log(roundN(1.344, 2));   // 1.34;
console.log(roundN(1.345, 2));   // 1.35;
console.log(roundN(1.344, 3));   // 1.344;
console.log(roundN(1.345, 3));   // 1.345;
console.log(roundN(1.3444, 3));  // 1.344;
console.log(roundN(1.3455, 3));  // 1.346;












