console.log("Number & Global Methods");

// =====================================================================================

// Topic :

/*
    # What is Number Methods?
    # Number Methods
        => toString()
        => toExponential()
        => toFixed()
        => toPrecision()
        => valueOf()
    # Converting Variables to Numbers
    # Global JavaScript Methods
        => Number()
        => Number() : Used on Dates
        => parseInt()
        => parseFloat()
    # Number Properties
        => MIN_VALUE and MAX_VALUE
        => POSITIVE_INFINITY
        => NEGATIVE_INFINITY
        => NaN - Not a Number
    # Number Properties Cannot be Used on Variables
*/
// =====================================================================================

// What is Number Methods?

    // Number methods help you work with numbers.

// =====================================================================================

// Number Methods : 

    // Number Methods and Properties
        // => Primitive values (like 3.14 or 2014), cannot have properties and methods (because they are not objects).

        // => But with JavaScript, methods and properties are also available to primitive values, because JavaScript treats primitive values as objects when executing methods and properties.

        // # Number Methods
        // => toString()
        // => toExponential()
        // => toFixed()
        // => toPrecision()
        // => valueOf()

//......................................................................................

// toString() : 

    // The toString() method returns a number as a string.
    // All number methods can be used on any type of numbers (literals, variables, or expressions)

    // Example : 

        var x = 123;
        x.toString();
        console.log(typeof((123).toString()))       // string
        console.log((100 + 23).toString())          // 123

//......................................................................................

// toExponential() : 

    // toExponential() returns a string, with a number rounded and written using exponential notation.
    // A parameter defines the number of characters behind the decimal point.

    // Example : 

        var x = 9.656 ;
        console.log(typeof x.toExponential(2)); // string
        console.log(x.toExponential(2));        // 9.66e+0
        console.log(x.toExponential(4));        // 9.6560e+0
        console.log(x.toExponential(6));        // 9.656000e+0

//......................................................................................

// toFixed() : 

    // toFixed() returns a string, with the number written with a specified number of decimals.
 
    // Example : 

        var x = 9.656 ;
        console.log(typeof x.toFixed(2)); // string
        console.log(x.toFixed(0));        // 10
        console.log(x.toFixed(2));        // 9.66
        console.log(x.toFixed(4));        // 9.6560
        console.log(x.toFixed(6));        // 9.656000

//......................................................................................

// toPrecision() : 

    // toPrecision() returns a string, with a number written with a specified length.
 
    // Example : 

        var x = 9.656 ;
        console.log(typeof x.toPrecision());  // string
        console.log(x.toPrecision());         // 9.656
        console.log(x.toPrecision(2));        // 9.7
        console.log(x.toPrecision(4));        // 9.656
        console.log(x.toPrecision(6));        // 9.65600

//......................................................................................

// valueOf() : 

    // valueOf() returns a number as a number.
 
    // Example : 

        var x = 123;
        x.valueOf();
        console.log(typeof (123).valueOf());        // number
        console.log((100 + 23).valueOf());          // 123

//......................................................................................

    // In JavaScript, a number can be a primitive value (typeof = number) or an object (typeof = object).
    // The valueOf() method is used internally in JavaScript to convert Number objects to primitive values.
    // There is no reason to use it in your code.
    // All JavaScript data types have a valueOf() and a toString() method.

// =====================================================================================

// Converting Variables to Numbers : 

    // There are 3 JavaScript methods that can be used to convert variables to numbers:

    // The Number() method
    // The parseInt() method
    // The parseFloat() method
    // These methods are not number methods, but global JavaScript methods.

// =====================================================================================

// Global JavaScript Methods : 

    // JavaScript global methods can be used on all JavaScript data types.
    // These are the most relevant methods, when working with numbers:

    // Method	        Description

    // Number()	        Returns a number, converted from its argument.
    // parseFloat()	    Parses its argument and returns a floating point number
    // parseInt()	    Parses its argument and returns an integer

//......................................................................................

// Number() : 

    // Number() can be used to convert JavaScript variables to numbers

    // Example : 

        console.log(Number(true))      // 1
        console.log(Number(false))     // 0
        console.log(Number("10"))      // 10
        console.log(Number("  10"))    // 10
        console.log(Number("10  "))    // 10
        console.log(Number(" 10  "))   // 10
        console.log(Number("10.33"))   // 10.33
        console.log(Number("10,33"))   // NaN
        console.log(Number("10 33"))   // NaN
        console.log(Number("John"))    // NaN

    // If the number cannot be converted, NaN (Not a Number) is returned.

//......................................................................................

// Number() Method Used on Dates :

    // Number() can also convert a date to a number.

    // Example : 1

        console.log(Number(new Date("1970-01-01"))) // 0

        // The Number() method returns the number of milliseconds since 1.1.1970.

    // Example : 2

        // The number of milliseconds between 1970-01-02 and 1970-01-01 is 86400000

        console.log(Number(new Date("1970-01-02"))); // 86400000

    // Example : 3

        console.log(Number(new Date("2017-09-30"))); // 1506729600000

//......................................................................................

// parseInt() : 

    // parseInt() parses a string and returns a whole number. 
    // Spaces are allowed. 
    // Only the first number is returned.

    // Example : 

        console.log(typeof parseInt("-10"));     // number
        console.log(parseInt("-10"));            // -10
        console.log(parseInt("10"));             // 10
        console.log(parseInt("10.33"));          // 10
        console.log(parseInt("10 20 30"));       // 10
        console.log(parseInt("10 years"));       // 10
        console.log(parseInt("years 10"));       // NaN  

//......................................................................................

// parseFloat()  : 

    // parseFloat() parses a string and returns a number. 
    // Spaces are allowed. 
    // Only the first number is returned

    // Example : 

        console.log(typeof parseFloat("-10"));     // number
        console.log(parseFloat("-10"));            // -10
        console.log(parseFloat("10"));             // 10
        console.log(parseFloat("10.33"));          // 10.33
        console.log(parseFloat("10 20 30"));       // 10
        console.log(parseFloat("10 years"));       // 10
        console.log(parseFloat("years 10"));       // NaN  

    // If the number cannot be converted, NaN (Not a Number) is returned.

// =====================================================================================

// Number Properties : 

    // Property	            Description

    // MAX_VALUE	        Returns the largest number possible in JavaScript
    // MIN_VALUE	        Returns the smallest number possible in JavaScript
    // POSITIVE_INFINITY	Represents infinity (returned on overflow)
    // NEGATIVE_INFINITY	Represents negative infinity (returned on overflow)
    // NaN	                Represents a "Not-a-Number" value

//......................................................................................

// MIN_VALUE and MAX_VALUE : 

    // MAX_VALUE returns the largest possible number in JavaScript.

    // Example : 

        var x = Number.MAX_VALUE;

        console.log(x)  // 1.7976931348623157e+308

    // MIN_VALUE returns the lowest possible number in JavaScript.

    // Example : 

        var x = Number.MIN_VALUE;

        console.log(x)  // 5e-324

//......................................................................................

// POSITIVE_INFINITY :

    // Example : 

        var x = Number.POSITIVE_INFINITY;

        console.log(x)  // Infinity

    // POSITIVE_INFINITY is returned on overflow.

    // Example :

        var x = 1 / 0;

        console.log(x)  // Infinity

//......................................................................................

// NEGATIVE_INFINITY :

    // Example : 

            var x = Number.NEGATIVE_INFINITY;

            console.log(x)  // -Infinity

        // NEGATIVE_INFINITY is returned on overflow.

        // Example :

            var x = -1 / 0;

            console.log(x)  // -Infinity

//......................................................................................

// NaN - Not a Number :

    // Example : 

            var x = Number.NaN;

            console.log(x)  // NaN

        // NaN is a JavaScript reserved word indicating that a number is not a legal number.
        // Trying to do arithmetic with a non-numeric string will result in NaN (Not a Number).

        // Example :

            var x = 100 / "Apple";

            console.log(x)  // NaN

// =====================================================================================

// Number Properties Cannot be Used on Variables : 

    // Number properties belongs to the JavaScript's number object wrapper called Number.
    // These properties can only be accessed as Number.MAX_VALUE.
    // Using myNumber.MAX_VALUE, where myNumber is a variable, expression, or value, will return undefined.

    // Example :

        var x = 6;
        console.log(x.MAX_VALUE) // undefined

// =====================================================================================