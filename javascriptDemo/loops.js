console.log("Loops");

// =====================================================================================

// Topic :

/*
    # What is Loop?
    # Types of Loops :
        => for loop
        => while loop
        => do-while loop
        => for-in loop
*/

// =====================================================================================

// # What is Loop ?

// Looping in programming languages is a feature which facilitates the execution of a set of instructions/functions repeatedly while some condition evaluates to true. 

// =====================================================================================

// # Types of Loops :

//......................................................................................

// for loop :

// The JavaScript for loop iterates the elements for the fixed number of times. It should be used if number of iteration is known. The syntax of for loop is given below.

// Syntax : 

    // for (initialization; condition; increment)  
    // {  
    //     code to be executed  
    // }  

// Example : 

    for (i = 1; i <= 5; i++)
    {
        console.log(i);
    }  

//......................................................................................

// while loop :

// The JavaScript while loop iterates the elements for the infinite number of times. It should be used if number of iteration is not known. The syntax of while loop is given below.

// Syntax : 

    // while (condition)  
    // {  
    //     code to be executed  
    // }  

// Example : 

    var i = 11;
    while (i <= 15) {
        console.log(i);
    i++;
    }  

//......................................................................................

// do-while loop :

// The JavaScript do while loop iterates the elements for the infinite number of times like while loop. But, code is executed at least once whether condition is true or false. The syntax of do while loop is given below.

// Syntax :

    // do{  
    //     code to be executed  
    // }while (condition);  

// Example : 

    var i = 21;
    do {
        console.log(i);
    i++;
    } while (i <= 25);  

//......................................................................................

// for-in loop : 

// The JavaScript for in statement loops through the properties of an Object:

// Syntax :

    // for (key in object) {
    //   // code block to be executed
    // }

// Example : 

    const person = { fname: "John", lname: "Doe", age: 25 };

    let text = "";
    for (let x in person) {
        text += person[x];
    }

    console.log(text) // output : JohnDoe25

//......................................................................................