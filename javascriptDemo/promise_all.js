console.log("Promise.all() method");

// =====================================================================================

// What is Promise.all() method??

    // The Promise.all() method is actually a method of Promise object (which is also an object under JavaScript used to handle all the asynchronous operations), that takes an array of promises(an iterable) as an input. It returns a single Promise that resolves when all of the promises passed as an iterable, which have resolved or when the iterable contains no promises. In simple way, if any of the passed-in promises reject, the Promise.all() method asynchronously rejects the value of the promise that already rejected, whether or not the other promises have resolved. 

    // Syntax: 

        // Promise.all( iterable )

    // Example : 

        let first_promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("Resolved First after 1 second");
            }, 1000);
        });

        let second_promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("Resolved First after 2 seconds");
            }, 2000);
        });

        let third_promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("Resolved First after 3 seconds");
            }, 3000);
        });

        try {
            let result = Promise.all([
                first_promise,
                second_promise,
                third_promise
            ]);
             result.then(data => console.log(data));
        } catch (error) {
            console.log(error);
        }

        // Output: 
        // [
        //     "Resolved First after 1 second", 
        //     "Resolved First after 2 seconds", 
        //     "Resolved First after 3 seconds"
        // ];