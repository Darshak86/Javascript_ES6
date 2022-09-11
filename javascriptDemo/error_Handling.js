console.log("Error Handling");

// =====================================================================================

// What is Error? 

// Errors can be coding errors made by the programmer, errors due to wrong input, and other unforeseeable things.

/*
    # Throw 
    # Try...Catch...Finally

    Try     => The try statement defines a code block to run (to try).
    catch   => The catch statement defines a code block to handle any error.
    finally => The finally statement defines a code block to run regardless of the result.
    throw   => The throw statement defines a custom error.

    Syntax:

        try
        {
            // code that may throw an error
        }
        catch(ex)
        {
            // code to be executed if an error occurs
        }
        finally{
            // code to be executed regardless of an error occurs or not
        }
*/

// =====================================================================================

// Try... catch :

// Example : 

    try {
        var result = Sum(10, 20); // Sum is not defined yet
    } catch (error) {
        console.log(error)  
    }

    // Output : ReferenceError: Sum is not defined

//......................................................................................

// Try... catch...finally :

// Example :

    try {
        var result = Sum(10, 20); // Sum is not defined yet
    } catch (error) {
        console.log(error);  
    } finally {
        console.log("finally block executed");
    }

    // Output : ReferenceError: Sum is not defined
    // Output : finally block executed

//......................................................................................

// throw :

// Use throw keyword to raise a custom error.

// Example :

    try {
        throw "Error occurred";
    } catch (error) {
        console.log(error);  
    }

    // Output : Error occurred

//......................................................................................

// throw error with error info :

// Example :

    try {
        throw {
            number: 101,
            message: "Error occurred"
        };
    } catch (error) {
        console.log(error.number + "- " + error.message);
    }

    // Output : 101- Error occurred

//......................................................................................
