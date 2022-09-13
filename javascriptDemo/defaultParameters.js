console.log("Default Parameter");

// =====================================================================================

// Topic : 

/*
    # What is Default Parameter?
    # Passing undefined vs. other falsy values
    # Evaluated at call time
    # Earlier parameters are available to later default parameters
    # Destructured parameter with default value assignment
*/


// =====================================================================================

// What is Default Parameter?

    // Default function parameters allow named parameters to be initialized with default values if no value or undefined is passed.

    // Syntax :

        // function fnName(param1 = defaultValue1, /* … ,*/ paramN = defaultValueN) {
        //   // …
        // }

    //......................................................................................

    // Example : 1

        // you can assign 1 as the default value for b in the function head

        function multiply(a, b = 1) {
            return a * b;
        }

        console.log(multiply(5, 2))         // 10
        console.log(multiply(5))            // 5
        console.log(multiply(5, undefined)) // 5

    // Example : 2

        // Parameters are still set left-to-right, overwriting default parameters even if there are later parameters without defaults.

        function f(x = 1, y) {
            return [x, y];
        }

        console.log(f())    // [1, undefined]
        console.log(f(2))   // [2, undefined]

        // Note: Parameters after the first default parameter will not contribute to the function's length.

     // Example : 3

        //   the following function will throw a ReferenceError when invoked, because the default parameter value does not have access to the child scope of the function body.

        // function f(a = go()) {
        //     function go() {
        //         return ":P";
        //     }
        // }

        // console.log(f()); // ReferenceError: go is not defined 

        // This function will print the value of the parameter a, because the variable var a is hoisted only to the top of the scope created for the function body, not the parent scope created for the parameter list, so its value is not visible to b.

        function f(a, b = () => console.log(a)) {
            var a = 1;
            b();
        }

        console.log(f())    // undefined
        console.log(f(5))   // 5

// =====================================================================================

// Passing undefined vs. other falsy values :

// In the second call in this example, even if the first argument is set explicitly to undefined (though not null or other falsy values), the value of the num argument is still the default.

//......................................................................................

    // Example : 

        function test(num = 1) {
            console.log(typeof num);
        }

        console.log(test())             // 'number' (num is set to 1)
        console.log(test(undefined))    // 'number' (num is set to 1 too)

        // test with other falsy values:
        console.log(test(""))           // 'string' (num is set to '')
        console.log(test(null))         // 'object' (num is set to null)


// =====================================================================================

//  Evaluated at call time :

// The default argument is evaluated at call time. Unlike with Python (for example), a new object is created each time the function is called.

//......................................................................................

    // Example : 

        function append(value, array = []) {
            array.push(value);
            return array;
        }

        console.log(append(1)) // [1]
        console.log(append(2)) // [2], not [1, 2]

        // This even applies to functions and variables

        function callSomething(thing = something()) {
             return thing;
        }
        let numberOfTimesCalled = 0;
        function something() {
             numberOfTimesCalled += 1;
            return numberOfTimesCalled;
        }

        console.log(callSomething()) // 1
        console.log(callSomething()) // 2

// =====================================================================================

//  Earlier parameters are available to later default parameters :

    // Parameters defined earlier (to the left) are available to later default parameters

//......................................................................................

    // Example : 

        function greet(name, greeting, message = `${greeting} ${name}`) {
            return [name, greeting, message];
        }

        console.log(greet("David", "Hi"))                       // ["David", "Hi", "Hi David"]
        console.log(greet("David", "Hi", "Happy Birthday!"))    // ["David", "Hi", "Happy Birthday!"]

        // This functionality can be approximated like this, which demonstrates how many edge cases are handled

        function go() {
             return ":P";
        }

        function withDefaults(
            a,
            b = 5,
            c = b,
            d = go(),
            e = this,
            f = arguments,
            g = this.value,
            ) {
            return [a, b, c, d, e, f, g];
        }

        function withoutDefaults(a, b, c, d, e, f, g) {
            switch (arguments.length) {
                case 1:
                b = 5;
                case 2:
                c = b;
                case 3:
                d = go();
                case 4:
                e = this;
                case 5:
                f = arguments;
                case 6:
                g = this.value;
            }
            return [a, b, c, d, e, f, g];
        }

        console.log(withDefaults.call({ value: "=^_^=" }))
        // [undefined, 5, 5, ":P", {value:"=^_^="}, arguments, "=^_^="]

        console.log(withoutDefaults.call({ value: "=^_^=" }))
        // [undefined, 5, 5, ":P", {value:"=^_^="}, arguments, "=^_^="]



// =====================================================================================

//  Destructured parameter with default value assignment :

    // You can use default value assignment with the destructuring assignment syntax.

    // A common way of doing that is to set an empty object/array as the default value the destructured parameter; for example: [x = 1, y = 2] = []. This makes it possible to pass nothing to the function and still have those values prefilled.

//......................................................................................

    // Example : 

    function preFilledArray([x = 1, y = 2] = []) {
        return x + y;
    }

    console.log(preFilledArray())       // 3
    console.log(preFilledArray([]))     // 3
    console.log(preFilledArray([2]))    // 4
    console.log(preFilledArray([2, 3])) // 5

    // Works the same for objects:
    function preFilledObject({ z = 3 } = {}) {
        return z;
    }

    console.log(preFilledObject())          // 3
    console.log(preFilledObject({}))        // 3
    console.log(preFilledObject({ z: 2 }))  // 2

