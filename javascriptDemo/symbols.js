console.log("Symbols");

// =====================================================================================

// Topic : 

/*
    # What is Symbol?
    # Creating Symbol
    # Access Symbol Description
    # Add Symbol as an Object Key
    # Symbols are not included in for...in Loop
    # Benefit of Using Symbols in Object
    # Symbol Methods
    # Symbol Properties
*/

// =====================================================================================

// What is Symbol? 

// The JavaScript ES6 introduced a new primitive data type called Symbol. Symbols are immutable (cannot be changed) and are unique. 

// Example :

    // two symbols with the same description

    const value1 = Symbol('hello');
    const value2 = Symbol('hello');

    console.log(value1 === value2); // false

// =====================================================================================

// Creating Symbol : 

//......................................................................................

// Example : 1

    // You use the Symbol() function to create a Symbol

    // creating symbol
    const x = Symbol()
    console.log(typeof x) // symbol

// Example : 2

    // You can pass an optional string as its description.

    const y = Symbol('hey');
    console.log(y); // Symbol(hey)

// =====================================================================================

// Access Symbol Description : 

//......................................................................................

// Example : 

    // To access the description of a symbol, we use the . operator. 

    const z = Symbol('hey');
    console.log(z.description); // hey

// =====================================================================================

// Add Symbol as an Object Key : 

//......................................................................................

// Example : 

    // You can add symbols as a key in an object using square brackets [].

    let id = Symbol("id");

    let person = {
        name: "Jack",

        // adding symbol as a key
        [id]: 123  // not "id": 123
    };

    console.log(person); // {name: "Jack", Symbol(id): 123}

// =====================================================================================

// Symbols are not included in for...in Loop : 

//......................................................................................

// Example : 

    // The for...in loop does not iterate over Symbolic properties.

    let id1 = Symbol("id");

    let person1 = {
    name: "Jack",
    age: 25,
    [id1]: 12
    };

    // using for...in
    for (let key in person1) {
        console.log(key);
    }

    // Output :

    // name
    // age

// =====================================================================================

// Benefit of Using Symbols in Object :

//......................................................................................

// Example : 1

    // If the same code snippet is used in various programs, then it is better to use Symbols in the object key. It's because you can use the same key name in different codes and avoid duplication issues.

    let person2 = {
        name: "Jack"
    };

    // creating Symbol
    let id2 = Symbol("id");

    // adding symbol as a key
    person2[id2] = 12;

    // In the above program, if the person object is also used by another program, then you wouldn't want to add a property that can be accessed or changed by another program. Hence by using Symbol, you create a unique property that you can use.

// Example : 2

    // Now, if the other program also needs to use a property named id, just add a Symbol named id and there won't be duplication issues.

    let person3 = {
    name: "Jack"
    };

    let id3 = Symbol("id");

    person3[id3] = "Another value";

    // In the above program, even if the same name is used to store values, the Symbol data type will have a unique value.

// Example : 3

    // if the string key was used, then the later program would have changed the value of the property.

    let person4 = {
        name: "Jack"
    };

    // using string as key
    person4.id4 = 12;
    console.log(person4.id4); // 12

    // Another program overwrites value
    person4.id4 = 'Another value';
    console.log(person4.id4); // Another value

    // In the above program, the second user.id overwrites the previous value.

// =====================================================================================

// Symbol Methods : 

//......................................................................................

// for()	    : Searches for existing symbols
// keyFor()	    : Returns a shared symbol key from the global symbol registry.
// toSource()	: Returns a string containing the source of the Symbol object
// toString()	: Returns a string containing the description of the Symbol
// valueOf()	: Returns the primitive value of the Symbol object.

//......................................................................................

// Example : 

    // get symbol by name
    let sym = Symbol.for('hello');
    let sym1 = Symbol.for('id');

    // get name by symbol
    console.log( Symbol.keyFor(sym) ); // hello
    console.log( Symbol.keyFor(sym1) ); // id

// =====================================================================================

// Symbol Properties :

//......................................................................................

// asyncIterator	    : Returns the default AsyncIterator for an object
// hasInstance	        : Determines if a constructor object recognizes an object as its instance
// isConcatSpreadable	: Indicates if an object should be flattened to its array elements
// iterator	            : Returns the default iterator for an object
// match	            : Matches against a string
// matchAll         	: Returns an iterator that yields matches of the regular expression against a string
// replace	            : Replaces matched substrings of a string
// search	            : Returns the index within a string that matches the regular expression
// split	            : Splits a string at the indices that match a regular expression
// species	            : Creates derived objects
// toPrimitive	        : Converts an object to a primitive value
// toStringTag	        : Gives the default description of an object
// description	        : Returns a string containing the description of the symbol

//......................................................................................

// Example : 

    const x1 = Symbol('hey');

    // description property
    console.log(x1.description); // hey

    const stringArray = ['a', 'b', 'c'];
    const numberArray = [1, 2, 3];

    // isConcatSpreadable property
    numberArray[Symbol.isConcatSpreadable] = false;

    let result = stringArray.concat(numberArray);
    console.log(result); // ["a", "b", "c", [1, 2, 3]]

// =====================================================================================



