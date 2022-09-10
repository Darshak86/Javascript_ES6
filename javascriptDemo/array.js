console.log("Array");

// =====================================================================================

// Topics :

/*
    # What is a Array ?
    # Declaration of an Array 
    # An array in JavaScript can hold different elements 
    # Accessing Array Elements
    # Changing an Array Element
    # Adding Array Elements
    # How to Recognize an Array
    # Array delete() 
    # Destructuring assignment
    # Properties : 

        => length

    # Methods :   

        => iterator()
        => Species()
        => at()                =>   Imp
        => concat()            =>   Imp
        => copyWithin()
        => entries()
        => every()
        => fill()
        => filter()            =>   Imp
        => find()              =>   Imp
        => findIndex()         =>   Imp
        => findLast()          =>   Imp
        => findLastIndex()     =>   Imp
        => flat()
        => flatMap()           =>   Imp
        => forEach()           =>   Imp
        => from()
        => group()
        => groupToMap()
        => includes()
        => indexOf()           =>   Imp
        => isArray() 
        => join()              =>   Imp
        => keys()
        => lastIndexOf()       =>   Imp
        => map()               =>   Imp
        => of()                =>   Imp
        => pop()               =>   Imp
        => push()              =>   Imp
        => reduce()            =>   Imp
        => reduceRight()       =>   Imp
        => reverse()           =>   Imp
        => shift()             =>   Imp
        => slice()             =>   Imp
        => some()
        => sort()              =>   Imp
        => splice()            =>   Imp
        => toLocaleString()
        => toString()          =>   Imp
        => unshift()
        => values()

        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/
*/

// =====================================================================================

/* 
    => What is a Array ?

        An array is a special variable, which can hold more than one value

        # or

        The Array object, as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name, and has members for performing common array operations.

        Syntax:

        const array_name = [item1, item2, ...];      

        Example:

        const cars = ["Saab", "Volvo", "BMW"];

    => The Difference Between Arrays and Objects
        => In JavaScript, arrays use numbered indexes.  
        => In JavaScript, objects use named indexes.

    => Arrays are a special kind of objects, with numbered indexes.

    => When to Use Arrays. When to use Objects.
        =>  JavaScript does not support associative arrays.
        =>  You should use objects when you want the element names to be strings (text).
        =>  You should use arrays when you want the element names to be numbers.
*/

// =====================================================================================

// Declaration of an Array 

// There are basically two ways to declare an array. 

// Example: 

// var House = [];         // method 1 
// var House = new Array(); // method 2 

//......................................................................................

// Example (for Method 1):

    // Initializing while declaring
    let house = ["1BHK", "2BHK", "3BHK", "4BHK"];
    console.table("house: " + house); // output: house: 1BHK,2BHK,3BHK,4BHK

//......................................................................................

// Example (for Method 2):

    // Initializing while declaring
    // Creates an array having elements 10, 20, 30, 40, 50
    let house1 = new Array(10, 20, 30, 40, 50);
    console.table("house1: " + house1); // output: house1: 10,20,30,40,50

    //Creates an array of 4 undefined elements
    let house2 = new Array(4);
    console.table("house2: " + house2); // output: house2: ,,,,

    // Now assign values
    house2[0] = "1BHK"
    house2[1] = "2BHK"
    house2[2] = "3BHK"
    house2[3] = "4BHK"

    console.table("house2: " + house2); // output: house2: 1BHK,2BHK,3BHK,4BHK

    //Creates an array with element 1BHK
    let home = new Array("1BHK");
    console.table("home: " + home); // output: home: 1BHK

// =====================================================================================

// An array in JavaScript can hold different elements 
// We can store Numbers, Strings and Boolean in a single array. 

//......................................................................................

// Example: 

    // Storing number, boolean, strings in an Array
    var house3 = ["1BHK", 25000, "2BHK", 50000, "Rent", true];

    // Accessing Array Elements 
    // Array in JavaScript are indexed from 0 so we can access array elements as follows:

    console.log(house3[0] + " cost= " + house3[1]);     // output: 1BHK cost= 25000

    let cost_1BHK = house3[1];
    let is_for_rent = house3[5];

    console.log("Cost of 1BHK = " + cost_1BHK);         // output: Cost of 1BHK = 25000
    console.log("Is house for rent = " + is_for_rent);  // output: Is house for rent = true

// =====================================================================================

// Accessing Array Elements

//......................................................................................

// Example: 1

    const cars = ["Saab", "Volvo", "BMW"];
    let car = cars[0];
    console.log(car);  // output: Saab

    // Note: Array indexes start with 0.
    // [0] is the first element. [1] is the second element.

// Example: 2 

    // Accessing the Last Array Element

    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    let fruit = fruits[fruits.length - 1];
    console.log(fruit);  // output: Mango

// Example: 3

   // Looping Array Elements

   for (let i = 0; i < fruits.length; i++) {
     console.log(fruits[i])
   }

   // output:
    // "Banana"
    // "Orange"
    // "Apple"
    // "Mango"

// =====================================================================================

// Changing an Array Element

//......................................................................................

// Example: 

    cars[0] = "Opel";

    console.log(cars);   // output: ['Opel', 'Volvo', 'BMW']

// =====================================================================================

// Adding Array Elements

//......................................................................................

// Example: 1

    const fruits1 = ["Banana", "Orange", "Apple"];

    fruits1.push("Lemon");  // Adds a new element (Lemon) to fruits
    console.log(fruits1);  // output: ['Banana', 'Orange', 'Apple', 'Lemon']

// Example: 2

    fruits1[fruits1.length] = "Coconut";
    console.log(fruits1);  // output: ['Banana', 'Orange', 'Apple', 'Lemon' , 'Coconut']

// =====================================================================================

// How to Recognize an Array

// The problem is that the JavaScript operator typeof returns "object":

//......................................................................................

// Example: 

    let type = typeof fruits;
    console.log(type);  // output: object

// =====================================================================================

// Array delete() 

// Array elements can be deleted using the JavaScript operator delete.

// Using delete leaves undefined holes in the array.

// Use pop() or shift() instead.

//......................................................................................

// Example: 

    const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
    delete fruits2[1];

    console.log(fruits2); // output: ['Banana', empty, 'Apple', 'Mango']

// =====================================================================================

// Destructuring assignment

//......................................................................................

// Example: 

    const x = [1, 2, 3, 4, 5];
    const [y, z] = x;
    console.log(y); // output: 1
    console.log(z); // output: 2

// =====================================================================================

// Properties : 

// =====================================================================================

// => length

// The length property of an object which is an instance of type Array sets or returns the number of elements in that array. The value is an unsigned, 32-bit integer that is always numerically greater than the highest index in the array.

// Example: 

    const clothing = ['shoes', 'shirts', 'socks', 'sweaters'];

    console.log(clothing.length); // output: 4
   
// =====================================================================================

// Methods :

// =====================================================================================

// => iterator()

    // The @@iterator method is part of The iterable protocol, that defines how to synchronously iterate over a sequence of values.

    // Syntax:

        // [Symbol.iterator]();

    // Example: 

        const array1 = ['a', 'b', 'c'];
        const iterator1 = array1[Symbol.iterator]();

        for (const value of iterator1) {
        console.log(value);
        }

        // output: 
        // "a"
        // "b"
        // "c"


//......................................................................................

// => Species()

    // The Array[@@species] accessor property returns the constructor used to construct return values from array methods.

    // Syntax :

        // Array[Symbol.species]

    // Example: 

        class NotAnArray {
        constructor(length) {
            this.length = length;
        }
        }

        const arr = [0, 1, 2];
        arr.constructor = { [Symbol.species]: NotAnArray };
        arr.map((i) => i);    // NotAnArray { '0': 0, '1': 1, '2': 2, length: 3 }
        arr.filter((i) => i); // NotAnArray { '0': 1, '1': 2, length: 0 }
        arr.concat([1, 2]);   // NotAnArray { '0': 0, '1': 1, '2': 2, '3': 1, '4': 2, length: 5 }

//......................................................................................

// => at()

    // The at() method takes an integer value and returns the item at that index, allowing for positive and negative integers. Negative integers count back from the last item in the array.

    // This is not to suggest there is anything wrong with using the square bracket notation. For example array[0] would return the first item. However instead of using array.length for latter items; e.g. array[array.length-1] for the last item, you can call array.at(-1).

    // Example: 

        const array2 = [5, 12, 8, 130, 44];

        let index = 2;

        console.log(`Using an index of ${index} the item returned is ${array2.at(index)}`);
        // output: "Using an index of 2 the item returned is 8"

        index = -2;

        console.log(`Using an index of ${index} item returned is ${array2.at(index)}`);
        // output: "Using an index of -2 item returned is 130"

//......................................................................................

// => concat()

    // The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

    // Example: 

        const array3 = ['a', 'b', 'c'];
        const array4 = ['d', 'e', 'f'];
        const array5 = array3.concat(array4);

        console.log(array3);
        // output: Array ["a", "b", "c", "d", "e", "f"]

//......................................................................................

// => copyWithin()

    // The copyWithin() method shallow copies part of an array to another location in the same array and returns it without modifying its length.

    // Syntax:

        // copyWithin(target);
        // copyWithin(target, start);
        // copyWithin(target, start, end);

    // Example: 

        const array6 = ['a', 'b', 'c', 'd', 'e'];

        // copy to index 0 the element at index 3
        console.log(array6.copyWithin(0, 3, 4));
        // output: Array ["d", "b", "c", "d", "e"]

        // copy to index 1 all elements from index 3 to the end
        console.log(array6.copyWithin(1, 3));
        // output: Array ["d", "d", "e", "d", "e"]

        console.log([1, 2, 3, 4, 5].copyWithin(-2));
        // output: [1, 2, 3, 1, 2]

        console.log([1, 2, 3, 4, 5].copyWithin(0, 3));
        // output: [4, 5, 3, 4, 5]

        console.log([1, 2, 3, 4, 5].copyWithin(0, 3, 4));
        // output: [4, 2, 3, 4, 5]

        console.log([1, 2, 3, 4, 5].copyWithin(-2, -3, -1));
        // output: [1, 2, 3, 3, 4]

        console.log([].copyWithin.call({length: 5, 3: 1}, 0, 3));
        // output: {0: 1, 3: 1, length: 5}


//......................................................................................

// => entries()

    // The entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array.

    // Example: 

        const array7 = ['a', 'b', 'c'];

        const iterator2 = array7.entries();

        console.log(iterator2.next().value);
        // output: Array [0, "a"]

        console.log(iterator2.next().value);
        // output: Array [1, "b"]

//......................................................................................

// => every()

    // The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

    // Example: 

        const isBelowThreshold = (currentValue) => currentValue < 40;

        const array8 = [1, 30, 39, 29, 10, 13];

        console.log(array8.every(isBelowThreshold));
        // output: true


//......................................................................................

// => fill()

    // The fill() method changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array.

    // Syntax:

        // fill(value);
        // fill(value, start);
        // fill(value, start, end);

    // Example: 

        const array9 = [1, 2, 3, 4];

        // fill with 0 from position 2 until position 4
        console.log(array9.fill(0, 2, 4));
        // output: [1, 2, 0, 0]

        // fill with 5 from position 1
        console.log(array9.fill(5, 1));
        // output: [1, 5, 5, 5]

        console.log(array9.fill(6));
        // output: [6, 6, 6, 6]

        console.log([1, 2, 3].fill(4));                // output: [4, 4, 4]
        console.log([1, 2, 3].fill(4, 1));             // output: [1, 4, 4]
        console.log([1, 2, 3].fill(4, 1, 2));          // output: [1, 4, 3]
        console.log([1, 2, 3].fill(4, 1, 1));          // output: [1, 2, 3]
        console.log([1, 2, 3].fill(4, 3, 3));          // output: [1, 2, 3]
        console.log([1, 2, 3].fill(4, -3, -2));        // output: [4, 2, 3]
        console.log([1, 2, 3].fill(4, NaN, NaN));      // output: [1, 2, 3]
        console.log([1, 2, 3].fill(4, 3, 5));          // output: [1, 2, 3]
        console.log(Array(3).fill(4));                 // output: [4, 4, 4]
        console.log([].fill.call({ length: 3 }, 4));   // output: {0: 4, 1: 4, 2: 4, length: 3}

        // A single object, referenced by each slot of the array:
        const arr11 = Array(3).fill({}); // output: [{}, {}, {}]
        arr11[0].hi = "hi";              // output: [{ hi: "hi" }, { hi: "hi" }, { hi: "hi" }]

//......................................................................................

// => filter()

    // The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.

    // Syntax:

        // Arrow function
            // filter(element => {
            //   /* … */
            // });
            // filter((element, index) => {
            //   /* … */
            // });
            // filter((element, index, array) => {
            //   /* … */
            // });

        // Callback function
            // filter(callbackFn);
            // filter(callbackFn, thisArg);

        // Inline callback function
            // filter(function(element) {
            //   /* … */
            // });
            // filter(function(element, index) {
            //   /* … */
            // });
            // filter(function(element, index, array) {
            //   /* … */
            // });
            // filter(function(element, index, array) {
            //   /* … */
            // }, thisArg);

    // Example: 1

        const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

        const result = words.filter(word => word.length > 6);

        console.log(result);
        // output: Array ["exuberant", "destruction", "present"]

    // Example: 2

        // Filtering out all small values

        function isBigEnough(value) {
        return value >= 10;
        }

        const filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
        console.log(filtered)
        // output:  [12, 130, 44]

    // Example: 3

        // Find all prime numbers in an array

        const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

        function isPrime(num) {
        for (let i = 2; num > i; i++) {
            if (num % i === 0) {
            return false;
            }
        }
        return num > 1;
        }

        console.log(array.filter(isPrime)); // output: [2, 3, 5, 7, 11, 13]

    // Example: 4

        // Filtering invalid entries from JSON

        const arr111 = [
        { id: 15 },
        { id: -1 },
        { id: 0 },
        { id: 3 },
        { id: 12.2 },
        {},
        { id: null },
        { id: NaN },
        { id: 'undefined' },
        ];

        let invalidEntries = 0;

        function filterByID(item) {
        if (Number.isFinite(item.id) && item.id !== 0) {
            return true;
        }
        invalidEntries++;
        return false;
        }

        const arrByID = arr111.filter(filterByID);

        console.log('Filtered Array\n', arrByID);
        // Filtered Array
        // [{ id: 15 }, { id: -1 }, { id: 3 }, { id: 12.2 }]

        console.log('Number of Invalid Entries = ', invalidEntries);
        // Number of Invalid Entries = 5

    // Example: 5

        // Searching in array

        const fruits11 = ['apple', 'banana', 'grapes', 'mango', 'orange'];

        /**
         * Filter array items based on search criteria (query)
         */
        function filterItems(arr, query) {
        return arr.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
        }

        console.log(filterItems(fruits11, 'ap')); // output: ['apple', 'grapes']
        console.log(filterItems(fruits11, 'an')); // output: ['banana', 'mango', 'orange']

    // Example: 6

        // Affecting Initial Array (modifying, appending and deleting)

        // Modifying each word
        let words1 = ['spray', 'limit', 'exuberant', 'destruction', 'elite', 'present'];

        const modifiedWords = words1.filter((word, index, arr) => {
        arr[index + 1] += ' extra';
        return word.length < 6;
        });

        console.log(modifiedWords);
        // Notice there are three words below length 6, but since they've been modified one is returned
        // ["spray"]

        // Appending new words
        words1 = ['spray', 'limit', 'exuberant', 'destruction', 'elite', 'present'];
        const appendedWords = words1.filter((word, index, arr) => {
        arr.push('new');
        return word.length < 6;
        })

        console.log(appendedWords);
        // Only three fits the condition even though the `words` itself now has a lot more words with character length less than 6
        // ["spray" ,"limit" ,"elite"]

        // Deleting words
        words1 = ['spray', 'limit', 'exuberant', 'destruction', 'elite', 'present'];
        const deleteWords = words1.filter((word, index, arr) => {
        arr.pop();
        return word.length < 6;
        })

        console.log(deleteWords);
        // Notice 'elite' is not even obtained as it's been popped off 'words' before filter can even get there
        // ["spray" ,"limit"]

//......................................................................................

// => find()

    // The find() method returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

    // Syntax:

        //  Arrow function

        // find(element => {
        // /* … */
        // });
        // find((element, index) => {
        // /* … */
        // });
        // find((element, index, array) => {
        // /* … */
        // });

    //  Callback function

        // find(callbackFn);
        // find(callbackFn, thisArg);

    //  Inline callback function

        // find(function(element) {
        // /* … */
        // });
        // find(function(element, index) {
        // /* … */
        // });
        // find(function(element, index, array) {
        // /* … */
        // });
        // find(function(element, index, array) {
        // /* … */
        // }, thisArg);

 // Example: 1

    const array10 = [5, 12, 8, 130, 44];

    const found = array10.find(element => element > 10);

    console.log(found);
    // output: 12

// Example: 2

    // Find an object in an array by one of its properties

    const inventory = [
    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5}
    ];

    function isCherries(fruit) {
    return fruit.name === 'cherries';
    }

    console.log(inventory.find(isCherries));
    // output: { name: 'cherries', quantity: 5 }

// Example: 3

    // Using arrow function and destructuring

    const result1 = inventory.find(({ name }) => name === 'cherries');

    console.log(result1) // output: { name: 'cherries', quantity: 5 }

// Example: 4

    // Find a prime number in an array

    function isPrime(element, index, array) {
    let start = 2;
    while (start <= Math.sqrt(element)) {
        if (element % start++ < 1) {
        return false;
        }
    }
    return element > 1;
    }

    console.log([4, 6, 8, 12].find(isPrime)); // output: undefined, not found
    console.log([4, 5, 8, 12].find(isPrime)); // output: 5

// Example: 5

    // Declare array with no elements at indexes 2, 3, and 4
    const array11 = [0,1,,,,5,6];

    // Shows all indexes, not just those with assigned values
    array11.find((value, index) => {
    console.log('Visited index ', index, ' with value ', value);
    });

    // Shows all indexes, including deleted
    array11.find((value, index) => {
    // Delete element 5 on first iteration
    if (index === 0) {
        console.log('Deleting array[5] with value ', array11[5]);
        delete array11[5];
    }
    // Element 5 is still visited even though deleted
    console.log('Visited index ', index, ' with value ', value);
    });

    // output:
    // Visited index 0 with value 0
    // Visited index 1 with value 1
    // Visited index 2 with value undefined
    // Visited index 3 with value undefined
    // Visited index 4 with value undefined
    // Visited index 5 with value 5
    // Visited index 6 with value 6

    // Deleting array[5] with value 5

    // Visited index 0 with value 0
    // Visited index 1 with value 1
    // Visited index 2 with value undefined
    // Visited index 3 with value undefined
    // Visited index 4 with value undefined
    // Visited index 5 with value undefined
    // Visited index 6 with value 6

//......................................................................................

// => findIndex()

    // The findIndex() method returns the index of the first element in an array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.

    // Syntax :

        // Arrow function

        // findIndex((element) => { /* … */ } )
        // findIndex((element, index) => { /* … */ } )
        // findIndex((element, index, array) => { /* … */ } )

        // Callback function

        // findIndex(callbackFn)
        // findIndex(callbackFn, thisArg)

        // Inline callback function

        // findIndex(function(element) { /* … */ })
        // findIndex(function(element, index) { /* … */ })
        // findIndex(function(element, index, array){ /* … */ })
        // findIndex(function(element, index, array) { /* … */ }, thisArg)

    // Example: 1

        const array12 = [5, 12, 8, 130, 44];
        const isLargeNumber = (element) => element > 13;
        console.log(array12.findIndex(isLargeNumber));
        // output: 3

    // Example: 2

        // Find the index of a prime number in an array

        function isPrime(element) {
        if (element % 2 === 0 || element < 2) {
            return false;
        }
        for (let factor = 3; factor <= Math.sqrt(element); factor += 2) {
            if (element % factor === 0) {
            return false;
            }
        }
        return true;
        }

        console.log([4, 6, 8, 9, 12].findIndex(isPrime)); // -1, not found
        console.log([4, 6, 7, 9, 12].findIndex(isPrime)); // 2 (array[2] is 7)

    // Example: 3

        // Find index using arrow function

        const fruits3 = ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"];

        const index1 = fruits3.findIndex((fruit) => fruit === "blueberries");

        console.log(index1); // 3
        console.log(fruits3[index1]); // blueberries
//......................................................................................

// => findLast()

    // The findLast() method returns the value of the last element in an array that satisfies the provided testing function. If no elements satisfy the testing function, undefined is returned.

    // Syntax :

        // Arrow function
        // findLast((element) => { /* … */ } )
        // findLast((element, index) => { /* … */ } )
        // findLast((element, index, array) => { /* … */ } )

        // Callback function
        // findLast(callbackFn)
        // findLast(callbackFn, thisArg)

        // Inline callback function
        // findLast(function(element) { /* … */ })
        // findLast(function(element, index) { /* … */ })
        // findLast(function(element, index, array){ /* … */ })
        // findLast(function(element, index, array) { /* … */ }, thisArg)

    // Example: 1

        const array13 = [5, 12, 50, 130, 44];
        const found1 = array13.findLast((element) => element > 45);
        console.log(found1);
        // output: 130

    // Example: 2

        // Find last object in an array matching on element properties

        const inventory1 = [
        { name: 'apples', quantity: 2 },
        { name: 'bananas', quantity: 0 },
        { name: 'fish', quantity: 1 },
        { name: 'cherries', quantity: 5 }
        ];

        // return true inventory stock is low
        function isNotEnough(item) {
        return item.quantity < 2;
        }

        console.log(inventory1.findLast(isNotEnough));
        // { name: "fish", quantity: 1 }

    // Example: 3

        // Using arrow function and destructuring

        const inventory2 = [
        { name: 'apples', quantity: 2 },
        { name: 'bananas', quantity: 0 },
        { name: 'fish', quantity: 1 },
        { name: 'cherries', quantity: 5 },
        ];

        const result2 = inventory2.findLast(({ quantity }) => quantity < 2);

        console.log(result2);
        // { name: "fish", quantity: 1 }

    // Example: 4

        // Find last prime number in an array

        function isPrime(element) {
        if (element % 2 === 0 || element < 2) {
            return false;
        }
        for (let factor = 3; factor <= Math.sqrt(element); factor += 2) {
            if (element % factor === 0) {
            return false;
            }
        }
        return true;
        }

        console.log([4, 6, 8, 12].findLast(isPrime)); // undefined, not found
        console.log([4, 5, 7, 8, 9, 11, 12].findLast(isPrime)); // 11

    // Example: 5

        // Nonexistent and deleted elements are visited

        // Declare array with no elements at indexes 2, 3, and 4
        const array14 = [0, 1, , , , 5, 6];

        // Shows all indexes, not just those with assigned values
        array14.findLast((value, index) => {
        console.log(`Visited index ${index} with value ${value}`);
        });

        // Shows all indexes, including deleted
        array14.findLast((value, index) => {
        // Delete element 5 on first iteration
        if (index === 6) {
            console.log(`Deleting array[5] with value ${array14[5]}`);
            delete array14[5];
        }
        // Element 5 is still visited even though deleted
        console.log(`Visited index ${index} with value ${value}`);
        });

        // output:
        // > "Visited index 6 with value 6"
        // > "Visited index 5 with value 5"
        // > "Visited index 4 with value undefined"
        // > "Visited index 3 with value undefined"
        // > "Visited index 2 with value undefined"
        // > "Visited index 1 with value 1"
        // > "Visited index 0 with value 0"
        // > "Deleting array[5] with value 5"
        // > "Visited index 6 with value 6"
        // > "Visited index 5 with value undefined"
        // > "Visited index 4 with value undefined"
        // > "Visited index 3 with value undefined"
        // > "Visited index 2 with value undefined"
        // > "Visited index 1 with value 1"
        // > "Visited index 0 with value 0"

//......................................................................................

// => findLastIndex()

    // The findLastIndex() method returns the index of the last element in an array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.

    // Syntax : 

        // Arrow function
        // findLastIndex((element) => { /* … */ } )
        // findLastIndex((element, index) => { /* … */ } )
        // findLastIndex((element, index, array) => { /* … */ } )

        // Callback function
        // findLastIndex(callbackFn)
        // findLastIndex(callbackFn, thisArg)

        // Inline callback function
        // findLastIndex(function(element) { /* … */ })
        // findLastIndex(function(element, index) { /* … */ })
        // findLastIndex(function(element, index, array){ /* … */ })
        // findLastIndex(function(element, index, array) { /* … */ }, thisArg)


    // Example: 1

        const array15 = [5, 12, 50, 130, 44];
        const isLargeNumber1 = (element) => element > 45;
        console.log(array15.findLastIndex(isLargeNumber1));
        // output: 3  (of element with value: 30)

    // Example: 2

        // Find the index of the last prime number in an array

        function isPrime(element) {
        if (element % 2 === 0 || element < 2) {
            return false;
        }
        for (let factor = 3; factor <= Math.sqrt(element); factor += 2) {
            if (element % factor === 0) {
            return false;
            }
        }
        return true;
        }

        console.log([4, 6, 8, 12].findLastIndex(isPrime)); // -1
        console.log([4, 5, 7, 8, 9, 11, 12].findLastIndex(isPrime)); // 5

    // Example: 3

        // Find index using arrow function

        const fruits4 = ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"];
        const index2 = fruits4.findLastIndex((fruit) => fruit === "blueberries");
        console.log(index2); // 3
        console.log(fruits4[index2]); // blueberries

//......................................................................................

// => flat()

    // The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

    // Syntax :

        // flat();
        // flat(depth);

    // Example: 1

        const arr1 = [0, 1, 2, [3, 4]];
        console.log(arr1.flat());
        // output: [0, 1, 2, 3, 4]

        const arr2 = [0, 1, 2, [[[3, 4]]]];
        console.log(arr2.flat(2));
        // output: [0, 1, 2, [3, 4]]

    // Example: 2

        // reduce and concat

        const arr3 = [1, 2, [3, 4]];

        // To flat single level array
        arr3.flat();
        // is equivalent to
        arr3.reduce((acc, val) => acc.concat(val), []);
        // [1, 2, 3, 4]

        // or with decomposition syntax
        const flattened = arr3 => [].concat(...arr3);

    // Example: 3

        // reduce + concat + isArray + recursivity

        const arr4 = [1, 2, [3, 4, [5, 6]]];

        // to enable deep level flatten use recursion with reduce and concat
        function flatDeep(arr4, d = 1) {
        if (!Array.isArray(arr4)) {
            return arr4;
        }
        return d > 0
            ? arr4.reduce((acc, val) => acc.concat(flatDeep(val, d - 1)), [])
            : arr4.slice();
        }

        flatDeep(arr4, Infinity);
        // [1, 2, 3, 4, 5, 6]

    // Example: 4

        // Use a stack

        // non recursive flatten deep using a stack
        // note that depth control is hard/inefficient as we will need to tag EACH value with its own depth
        // also possible w/o reversing on shift/unshift, but array OPs on the end tends to be faster
        function flatten(input) {
            const stack = [...input];
            const res = [];
            while (stack.length) {
                // pop value from stack
                const next = stack.pop();
                if (Array.isArray(next)) {
                // push back array items, won't modify the original input
                stack.push(...next);
                } else {
                res.push(next);
                }
            }
            // reverse to restore input order
            return res.reverse();
        }

        const arr5 = [1, 2, [3, 4, [5, 6]]];
        flatten(arr5);
        // [1, 2, 3, 4, 5, 6]

    // Example: 5

        // Use Generator function

        function* flatten(array, depth) {
        if (depth === undefined) {
            depth = 1;
        }

        for (const item of array) {
            if (Array.isArray(item) && depth > 0) {
            yield* flatten(item, depth - 1);
            } else {
            yield item;
            }
        }
        }

        const arr6 = [1, 2, [3, 4, [5, 6]]];
        const flattened2 = [...flatten(arr6, Infinity)];
        // [1, 2, 3, 4, 5, 6]

    // Example: 6

        // Flattening nested arrays

        const arr7 = [1, 2, [3, 4]];
        arr7.flat();
        // [1, 2, 3, 4]

        const arr8 = [1, 2, [3, 4, [5, 6]]];
        arr8.flat();
        // [1, 2, 3, 4, [5, 6]]

        const arr9 = [1, 2, [3, 4, [5, 6]]];
        arr9.flat(2);
        // [1, 2, 3, 4, 5, 6]

        const arr10 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
        arr10.flat(Infinity);
        // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    // Example: 7

        // Flattening and array holes

        const arr11 = [1, 2, , 4, 5];
        arr11.flat();
        // [1, 2, 4, 5]

//......................................................................................

// => flatMap()

// Example: 

//......................................................................................

// => forEach()

// Example: 

//......................................................................................

// => from()

// Example: 

//......................................................................................

// => group()

// Example: 

//......................................................................................

// => groupToMap()

// Example: 

//......................................................................................

// => includes()

// Example: 

//......................................................................................

// => indexOf()

// Example: 

//......................................................................................

// => isArray()

// Example: 

//......................................................................................

// => join()

// Example: 

//......................................................................................

// => keys()

// Example: 

//......................................................................................

// => lastIndexOf()

// Example: 

//......................................................................................

// => map()

// Example: 

//......................................................................................

// => of()

// Example: 

//......................................................................................

// => pop()

// Example: 

//......................................................................................

// => push()

// Example: 

//......................................................................................

// => reduce()

// Example: 

//......................................................................................

// => reduceRight()

// Example: 

//......................................................................................

// => reverse()

// Example: 

//......................................................................................

// => shift()

// Example: 

//......................................................................................

// => slice()

// Example: 

//......................................................................................

// => some()

// Example: 

//......................................................................................

// => sort()

// Example: 

//......................................................................................

// => splice()

// Example: 

//......................................................................................

// => toLocaleString()

// Example: 

//......................................................................................

// => toString()

// Example: 

//......................................................................................

// => unshift()

// Example: 

//......................................................................................

// => values()

// Example: 

//......................................................................................




