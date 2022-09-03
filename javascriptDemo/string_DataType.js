// String literal assigned to a variable

var str1 = "Hello World";   

// "Hello World" -> String literal
// String value can be assigned to a variable using equal to (=) operator.

// String as array.
// A string can also be treated like zero index based character array.

var str = "Hello World";

str[0]; // H
str[1]; // e
str[2]; // l
str[3]; // l
str[4]; // o

str.length; //  11

// Since, string is character index, it can be accessed using for loop and for-of loop.

var str = "Hello World";

for (var i = 0; i < str.length; i++) console.log(str[i]);

for (var ch of str) console.log(ch);

// Concatenation

var str = "Hello " + "World " + "from " + " Darshak ";

// Include quotation marks inside string

var str1 = "This is 'simple' string";

var str2 = 'This is "simple" string';

// If you want to include same quotes in a string value as surrounding quotes then use backward slash (\) before quotation mark inside string value.

var str1 = "This is \" simple\" string";

var str2 = 'This is \'simple\' string';

// String object
// Above, we assigned a string literal to a variable. JavaScript allows you to create a String object using the new keyword, as shown below.

var str1 = new String();
str1 = "Hello World";

// or

var str2 = new String("Hello World");

// In the above example, JavaScript returns String object instead of primitive string type. It is recommended to use primitive string instead of String object.

// Caution
// Be careful while working with String object because comparison of string objects using == operator compares String objects and not the values. Consider the following example.

var str1 = new String('Hello World');
var str2 = new String('Hello World');
var str3 = 'Hello World';
var str4 = str1;

str1 == str2; // false - because str1 and str2 are two different objects
str1 == str3; // true
str1 === str4; // true

typeof(str1); // object
typeof(str3); //string

// =====================================================================================

// String Properties :

// length : Returns the length of the string.
    var str = "Hello World";
    console.log(str.length); //  11

// =====================================================================================

// String Methods : 

let text = "Hello world!";

//......................................................................................

// charAt(position)	 :

// Returns the character at the specified position (in Number).

// Example:

    console.log(text.charAt(0)); // H

//......................................................................................   

// charCodeAt(position) : 

// Returns a number indicating the Unicode value of the character at the given position (in Number).
    
// Example:

    console.log(text.charCodeAt(0)); // 72

//......................................................................................

// codePointAt(position) : 

// returns the Unicode value at an index (position) in a string.

// Example:

    console.log(text.codePointAt(0)); // 72

//......................................................................................

// concat([string,,]) : 

// Joins specified string literal values (specify multiple strings separated by comma) and returns a new string.

// Example:

    let text1 = "sea";
    let text2 = "food";
    let result = text1.concat(text2);
    console.log(result); // seafood

//......................................................................................

// constructor : 

// returns the function that created the String prototype.

// Example:

    console.log(text.constructor); // ƒ String() { [native code] }

//......................................................................................

// endsWith() : 

// returns true if a string ends with a specified string. method is case sensitive.

// Example:

    console.log(text.endsWith("world")); // false

//......................................................................................

// fromCharCode() :  

// method converts Unicode values to characters.

// Example:

    let text3 = String.fromCharCode(65);
    console.log(text3); // A

//......................................................................................

// includes() : 

// returns true if a string contains a specified string.

// Example:

    console.log(text.includes("world")); // false
    console.log(text.includes("world", 12)); // false

//......................................................................................

// indexOf(SearchString, Position) : 

// Returns the index of first occurrence of specified String starting from specified number index. Returns -1 if not found.

// Example:

    console.log(text.indexOf("Hello")); // 0
    console.log(text.indexOf("e")); // 1
    console.log(text.indexOf("e", 5)); // -1

//......................................................................................

// lastIndexOf(SearchString, Position) : 

// Returns the last occurrence index of specified SearchString, starting from specified position. Returns -1 if not found.

// Example:

    console.log(text.lastIndexOf("world")); // 6
    console.log(text.lastIndexOf("Hello")); // -1
    console.log(text.lastIndexOf("e", 5)); // 1

//......................................................................................

// localeCompare(string,position) : 

// Compares two strings in the current locale.

// Example:

    console.log(text1.localeCompare(text2)); // 1

//......................................................................................

// match(RegExp) : 

// Search a string for a match using specified regular expression. Returns a matching array.

// Example:

    console.log(text.match("ain")); // null
    console.log(text.match("world")); // ['world', index: 6, input: 'Hello world!', groups: undefined]

//......................................................................................

// repeat() : 

// returns a string with a number of copies of a string.

// Example:

    console.log(text.repeat(2)); // Hello world!Hello world!

//......................................................................................

// replace(searchValue, replaceValue) :	

// Search specified string value and replace with specified replace Value string and return new string. Regular expression can also be used as searchValue.

// Example:

    console.log(text.replace("world", "Darshak")); // Hello Darshak!

//......................................................................................

// search(RegExp) : 

// Search for a match based on specified regular expression.

// Example:

    console.log(text.search("world")); // 6

//......................................................................................

// slice(startNumber, endNumber) :

// Extracts a section of a string based on specified starting and ending index and returns a new string.
 
// Example:

    console.log(text.slice(0, 5)); // Hello

//......................................................................................

// split(separatorString, limitNumber) :

// Splits a String into an array of strings by separating the string into substrings based on specified separator. Regular expression can also be used as separator.

// Example:

    console.log(text.split(" ")); // ['Hello', 'world!']
    console.log(text.split(" ", 1)); //  ['Hello']

//......................................................................................

// startsWith() :  

// returns true if a string starts with a specified string.

// Example:

    console.log(text.startsWith("Hello")); // true
    console.log(text.startsWith("world", 7)); // false

//......................................................................................

// substr(start, length) : 

// Returns the characters in a string from specified starting position through the specified number of characters (length).

// Example:

    console.log(text.substr(1, 4)); // ello
    console.log(text.substr(2)); // llo world!

//......................................................................................

// substring(start, end) : 

// Returns the characters in a string between start and end indexes.

// Example:

    console.log(text.substring(1, 4)); // ello
    console.log(text.substring(2)); // llo world!

//......................................................................................

// toLocaleLowerCase()	: 

// Converts a string to lower case according to current locale.

// Example:

    console.log(text.toLocaleLowerCase()); // hello world!

//......................................................................................

// toLocaleUpperCase() : 

// Converts a sting to upper case according to current locale.

// Example:

    console.log(text.toLocaleUpperCase()); // HELLO WORLD!

//......................................................................................

// toLowerCase() : 

// Returns lower case string value.

// Example:

    console.log(text.toLowerCase()); // // hello world!

//......................................................................................

// toString() : 

// Returns the value of String object.

// Example:

    console.log(text.toString()); // Hello world!

//......................................................................................

// toUpperCase() : 

// Returns upper case string value.

// Example:

    console.log(text.toUpperCase()); // HELLO WORLD!

//......................................................................................

// valueOf() : 

// Returns the primitive value of the specified string object.

// Example:

    console.log(text.valueOf()); // Hello world!

//......................................................................................

// trim() : 

// removes whitespace from both sides of a string.

// Example:

    let text123 = "       Hello World!        ";
    console.log(text123.trim()); // Hello World!

//......................................................................................






