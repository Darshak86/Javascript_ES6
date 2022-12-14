console.log("Rest Operator");

// =====================================================================================

// What is Rest Operator?

// Rest parameter is an improved way to handle function parameter, allowing us to more easily handle various input as parameters in a function. The rest parameter syntax allows us to represent an indefinite number of arguments as an array. With the help of a rest parameter a function can be called with any number of arguments, no matter how it was defined. Rest parameter is added in ES2015 or ES6 which improved the ability to handle parameter.

// Note: In order to run the code in this article make use of the console provided by the browser or use an online tool like repl.it.

// Syntax : 
 
    // function functionName(...parameters)   //... is the rest parameter (triple dots)
    // {
    //      statement;
    // }

//......................................................................................

// Example : 1 

    // Without rest parameter
    function fun(a, b){
        return a + b;
    }
    console.log(fun(1, 2));          // 3
    console.log(fun(1, 2, 3, 4, 5)); // 3  
    
    // es6 rest parameter
    function fun(...input){
        let sum = 0;
        for(let i of input){
            sum+=i;
        }
        return sum;
    }

    console.log(fun(1,2));          //3
    console.log(fun(1,2,3));        //6
    console.log(fun(1,2,3,4,5));    //15  

//......................................................................................

    // non-sense code
    
    // function fun(a,...b,c){
    //     //code
    //     return;
    // }

    // function fun(...a,b,c){
    //     //code
    //     return;
    // }

    // Uncaught SyntaxError: Rest parameter must be last formal parameter

//......................................................................................

// Example : 2

    // rest with function and other arguments
    function fun(a,b,...c){
        console.log(`${a} ${b}`);           //Mukul Latiyan
        console.log(c);                     //[ 'Lionel', 'Messi', 'Barcelona' ]
        console.log(c[0]);                  //Lionel
        console.log(c.length);              //3
        console.log(c.indexOf('Lionel'));   //0
    }
    fun('Mukul','Latiyan','Lionel','Messi','Barcelona');
