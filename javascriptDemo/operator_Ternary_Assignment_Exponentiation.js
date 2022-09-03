// Ternary operator, Assignment Operator, Exponentiation Operator

// =====================================================================================

/* 
    What is a Ternary operator?

    A ternary operator evaluates a condition and executes a block of code based on the condition.
    Syntax : condition ? expression1 : expression2
*/

// Example: 1

    // program to check pass or fail
    // let marks = prompt('Enter your marks :');
        let marks = 45;
    // check the condition
        let result = marks >= 40 ? "pass" : "fail";
        console.log(`You ${result} the exam.`);   // You pass the exam.

// Example: 2

    // Ternary Operator Used Instead of if...else

    // check the age to determine the eligibility to vote
    // let age = 15;
    // let resultData;
    // if (age >= 18) {
    //       resultData = "You are eligible to vote.";
    // } else {
    //       resultData = "You are not eligible to vote yet.";
    // }
    // console.log(resultData);

    // ternary operator to check the eligibility to vote
        let age = 15;
        let resultData =
        age >= 18 ? "You are eligible to vote." : "You are not eligible to vote yet";
        console.log(resultData); // You are not eligible to vote yet

// Example: 3

    // Nested ternary operators

    // program to check if number is positive, negative or zero
        let a = 3;
        let response = a >= 0 ? (a == 0 ? "zero" : "positive") : "negative";
        console.log(`The number is ${response}.`); // The number is positive.

// Note: You should try to avoid nested ternary operators whenever possible as they make your code hard to read.

// Example: 4

    //multiple Conditional operators

        let mark = 95;
        let studentResult =
        mark < 40
            ? "Unsatisfactory"
            : mark < 60 ? "Average" : mark < 80 ? "Good" : "Excellent";

        console.log(studentResult); // Excellent

// =====================================================================================

/* 
    What is a Assignment operators?

    The Assignment operator is  equal (=) which assigns the value of right-hand operand to its left-hand operand. That is if a = b assigns the value of b to a.

    The simple assignment operator is used to assigning a value to a variable. The assignment operation evaluates to the assigned value. Chaining the assignment operator is possible in order to assign a single value to multiple variables. See the example.

    Syntax:
    data=value

//..........................................................................................................

            NAME	                            SHORTHAND OPERATOR	                        MEANING

    Addition Assignment	                               a+=b                                  a=a+b
    
    Subtraction Assignment	                           a-=b                                  a=a-b

    Multiplication Assignment	                       a*=b                                  a=a*b

    Division Assignment	                               a/=b                                  a=a/b

    Remainder Assignment	                           a%=b                                  a=a%b

    Exponentiation Assignment	                       a**=b                                 a=a**b

    Left Shift Assignment	                           a<<=b                                 a=a<<b

    Right Shift Assignment	                           a>>=b                                 a=a>>b

    Bitwise AND Assignment	                           a&=b                                  a=a&b

    Bitwise OR Assignment	                           a|=b                                  a=a | b

    Bitwise XOR Assignment	                           a^=b                                  a=a^b

*/

//......................................................................................

// Example: 1

    // Lets take some variables
        let a1=10
        let b1=20

        a1=b1 // Here, x is equal to 20
        b1=a1 // Here, y is equal to 10

// Example: 2

    let x = 10;
    let y = 20;

    console.log("Addition Assignment       :", (x += y))    //  30
    console.log("Subtraction Assignment    :", (x -= y));   //  10
    console.log("Multiplication Assignment :", (x *= y));   //  200
    console.log("Division Assignment       :", (x /= y));   // 	10  
    console.log("Remainder Assignment      :", (x %= y));   //  10
    console.log("Exponentiation Assignment :", (x **= y));  //  100000000000000000000
    console.log("Left Shift Assignment     :", (x <<= y));  // 	0
    console.log("Right Shift Assignment    :", (x >>= y));  //  0
    console.log("Bitwise AND Assignment    :", (x &= y));   // 	0
    console.log("Bitwise OR Assignment     :", (x |= y));   // 	20
    console.log("Bitwise XOR Assignment    :", (x ^= y));   //  0

// =====================================================================================

/*
    What is a Exponentiation operators?

    The exponentiation operator (**) raises the first operand to the power of the second operand.

    Example: x**y   

    x and y => is called operand
    **      => is called operator

*/

// Example:

    let x1 = 5;

    // x ** y produces the same result as Math.pow(x, y):
    let z = Math.pow(x1,2); 
    let z1 = x1 ** 2; 

    console.log (z)      // result is 25
    console.log (z1)     // result is 25
    console.log (x1**2)  // result is 25
    console.log (5**2)   // result is 25
    console.log (2**x1)  // result is 32

// =====================================================================================

/*
    Difference between == and === operator in JavaScript

    The ‘==’ operator tests for abstract equality i.e. it does the necessary type conversions before doing the equality comparison.

    But the ‘===’ operator tests for strict equality i.e it will not do the type conversion hence if the two values are not of the same type, when compared, it will return false.
*/

// Example: 1

    // In R.H.S. string "9" is converted into
    // number 9, hence returns true.
    console.log(9 == "9");   // true

    // Here no type conversion takes place,
    // hence returns false
    console.log(9 === "9");  // false

// Example: 2

    // Here L.H.S. is a string literal whereas
    // R.H.S. is a string object,
    // due to type conversion of string object into 
    // a string literal, it returns true.
    console.log("Geeks for Geeks" == new String("Geeks for Geeks")); // true

    // No type conversion takes place
    console.log("Geeks for Geeks" === new String("Geeks for Geeks")); // false

// Example: 3

    // Here number 1 is converted into true(boolean type)
    // as in javascript true is referred as 1 and false is
    // referred as 0, hence it returns true.
    console.log(true == "1");   // true

    // No type conversion so it returns false    
    console.log(true === "1");  // false









