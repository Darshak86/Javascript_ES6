// Short circuiting operators.

// AND short circuit  (&&)
// OR short circuit   (||)

// =====================================================================================

/*
    AND(&&) short circuit: 

    In case of AND, the expression is evaluated until we get one false result because the result will always be false, independent of the further conditions. If there is an expression with &&(logical AND), and the first operand itself is false, then a short circuit occurs, the further expression is not evaluated and false is returned.

    Example: Short circuiting using AND(&&) operator.
*/

//......................................................................................

// 1Example: 2

    // Since first operand is false and operator
    // is AND, Evaluation stops and false is
    // returned.
        console.log(false && true && true && false)  // false
    
    // Whole expression will be evaluated.
        console.log(true && true && true)            // true

// Example:  2

    let username = ""
    let mark = 45
    console.log( username && mark ? true  : false)  // false

// =====================================================================================

/* 
    OR(||) short circuit:
    
    In case of OR, the expression is evaluated until we get one true result because the result will always be true, independent of the further conditions. If there is an expression with ||(logical OR), and the first operand itself is true, then a short circuit occurs, evaluation stops, and true is returned.

    Example: Short circuiting using OR(||).
*/

//......................................................................................

// Example: 1

    // First operand is true and operator is ||, 
    // evaluation stops and true is returned.
        console.log(true || false || false)               // true
    
    // Evaluation stops at the second operand(true).
        console.log(false || true || true || false)       // true

// Example: 2

    let firstName = ""
    let age = 0
    console.log( firstName || age ? true  : false)  // false
    console.log( firstName || "firstName Not Available")  // firstName Not Available

// =====================================================================================

// Example: 

    let emailVerified = false
    let fullName = "abc"
    let result = (emailVerified && fullName) || "user not found";
    console.log(result) // user not found