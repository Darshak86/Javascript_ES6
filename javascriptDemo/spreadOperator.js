console.log("Primitive vs Reference & Spread operator");

// =====================================================================================

/* 
    What is a Spread operator ?

    Spread operator allows an iterable to expand in places where 0+ arguments are expected. It is mostly used in the variable array where there is more than 1 values are expected. It allows us the privilege to obtain a list of parameters from an array. Syntax of Spread operator is same as Rest parameter but it works completely opposite of it.

    Syntax:

    let variableName = [...value]; 
*/

// =====================================================================================

// Primitive vs Reference

//......................................................................................

// Primitive types: 

// Example : 

    let x = 5
    let y = x

    console.log(`x = ${x} , y = ${y}`)  // x = 5 , y = 5
    x = 10                              // update value in x
    console.log(`x = ${x} , y = ${y}`); // x = 10 , y = 5

// Note : update value of x but not effect on value of y

//......................................................................................

// Reference types: 

    let arr1 = [10,20,30]
    
    let arr2 = arr1  

    // optional:
    // arr1 = arr1.concat(arr2); // marge two array using concat function

    console.log(arr2) // [10, 20, 30]
    arr1.push(40)     // add value in arr1 
    console.log(arr2) // [10, 20, 30,40]

// Note : add value in arr1 but it's also add in arr2 too.
// Solution : Used Spread Operator

// =====================================================================================

// Spread operator

// Example : 1

// marge two object using spread operator

    let person = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
    ssn: "123-456-2356"
    };

    let job = {
    jobTitle: "JavaScript Developer",
    location: "USA"
    };

    let employee = {
    ...person,
    ...job
    };

    person.firstName = "Ram"

    console.log(person);

    // Output :
    // {
    //     age: 25;
    //     firstName: "Ram";
    //     lastName: "Doe";
    //     ssn: "123-456-2356";
    // }

    console.log(employee);

    // Output :
    // {
    //     age: 25;
    //     firstName: "John";
    //     jobTitle: "JavaScript Developer";
    //     lastName: "Doe";
    //     location: "USA";
    //     ssn: "123-456-2356";
    // }

// Note : Update object value of person but not update on employee value by using spread operator

// Example : 2 

// marge two array

    let arr3 = [10,20,30]
    let arr4 = [...arr3]
    console.log(arr4) // [10, 20, 30]
    arr1.push(40)     // add value in arr1 
    console.log(arr4) // [10, 20, 30]

// Note : add value in arr3 but not added value in arr4 by using spread operator
    









