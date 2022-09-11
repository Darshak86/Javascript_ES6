console.log("Iterators and Iterables");

// =====================================================================================

// Topic : 

/*
    # What is Iterables and Iterators?
    # Iterate Through Iterables
    # next() Method
    # User Defined Iterator
*/

// =====================================================================================

// What is Iterables and Iterators :

    // JavaScript provides a protocol to iterate over data structures. This protocol defines how these data structures are iterated over using the for...of loop.

// The concept of the protocol can be split into:

    // iterable
    // iterator

// The iterable protocol mentions that an iterable should have the Symbol.iterator key.

//......................................................................................

// Iterables :

    // The data structures that have the Symbol.iterator() method are called iterables. 

    // Example :

        // Arrays, Strings, Sets, etc.

//......................................................................................

// Iterators : 

    // An iterator is an object that is returned by the Symbol.iterator() method.

//......................................................................................

// The iterator protocol provides the next() method to access each element of the iterable (data structure) one at a time.

//......................................................................................

// Example : 

    // iterables having Symbol.Iterator()

    const arr = [1, 2, 3];
    // calling the Symbol.iterator() method
    const arrIterator = arr[Symbol.iterator]();
    // gives Array Iterator
    console.log(arrIterator); // output :  Array Iterator {}

    const str = "hello";
    // calling the Symbol.iterator() method
    const strIterator = str[Symbol.iterator]();
    // gives String Iterator
    console.log(strIterator); // output :  StringIterator {}

// =====================================================================================

// Iterate Through Iterables :

    // You can use the for...of loop to iterate through these iterable objects.
    // You can iterate through the Symbol.iterator() method

//......................................................................................

// Example : 

    const number = [1, 2, 3];

    for (let n of number[Symbol.iterator]()) {
        console.log(n);
    }

    // Output : 
    // 1
    // 2
    // 3

// =====================================================================================

// next() Method :

// The iterator object has a next() method that returns the next item in the sequence.
// The next() method contains two properties: value and done.

// value :
    // The value property can be of any data type and represents the current value in the sequence.

// done :
    // The done property is a boolean value that indicates whether the iteration is complete or not. If the iteration is incomplete, the done property is set to false, else it is set to true.

//......................................................................................

// Example : 

    // array iterables

    const arr1 = ['h', 'e', 'l', 'l', 'o'];

    let arrIterator1 = arr1[Symbol.iterator]();

    console.log(arrIterator1.next());   // {value: "h", done: false}
    console.log(arrIterator1.next());   // {value: "e", done: false}
    console.log(arrIterator1.next());   // {value: "l", done: false}
    console.log(arrIterator1.next());   // {value: "l", done: false}
    console.log(arrIterator1.next());   // {value: "o", done: false}
    console.log(arrIterator1.next());   // {value: undefined, done: true}

    // You can call next() repeatedly to iterate over an arrIterator object.
        // The next() method returns an object with two properties: value and done.
        // When the next() method reaches the end of the sequence, then the done property is set to false.

// =====================================================================================

// User Defined Iterator :

    // You can also create your own iterator and call next() to access the next element.

//......................................................................................

// Example : 

    function displayElements(arr) {
        // to update the iteration
        let n = 0;

        return {
            // implementing the next() function
            next() {
                if (n < arr.length) {
                    return {
                        value: arr[n++],
                        done: false
                    };
                }

                return {
                    value: undefined,
                    done: true
                };
            }
        };
    }

    const arr2 = ["h", "e", "l", "l", "o"];

    const arrIterator2 = displayElements(arr2);

    console.log(arrIterator2.next());   // {value: "h", done: false}
    console.log(arrIterator2.next());   // {value: "e", done: false}
    console.log(arrIterator2.next());   // {value: "l", done: false}
    console.log(arrIterator2.next());   // {value: "l", done: false}
    console.log(arrIterator2.next());   // {value: "o", done: false}
    console.log(arrIterator2.next());   // {value: undefined, done: true}

    // In the above program, we have created our own iterator. The displayElements() function returns value and done property.

    // Each time the next() method is called, the function gets executed once and displays the value of an array.
    // Finally, when all the elements of an array are exhausted, the done property is set to true, with value as undefined.
      
    
    

