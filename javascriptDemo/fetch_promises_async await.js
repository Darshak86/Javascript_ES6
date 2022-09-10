console.log("fetch, promises & async await");

// =====================================================================================

// Topic :

/*
    #  What is fetch ?
    #  api call using fetch
        => basic fetch function used
        => extra line remove
        => fetch in function                                                          // most used
        => fetch in arrow function                                                    // most used
    #  What is a Async/await ?
    #  api call with fetch ,async and await
        => Basic Call Api With Async/await
        => Call Api With Async/await and Error Handling                               // most used
        => Call Api With Async/await and Error Handling using arrow functions         // most used
*/

// =====================================================================================

/* 
    What is a fetch ?

    The fetch() method in JavaScript is used to request to the server and load the information on the webpages. The request can be of any APIs that return the data of the format JSON or XML. This method returns a promise.

    Syntax:

        fetch('url')           //api for the get request
        .then(response => response.json())
        .then(data => console.log(data));
*/

// =====================================================================================

// api call using fetch

//......................................................................................

// Example : 1

// basic fetch function used

fetch("https://jsonplaceholder.typicode.com/posts")
  .then(res => {
    return res.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  });

// Example : 2

// extra line remove

fetch("https://jsonplaceholder.typicode.com/posts")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.log(err));

// Example : 3

// fetch in function

function callApi() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => {
      return res.json();
    })
    .then(data => {
      console.log(data);
    })
    .catch(err => {
      console.log(err);
    });
}

callApi();

// Example : 4

// fetch in arrow function

const data = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => {
      return res.json();
    })
    .then(data => {
      console.log(data);
    })
    .catch(err => {
      console.log(err);
    });
};

data();

// =====================================================================================

/* 
    What is a Async/await ?

    There’s a special syntax to work with promises in a more comfortable fashion, called “async/await”. It’s surprisingly easy to understand and use.

    "async and await make promises easier to write"
    async makes a function return a Promise
    await makes a function wait for a Promise
*/

// =====================================================================================

// Example : 1

//  Basic Call Api With Async/await

async function callApiWithAsync() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  console.log(data);
}

callApiWithAsync();

// Example : 2

//  Call Api With Async/await and Error Handling

async function callApiWithAsyncError() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

callApiWithAsyncError();

// Example : 3

//  Call Api With Async/await and Error Handling using arrow functions

const fetchApi = async() =>{
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

fetchApi();
