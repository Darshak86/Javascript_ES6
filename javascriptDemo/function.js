console.log("Function");

// =====================================================================================

// Topic :

/*
    # What is Function?
    # Type of function
        => function without return type
        => function with return type
        => function without parameter
        => function with parameter
        => function with default parameter
*/

// =====================================================================================

// What is function ?

    // A function is a set of statements that take inputs, do some specific computation, and produces output. Basically, a function is a set of statements that performs some tasks or does some computation and then return the result to the user.

    // Syntax:

    // function functionName(Parameter1, Parameter2, ..)
    // {
    //     // Function body
    // }

    // Example : 

        function calcAddition(number1, number2) {
            return number1 + number2;
        }

        console.log(calcAddition(5,6))  // output : 11

// =====================================================================================

// Type of function : 

//......................................................................................

// => function without return type

// Example :

        function addition(val1 , val2)
        {
            console.log(val1+val2)
        }

        addition(11,12)  // output : 23

//......................................................................................

// => function with return type

// Example :

        function subtraction(number1, number2) {
            return number1 - number2;
        }

        console.log(subtraction(5,6))  // output : -1

//......................................................................................

// => function without parameter

// Example :

        function sum()
        {
            let val1 = 16
            let val2 = 15;
            console.log(val1+val2)
        }

        sum() // output : 31

//......................................................................................

// => function with parameter

// Example :
  
// follow example function without return type

//......................................................................................

// => function with default parameter

// Example :

    function say(message='Hi') {
        console.log(message);
    }

    say();       // 'Hi'
    say('Hello') // 'Hello'

//......................................................................................