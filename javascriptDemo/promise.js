console.log("Promise");

// =====================================================================================

// Topic : 

/*
    # What is Promises?
    # Benefits of Promises
    # A Promise has four states
    # Parameters
    # Promise Consumers
    =>  then() 
    =>  catch() 
*/

// =====================================================================================

// What is Promises?

    // Promises are used to handle asynchronous operations in JavaScript. They are easy to manage when dealing with multiple asynchronous operations where callbacks can create callback hell leading to unmanageable code. 

    // Syntax :

        // var promise = new Promise(function(resolve, reject) {
        //   //do something
        // });

    // Example : 

        var promise = new Promise(function(resolve, reject) {
            const x = "Hello";
            const y = "Hello"
            if(x === y) {
                resolve();
            } else {
                reject();
            }
        });
        
        promise.
            then(function () {
                console.log('Success, You are a Hello');
            }).
            catch(function () {
                console.log('Some error has occurred');
            });

        // Output:
        // Success, You are a Hello

// =====================================================================================

// Benefits of Promises : 

    // => Improves Code Readability
    // => Better handling of asynchronous operations
    // => Better flow of control definition in asynchronous logic
    // => Better Error Handling

// =====================================================================================

// A Promise has four states : 

    // fulfilled    : Action related to the promise succeeded
    // rejected     : Action related to the promise failed
    // pending      : Promise is still pending i.e. not fulfilled or rejected yet
    // settled      : Promise has fulfilled or rejected

// =====================================================================================

// Parameters : 

    // => Promise constructor takes only one argument which is a callback function (and that callback function is also referred as anonymous function too).
    // => Callback function takes two arguments, resolve and reject
    // => Perform operations inside the callback function and if everything went well then call resolve.
    // => If desired operations do not go well then call reject.

// =====================================================================================

// Promise Consumers :

    // Promises can be consumed by registering functions using .then and .catch methods.

    // 1. then() 
    // 2. catch()  

    //......................................................................................

    // then() :

    // then() is invoked when a promise is either resolved or rejected. It may also be defined as a career which takes data from promise and further executes it successfully.

    // Parameters: 

        // then() method takes two functions as parameters. 
            // => First function is executed if promise is resolved and a result is received.
            // => Second function is executed if promise is rejected and an error is received. (It is optional and there is a better way to handle error using .catch() method

    // Syntax:

        // .then(function(result){
        //         //handle success
        //     }, function(error){
        //         //handle error
        //     })

    //......................................................................................

    // Example : 

        var promise = new Promise(function(resolve, reject) {
        resolve("resolve function");
        });

        promise.then(function(successMessage) {
            //success handler function is invoked
            console.log(successMessage);
        }, function(errorMessage) {
            console.log(errorMessage);
        });

    //......................................................................................

    // catch() :

    // catch() is invoked when a promise is either rejected or some error has occurred in execution. It is used as an Error Handler whenever at any step there is a chance of getting an error.

    // Parameters: 

    // catch() method takes one function as parameter. 
        // => Function to handle errors or promise rejections.(.catch() method internally calls .then(null, errorHandler), i.e. .catch() is just a shorthand for .then(null, errorHandler) )

    // Syntax:

        // .catch(function(error){
        //     //handle error
        //  })

    //......................................................................................

    // Example : 

        var promise = new Promise(function(resolve, reject) {
            throw new Error("Some error has occurred");
        });

        promise
        .then(function(successMessage) {
            console.log(successMessage);
        })
        .catch(function(errorMessage) {
            //error handler function is invoked
            console.log(errorMessage);
        });

        // Output:
        // Error: Some error has occurred

// =====================================================================================
