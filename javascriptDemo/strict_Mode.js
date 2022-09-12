console.log("Strict Mode");

// =====================================================================================

// Topic :

/*
    # What is Strict Mode?
    # Invoking strict mode
        => Strict mode for scripts
        => Strict mode for functions
        => Strict mode for modules
        => Strict mode for classes
    # Changes in strict mode
        => Converting mistakes into errors
        => Simplifying variable uses
        => Making eval and arguments simpler
        => "Securing" JavaScript
    # Strict mode in browsers
*/

// =====================================================================================

// What is Strict Mode? 

/* 
    JavaScript's strict mode is a way to opt in to a restricted variant of JavaScript, thereby implicitly opting-out of "sloppy mode". Strict mode isn't just a subset: it intentionally has different semantics from normal code. Browsers not supporting strict mode will run strict mode code with different behavior from browsers that do, so don't rely on strict mode without feature-testing for support for the relevant aspects of strict mode. Strict mode code and non-strict mode code can coexist, so scripts can opt into strict mode incrementally.

    Strict mode makes several changes to normal JavaScript semantics:
        => Eliminates some JavaScript silent errors by changing them to throw errors.
        => Fixes mistakes that make it difficult for JavaScript engines to perform optimizations: strict mode code can sometimes be made to run faster than identical code that's not strict mode.
        => Prohibits some syntax likely to be defined in future versions of ECMAScript.
*/

// =====================================================================================

// Invoking strict mode :

// =====================================================================================

    // Strict mode for scripts : 

    // Example : 

        // Whole-script strict mode syntax
        'use strict';
        const v = "Hi! I'm a strict mode script!";


    //......................................................................................

    // Strict mode for functions : 

    // Example : 

        function myStrictFunction() {
        // Function-level strict mode syntax
        "use strict";
        function nested() {
            return "And so am I!";
        }
        return `Hi! I'm a strict mode function! ${nested()}`;
        }
        function myNotStrictFunction() {
        return "I'm not strict.";
        }

    //......................................................................................

    // Strict mode for modules : 

    // ECMAScript 2015 introduced JavaScript modules and therefore a 3rd way to enter strict mode. The entire contents of JavaScript modules are automatically in strict mode, with no statement needed to initiate it.

    // Example : 

        // function myStrictFunction() {
        // because this is a module, I'm strict by default
        // }
        // export default myStrictFunction;

    //......................................................................................

    // Strict mode for classes : 

    // All parts of ECMAScript classes are strict mode code, including both class declarations and class expressions — and so also including all parts of class bodies.

// =====================================================================================

// Changes in strict mode :

    // Strict mode changes both syntax and runtime behavior. Changes generally fall into these categories: changes converting mistakes into errors (as syntax errors or at runtime), changes simplifying how the particular variable for a given use of a name is computed, changes simplifying eval and arguments, changes making it easier to write "secure" JavaScript, and changes anticipating future ECMAScript evolution.

// =====================================================================================

    // Converting mistakes into errors : 

    //......................................................................................

    // Example : 1

        'use strict';
        let mistypeVariable;
        mistypeVariable = 17;    // Assuming no global variable mistypeVariable exists
                                // this line throws a ReferenceError due to the
                                // misspelling of "mistypeVariable" (lack of an "a")

    // Example : 2

        'use strict';

        // Assignment to a non-writable global
        var undefined = 5; // throws a TypeError
        var Infinity = 5; // throws a TypeError

        // Assignment to a non-writable property
        const obj1 = {};
        Object.defineProperty(obj1, 'x', { value: 42, writable: false });
        obj1.x = 9; // throws a TypeError

        // Assignment to a getter-only property
        const obj2 = { get x() { return 17; } };
        obj2.x = 5; // throws a TypeError

        // Assignment to a new property on a non-extensible object
        const fixed = {};
        Object.preventExtensions(fixed);
        fixed.newProp = 'ohai'; // throws a TypeError

    // Example : 3

        'use strict';
        delete Object.prototype;  // throws a TypeError


    // Example : 4

        // function sum(a, a, c) { // !!! syntax error
        //     'use strict';
        //     return a + a + c;   // wrong if this code ran
        // }

    // Example : 5

        'use strict';
        const sum = 015 +           // !!! syntax error
                    197 +
                    142;

        const sumWithOctal = 0o10 + 8;
        console.log(sumWithOctal);  // 16    

    // Example : 6

        'use strict';

        false.true = '';         // TypeError
        (14).sailing = 'home';   // TypeError
        'with'.you = 'far away'; // TypeError

    // Example : 6

        'use strict';
        const o = { p: 1, p: 2 }; // syntax error prior to ECMAScript 2015


    //......................................................................................

    // Converting mistakes into errors : 

    

