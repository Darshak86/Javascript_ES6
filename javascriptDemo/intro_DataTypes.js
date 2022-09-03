/*  
     JavaScript is dynamic and loosely typed language. 
     It means you don't require to specify a type of a variable. 
     A variable in JavaScript can be assigned any type of value.

     Primitive Data Types : (string , number , boolean , null , undefined , symbol)
     The primitive data types are the lowest level of the data value in JavaScript. 

     Reference / Structural Data Types : (array , object , functions , dates)
     The reference / structural data types contain some kind of structure with primitive data.

     typeof : 
     The typeof operator can be used with primitive data types to know the type of a value.
*/

// Primitive data types =========================================================================

console.log("\nPrimitive data types\n\n");

//......................................................................................

// String :

    let user = "Darshak";
    console.log("Data type is user : " + (typeof user));   // Data type is user : string

// Numbers :

    let marks = 34.4;
    console.log("Data type is marks : " + (typeof marks));  // Data type is marks : number

// Boolean :

    let isDriver = true;
    console.log("Data type is isDriver : " + (typeof isDriver)); // Data type is isDriver : boolean

// Null :

    let nullVar = null;
    console.log("Data type is nullVar : " + (typeof nullVar));  // Data type is nullVar : object

// Undefined :

    let undef;  // let undef = undefined;  
    console.log("Data type is undef : " + (typeof undef));  // Data type is undef : undefined

//Symbol :

    const mySymbol = Symbol();
    console.log("Data type is mySymbol : " + typeof mySymbol); // Data type is mySymbol : symbol

//......................................................................................

// Reference / Structural Data Types  ========================================================================================

console.log("\nReference / Structural Data Types \n\n");

//......................................................................................

// Arrays :

    let myArr = [1, 2, 3, 4, false, "string"];
    console.log("Data type is myArr : " + (typeof myArr));  // Data type is myArr : object

// Object Literals  or dictionary :

    let stMarks = {
        a: 89,
        b: 36,
        c: 34
    }
    console.log("Data type is stMarks : " + (typeof stMarks)); // Data type is stMarks : object

// function :

    function findName() {
    }
    console.log("Data type is findName : " + typeof findName); // Data type is findName : function

// Date :

    let date = new Date();
    console.log("Data type is date : " + typeof date); // Data type is date : object

