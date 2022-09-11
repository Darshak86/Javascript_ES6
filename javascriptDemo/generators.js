console.log("Generators");

// =====================================================================================

// Topic :

/*
    # What is Generators ?
    # Types of Generators : 
        => Generator functions 
        => Generator Objects.
    # Encountering yield and yield* syntax
    # Another method to create iterable
    # Return from a generator function 
    # How to throw an exception from generator
    # Calling a generator from another generator
    # Limitation of Generators 
        => you can’t yield inside a callback in generators 
    # Using async generators (for api call)
    
*/

// =====================================================================================

//  # What is Generators ?

// In JavaScript, generators provide a new way to work with functions and iterators/objects.

// Using a generator,

    // you can stop the execution of a function from anywhere inside the function
    // and continue executing code from a halted position

// =====================================================================================

//  # Types of Generators : 

//......................................................................................

//  Generator functions : 

// A generator-function is defined like a normal function, but whenever it needs to generate a value, it does so with the yield keyword rather than return. The yield statement suspends function’s execution and sends a value back to caller, but retains enough state to enable function to resume where it is left off. When resumed, the function continues execution immediately after the last yield run. 

// Syntax : 
 
    // An example of generator function

    // function* gen(){
    //      yield 1;
    //      yield 2;
    //      ...
    //      ...
    // }

//......................................................................................

//  Generator-Object : 

// Generator functions return a generator object. Generator objects are used either by calling the next method on the generator object or using the generator object in a “for of” loop (as shown in the above program) 

// The Generator object is returned by a generating function and it conforms to both the iterable protocol and the iterator protocol.

//......................................................................................

// Example : 1 

    // Generate Function generates three
    // different numbers in three calls
    function * fun()
    {
        yield 10;
        yield 20;
        yield 30;   
    }
    
    // Calling the Generate Function
    var gen = fun();
    console.log(gen.next().value); // output : 10
    console.log(gen.next().value); // output : 20
    console.log(gen.next().value); // output : 30

// Example : 2

// code to print infinite series of natural numbers using a simple generator.

    // Generate Function generates an
    // infinite series of Natural Numbers
    function * nextNatural()
    {
        var naturalNumber = 1;
        // Infinite Generation
        while (true) {
            yield naturalNumber++;
        }
    }
    
    // Calling the Generate Function
    var gen = nextNatural();
    
    // Loop to print the first
    // 10 Generated number
    for (var i = 0; i < 10; i++) {
        // Generating Next Number
        console.log(gen.next().value); // output : 10
    }

    // output : 

    // 1
    // 2
    // 3
    // 4
    // 5
    // 6
    // 7
    // 8
    // 9
    // 10

// Example : 3

// how to manually return from a generator

    var array = ['a', 'b', 'c'];
    function* generator(arr) {
    let i = 0;
    while (i < arr.length) {
        yield arr[i++]
    }
    }
    
    const it = generator(array);
    // console.log(it)
    
    // we can do it.return() to finish the generator

// =====================================================================================

// # Encountering yield and yield* syntax

// yield : 

    // pauses the generator execution and returns the value of the expression which is being written after the yield keyword.

// yield* : 

    // it iterates over the operand and returns each value until done is true.

//......................................................................................

// Example :

    const arr = ["a", "b", "c"];

    function* generator() {
        yield 1;
        yield* arr;
        yield 2;
    }

    for (let value of generator()) {
        console.log(value);
    }

    // output : 
    // 1
    // a
    // b
    // c
    // 2

// =====================================================================================

// # Another method to create iterable

//......................................................................................

// Example :

    var createOwnIterable = {
    *[Symbol.iterator]() {
        yield "a";
        yield "b";
        yield "c";
    }
    };

    for (let value of createOwnIterable) {
        console.log(value);
    }

    // output : 
    // a
    // b
    // c

// =====================================================================================

// # Return from a generator function 

//......................................................................................

// Example :

    function* generator() {
        yield 'a';
        return 'result';
        yield 'b';
    }
    
    var it1 = generator();

    console.log(JSON.stringify(it1.next()));
    // output : {value: "a", done: false}

    console.log(JSON.stringify(it1.next()));
    // output : {value: "result", done: true}

// =====================================================================================

// # How to throw an exception from generator

//......................................................................................

// Example :

function* generator() {
  throw new Error('Error Occurred');
}
 
// const it2 = generator();

// console.log(JSON.stringify(it2.next()));
// output : Uncaught Error: Error Occurred

// =====================================================================================

// # Calling a generator from another generator

//......................................................................................

// Example :

    function* firstGenerator() {
        yield 2;
        yield 3;
    }

    function* secondGenerator() {
        yield 1;
        yield* firstGenerator();
        yield 4;
    }

    for (let value of secondGenerator()) {
        console.log(value);
    }

    // output : 
        // 1
        // 2
        // 3
        // 4
    

// =====================================================================================

// # Limitation of Generators 

//......................................................................................

// => you can’t yield inside a callback in generators 

// Example :

    // function* generator() {
    //     ["a", "b", "c"].forEach(value => yield value); // output :  This will give syntax error
    // }

// =====================================================================================

// # Using async generators (for api call)//  # Types of Generators : 

//......................................................................................

// Example :

    const firstPromise = () => {
         return new Promise((resolve, reject) => {
             setTimeout(() => resolve(1), 5000)
         })
    }
    
    const secondPromise = () => {
         return new Promise((resolve, reject) => {
             setTimeout(() => resolve(2), 3000)
         })
    }
    
    async function* generator() {
        const firstPromiseResult = await firstPromise();
         yield firstPromiseResult;
        const secondPromiseResult = await secondPromise();
        yield secondPromiseResult;
    }
    
    var it22 = generator();

    // for await(let value of it22){
    //     console.log(value);
    // }

    // output : 
    // (after 5 seconds)
    // 1 
    // (after 3 seconds)
    // 2

// =====================================================================================

