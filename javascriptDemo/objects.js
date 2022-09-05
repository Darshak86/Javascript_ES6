console.log("Objects / Object Literals & destructuring");

// =====================================================================================

/* 
    What is a Object ?

    Objects are variables too. But objects can contain many values.
    Object values are written as name : value pairs (name and value separated by a colon).

    An object can be created with figure brackets {…} with an optional list of properties. A property is a “key: value” pair, where a key is a string (also called a “property name”), and value can be anything. Let us visualize this with the following syntax for creating an object in JavaScript.

    Syntax:

    let object_name = {
        key_name : value,
        ...
    }
 
    Example: 
    
    let person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
*/

//......................................................................................

// Example:

// It is a common practice to declare objects with the const keyword.

    const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
    };

//......................................................................................

// Print Object

    console.table(person);
    console.log(person);

// =====================================================================================================================

// Creating Objects

    //  1. Using the Object literal syntax
    //  2. Object Constructor 
    //  3. Constructors

//......................................................................................

// Using the Object literal syntax

// Example: 

    var obj = { member1: "value1", member2: "value2" };

//......................................................................................

// Object Constructor :

// Example: 

    const school = new Object();
    school.name = "Vivekanada school";
    school.location = "Delhi";
    school.established = 1971;

    school.displayInfo = function() {
      console.log(`${school.name} was established
		in ${school.established} at ${school.location}`);
    };

    school.displayInfo();

//......................................................................................

// Constructors: 

// Example: 

    function Vehicle(name, maker) {
    this.name = name;
    this.maker = maker;
    }
    
    let car1 = new Vehicle('Fiesta', 'Ford');
    let car2 = new Vehicle('Santa Fe', 'Hyundai')
    
    console.log(car1.name);    // Output: Fiesta
    console.log(car2.name);    // Output: Santa Fe

// =====================================================================================================================

// Accessing Object Members

//......................................................................................

// dot notation : 

    // Syntax:
    
        // objectName.memberName

// Example:

    console.log(`Username is ${person.firstName} ${person.lastName}.
    He is ${person.age} year old and his eye color is ${person.eyeColor}`);

//......................................................................................

// Bracket Notation : 

    // Syntax:
    
        // objectName["memberName"]

// Example:

    console.log(`Username is ${person["firstName"]} ${person["lastName"]}.
    He is ${person["age"]} year old and his eye color is ${person["eyeColor"]}`);

    // Like property names which are numbers, they must also be accessed using the bracket notation. 
    console.log(`${person.firstName.split(" ")[0]}`);  // john

// =====================================================================================================================

// Prototypes : 

    // Syntax : 

        // let obj = Object.create(prototype_object, propertiesObject)
        // the second propertiesObject argument is optional

// Example: 

    let footballers = { position: "Striker" };

    let footballer1 = Object.create(footballers);

    console.log(footballer1.position);  // Output : Striker

//......................................................................................

// Iterating over all keys of an object

// Example: 1 

    let person0 = { gender: "male" };

    var person1 = Object.create(person0);
    person1.name = "Adam";
    person1.age = 45;
    person1.nationality = "Australian";

    for (let key in person1) {
      console.log(key);
    } 

    // Output : name, age, nationality
    // and gender
    
// Example: 2

    for (const [key, value] of Object.entries(person1)) {
        console.log(`key is = ${key} , value is = ${value}`);
    }
    
    // Output : 
    // key is = name , value is = Adam
    // key is = age  , value is = 45
    // key is = nationality , value is = Australian
    // key is = gender , value is = male

//......................................................................................

// Deleting Properties

// Example: 1

    let obj1 = { propfirst: "Ram" };

    console.log(obj1.propfirst);   // Output : Name

    delete obj1.propfirst;

    console.log(obj1.propfirst);   // Output : undefined
    
// Example: 2 

    let obj2 = { propfirst: "Name" };
   
    console.log(obj1.propfirst);   // Output : Name

    let obj3 = Object.create(obj2);

    console.log(obj3.propfirst);  // Output : Name

    console.log(delete obj3.propfirst);  // Output : true.

    // Surprisingly Note that this will return true
    // regardless of whether the deletion was successful

    console.log(obj3.propfirst);  // Output : Name

//......................................................................................

// Inherited Properties

// Example: 

    // hasOwnProperty code in js
    const object1 = new Object();
    object1.property1 = 42;
    
    console.log(object1.hasOwnProperty('property1')); // true

// =====================================================================================================================

// Object Destructuring

//......................................................................................

// Example: 1

    let person11 = {
    firstName: "Ramesh",
    lastName: "Suresh",
    detail :{
        userAge : 56
    }
    };

    // Prior to ES6, when you want to assign properties of the person object to variables, you typically do it like this:

    let firstName = person11.firstName;
    let lastName = person11.lastName; 
    let personAge = person11.detail.userAge

    // ES6 introduces the object destructuring syntax that provides an alternative way to assign properties of an object to variables:

    // Syntax:

    // let { property1: variable1, property2: variable2 } = object;

    let { firstName: fname, lastName: lname ,detail:{userAge : years}} = person11;

    console.log(fname);     // Ramesh
    console.log(lname);     // Suresh
    console.log(years);     // 56

//......................................................................................

// Setting default values

// Example: 1

    let person2 = {
        firstName1: 'John',
        lastName1: 'Doe',
        currentAge1: 28
    };

    let { firstName1, lastName1, middleName1 = '', currentAge1: age = 18 } = person2;

    console.log(middleName1); // ''
    console.log(age); // 28

// Example: 2

    let person22 = {
    firstName2: 'John',
    lastName2: 'Doe',
    middleName2: 'C.',
    currentAge2: 28
    };

    let { firstName2,  lastName2, middleName2 = '', currentAge2: age2 = 18 } = person22;

    console.log(middleName2); // 'C.'
    console.log(age2); // 28

//......................................................................................

// Nested object destructuring

// Example: 1

    // Assuming that you have an employee object which has a name object as the property:

    let employee = {
    id: 1001,
    name: {
        fName: "John",
        lName: "Doe"
    }
    };

    // The following statement destructure the properties of the nested name object into individual variables:

    let {
        name: {
            fName,
            lName
        }
    } = employee;

    console.log(fName); // John
    console.log(lName); // Doe

//......................................................................................

// Destructuring function arguments

// Example: 1

    // Suppose you have a function that displays the person object:

    let display = person33 => console.log(`${person33.firstName} ${person33.lastName}`);

    let person33 = {
    firstName: "Salman",
    lastName: "Khan"
    };

    display(person33);

    // It’s possible to destructure the object argument passed into the function like this:

    let display1 = ({ firstName, lastName }) => console.log(`${firstName} ${lastName}`);

    display1(person33);

//......................................................................................

// Marge 2 object 

// Example: 1

// Using spread operator :

    const obj11 = {username : "abc" , course :"msc it"}
    const obj12 = { age : 21};
    const obj13 = {...obj11 , ... obj12}

    console.log(obj13) // {username: 'abc', course: 'msc it', age: 21}

// Example : 2 

// Add Some Value with marge object

    const obj14 = {id:"15" ,...obj11, ...obj12 ,address :"america"};

    console.log(obj14) // {id: '15', username: 'abc', course: 'msc it', age: 21, address: 'america'}

// Example : 3 

// Merge objects using Object.assign() method

    let person5 = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
    ssn: "123-456-2356"
    };

    let job = {
    jobTitle: "JavaScript Developer",
    country: "USA"
    };

    let employee5 = Object.assign(person5, job);
    console.log(employee5);

    // Output :
    //  {firstName: "John",
    //   lastName: "Doe",
    //   age: 25,
    //   ssn: "123-456-2356",
    //   jobTitle: "JavaScript Developer",
    //   country: "USA"
    // }

