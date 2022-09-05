console.log("Arrow function");

// =====================================================================================

/* 

    What is a Arrow function ?

    An arrow function expression or syntax is a simplified as well as a more compact version of a regular or normal function expression or syntax.  and even though it’s easier to be implemented compared to normal functions still it has some limitations and cannot be utilized in all cases.

    Syntax:

        For Single Argument:

            let function_name = argument1 => expression

        For Multiple Arguments:

            let function_name = (argument1, argument2 , ...) => expression

    Note: In case of multiple arguments you need to enclose the arguments within brackets.

*/

//......................................................................................

// Example : 1

    // In this example, we will multiply two numbers using traditional function syntax (or expression) as well as with arrow function syntax. In the below code we create a function called multiply where we return the product of two numbers.

    //  Normal function for multiplication
    // of two numbers

    function multiply(a, b) {
        return a * b;
    }
    console.log(multiply(3, 5));  // 15

    // Arrow function for multiplying two numbers

    const value = (a, b) => a * b;
    console.log(value(4, 5));  // 20

//......................................................................................

//Example : 2

    // When there are more than two lines to process

    // From the previous example, we can see that when there’s a single line of code to be executed we didn’t use the return keyword but if there are more than two lines to be processed, we need to use a return keyword. let’s demonstrate that with an example:

    const number = (a, b) => {
      c = 5;
      return (a + b) * c;
    };

    console.log(number(2, 3));  // 25

//......................................................................................

// Example : 3

    // Arrow function with no parameters. In the below code we use an arrow function without any parameters and return the word “Hello world” as it is a single statement we don’t need to use the return keyword.

    // Syntax:

    // ()=>{ expressions}

    // Arrow function with no parameters
        const string = () => "Hello world";
        console.log(string); // Hello world

//......................................................................................

// Example : 4

    // Using arrow function inside another function. In this example let’s find the length of strings in an array. we use the arrow function inside the map() function to accomplish this task. arrow function returns the length of each string.

    // Initializing an array of strings

        let array = ["a", "ab", "abc"];
        
        // Map function used to find the length of strings
        let lengths = array.map((string) => string.length);
    
        console.log(lengths); // [1,2,3]

//......................................................................................

// Example : 5

    // Arrow Function as an Expression

    // You can also dynamically create a function and use it as an expression. For example,

    let age = 5;

    let welcome = (age < 18) ? () => console.log('Baby') : () => console.log('Adult');
    welcome(); // Baby

//......................................................................................

// Example : 6

    // Arrow Function object argument , Object Destructuring

    const data = (person) => {
        let {username : name , userPassword :password} = person
        return `username : ${name} , password : ${password}`
    }

    console.log(data({username : "abcd" , userPassword :"123456"}))  // username : abcd , password : 123456

//......................................................................................

// Example : 7

    // Arrow Function object argument , Object Destructuring

    const greet = ({ username: name, city: from }) => {
    return `greeting : ${name} ,  from: ${from}`;
    };

    console.log(greet({username : "ram" , city : "goa"}))  // greeting : ram ,  from: goa

//......................................................................................

// Example : 8

    // Arrow Function object argument , Object Destructuring , single line , return object

    const greet1 = ({ username: name, city: from }) => ({result :`greeting : ${name} ,  from: ${from}`})
    
    console.log(greet1({username : "ram" , city : "goa"}))  // {result :`greeting : ${name} ,  from: ${from}`}