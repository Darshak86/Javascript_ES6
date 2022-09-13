console.log("Math Object");

// =====================================================================================

// Topic : 

/*
    # What is Math Object?
    # Math Properties (Constants)
    # Math Methods (Number to Integer)
        => Math.ceil()
        => Math.floor()
        => Math.trunc()
        => Math.sign()
        => Math.pow()
        => Math.sqrt()
        => Math.abs()
        => Math.sin()
        => Math.cos()
        => Math.round()
        => Math.min() 
        => Math.max()
        => Math.random()
        => Math.log()
        => Math.log2()
        => Math.log10()
    # Math Methods List
*/

// =====================================================================================

// What is Math Object?

    // The JavaScript Math object allows you to perform mathematical tasks on numbers.

    // The Math Object : 
        // Unlike other objects, the Math object has no constructor.
        // The Math object is static.
        // All methods and properties can be used without creating a Math object first.

// =====================================================================================

// Math Properties (Constants) : 

    // The syntax for any Math property is : Math.property.
    // JavaScript provides 8 mathematical constants that can be accessed as Math properties.

//......................................................................................

    // Example : 

            console.log(Math.E)         // returns Euler's number               : 2.718281828459045
            console.log(Math.PI)        // returns PI                           : 3.141592653589793
            console.log(Math.SQRT2)     // returns the square root of 2         : 1.4142135623730951
            console.log(Math.SQRT1_2)   // returns the square root of 1/2       : 0.7071067811865476
            console.log(Math.LN2)       // returns the natural logarithm of 2   : 0.6931471805599453
            console.log(Math.LN10)      // returns the natural logarithm of 10  : 2.302585092994046
            console.log(Math.LOG2E)     // returns base 2 logarithm of E        : 1.4426950408889634
            console.log(Math.LOG10E)    // returns base 10 logarithm of E       : 0.4342944819032518

// =====================================================================================

// Math Methods (Number to Integer) : 

    // The syntax for Math any methods is : Math.method(number)

    // Number to Integer : 

        // There are 4 common methods to round a number to an integer.

        // Math.round(x)	Returns x rounded to its nearest integer
        // Math.ceil(x)	    Returns x rounded up to its nearest integer
        // Math.floor(x)	Returns x rounded down to its nearest integer
        // Math.trunc(x)	Returns the integer part of x (new in ES6)

//......................................................................................

    // Math.round() : 

        // Math.round(x) returns the nearest integer.

        // Example : 

            console.log(Math.round(4.6))  // 5
            console.log(Math.round(4.5))  // 5
            console.log(Math.round(4.4))  // 4

//......................................................................................

    // Math.ceil() : 

        // Math.ceil(x) returns the value of x rounded up to its nearest integer.

        // Example : 

            console.log(Math.ceil(4.9))     // 5
            console.log(Math.ceil(4.7))     // 5
            console.log(Math.ceil(4.4))     // 5
            console.log(Math.ceil(4.2))     // 5
            console.log(Math.ceil(-4.2))    // -4

//......................................................................................

    // Math.floor() : 

        // Math.floor(x) returns the value of x rounded down to its nearest integer.

        // Example : 

            console.log(Math.floor(4.9))     // 4
            console.log(Math.floor(4.7))     // 4
            console.log(Math.floor(4.4))     // 4
            console.log(Math.floor(4.2))     // 4
            console.log(Math.floor(-4.2))    // -5

//......................................................................................

    // Math.trunc() : 

        // Math.trunc(x) returns the integer part of x.

        // Example : 

            console.log(Math.trunc(4.9))     // 4
            console.log(Math.trunc(4.7))     // 4
            console.log(Math.trunc(4.4))     // 4
            console.log(Math.trunc(4.2))     // 4
            console.log(Math.trunc(-4.2))    // -4

//......................................................................................

    // Math.sign() : 

        // Math.sign(x) returns if x is negative, null or positive.

        // Example : 

            console.log(Math.sign(-4))      // -1
            console.log(Math.sign(0))       // 0
            console.log(Math.sign(4))       // 1

//......................................................................................

    // Math.pow() : 

        // Math.pow(x, y) returns the value of x to the power of y.

        // Example : 

            console.log(Math.pow(8, 2))  // 64

//......................................................................................

    // Math.sqrt() : 

        // Math.sqrt(x) returns the square root of x.

        // Example : 

            console.log(Math.sqrt(64));  // 8

//......................................................................................

    // Math.abs() : 

        // Math.abs(x) returns the absolute (positive) value of x.

        // Example : 

            console.log(Math.abs(-4.7));  // 4.7

//......................................................................................

    // Math.sin() : 

        // Math.sin(x) returns the sine (a value between -1 and 1) of the angle x (given in radians).
        // If you want to use degrees instead of radians, you have to convert degrees to radians:
        // Angle in radians = Angle in degrees x PI / 180.

        // Example : 

            console.log(Math.sin(90 * Math.PI / 180));  // returns 1 (the sine of 90 degrees)

//......................................................................................

    // Math.cos() : 

        // Math.cos(x) returns the cosine (a value between -1 and 1) of the angle x (given in radians).
        // If you want to use degrees instead of radians, you have to convert degrees to radians:
        // Angle in radians = Angle in degrees x PI / 180.

        // Example : 

            console.log(Math.cos(0 * Math.PI / 180));  // returns 1 (the cos of 0 degrees)

//......................................................................................

    // Math.min() and Math.max() : 

        // Math.min() and Math.max() can be used to find the lowest or highest value in a list of arguments.

        // Example : 

            console.log(Math.min(0, 150, 30, 20, -8, -200));  // -200
            console.log(Math.max(0, 150, 30, 20, -8, -200));  // 150

//......................................................................................

    // Math.random() : 

        // Math.random() returns a random number between 0 (inclusive), and 1 (exclusive).

        // Example : 

            console.log(Math.random());  // 0.49907581806343737

//......................................................................................

    // Math.log() : 

        // Math.log(x) returns the natural logarithm of x.
        // The natural logarithm returns the time needed to reach a certain level of growth.

        // Example : 

            console.log(Math.log(1));   // 0
            console.log(Math.log(2));   // 0.6931471805599453
            console.log(Math.log(3));   // 1.0986122886681096
            console.log(Math.log(10));  // 2.302585092994046

//......................................................................................

    // Math.log2() : 

        // Math.log2(x) returns the base 2 logarithm of x.
        // How many times must we multiply 2 to get 8?.

        // Example : 

            console.log(Math.log2(8));   // 3
           

//......................................................................................

    // Math.log10() : 

        // Math.log10(x) returns the base 10 logarithm of x.
        // How many times must we multiply 10 to get 1000?

        // Example : 

            console.log(Math.log10(100));   // 2

// =====================================================================================

// Math Methods List : 

    // Method	                Description

    // abs(x)	                Returns the absolute value of x
    // acos(x)	                Returns the arccosine of x, in radians
    // acosh(x)	                Returns the hyperbolic arccosine of x
    // asin(x)	                Returns the arcsine of x, in radians
    // asinh(x)	                Returns the hyperbolic arcsine of x
    // atan(x)	                Returns the arctangent of x as a numeric value between -PI/2 and PI/2 radians
    // atan2(y, x)	            Returns the arctangent of the quotient of its arguments
    // atanh(x)	                Returns the hyperbolic arctangent of x
    // cbrt(x)	                Returns the cubic root of x
    // ceil(x)	                Returns x, rounded upwards to the nearest integer
    // cos(x)	                Returns the cosine of x (x is in radians)
    // cosh(x)	                Returns the hyperbolic cosine of x
    // exp(x)	                Returns the value of Ex
    // floor(x)	                Returns x, rounded downwards to the nearest integer
    // log(x)	                Returns the natural logarithm (base E) of x
    // max(x, y, z, ..., n)	    Returns the number with the highest value
    // min(x, y, z, ..., n)	    Returns the number with the lowest value
    // pow(x, y)	            Returns the value of x to the power of y
    // random()	                Returns a random number between 0 and 1
    // round(x)	                Rounds x to the nearest integer
    // sign(x)	                Returns if x is negative, null or positive (-1, 0, 1)
    // sin(x)	                Returns the sine of x (x is in radians)
    // sinh(x)	                Returns the hyperbolic sine of x
    // sqrt(x)	                Returns the square root of x
    // tan(x)	                Returns the tangent of an angle
    // tanh(x)	                Returns the hyperbolic tangent of a number
    // trunc(x)	                Returns the integer part of a number (x)
           
           
            
