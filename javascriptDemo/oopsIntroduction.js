console.log(
  "Oops Introduction, Class , Object and Inheritance , Constructors , Polymorphism , Encapsulation"
);

// =====================================================================================

// Topic :

/*
    # Oops Introduction
    # What is Object ?
    # What is Property ?
    # What is Method ?
    # What is Class ?
    # What is Encapsulation ?
    # What is Inheritance ?
    # What is Polymorphism ?
    # What is Constructors ?
*/

// =====================================================================================

// Oops Introduction : 

    // There are certain features or mechanisms which makes a Language Object-Oriented like: 

    // Object
    // Classes
    // Encapsulation
    // Inheritance
    // Polymorphism

// =====================================================================================

/*
    # What is Object ?

        An Object is a unique entity that contains properties and methods.

        An Object is an instance of a class. Objects are everywhere in JavaScript, almost every element is an Object whether it is a function, array, or string. 

        Example:

            “car” is a real life Object. 
        
    ......................................................................................

    # What is Property ? 

        The characteristics of an Object are called Properties in Object-Oriented Programming.

        Example:

            Car has some characteristics like color, type, model, horsepower, etc.

    ......................................................................................

    # What is Method ?

        the actions are called methods. 

        Example:

            Car performs certain actions like drive.

    ......................................................................................

    Note: A Method in javascript is a property of an object whose value is a function. 

*/

// =====================================================================================

// Object :

    // Object can be created in some ways in JavaScript: 

        // 1. Using an Object Literal 
        // 2. Using an Object Constructor
        // 3. Object.create() method

    //......................................................................................

    // 1. Using an Object Literal 

    // Example :

        //Defining object
        let person = {
            first_name:'a',
            last_name: 'b',

            //method
            getFunction : function(){
                return (`The name of the person is
                ${person.first_name} ${person.last_name}`)
            },

            //object within object
            phone_number : {
                mobile:'12345',
                landline:'6789'
            }
        }
        console.log(person.getFunction());          // Output : The name of the person is a b
        console.log(person.phone_number.landline);  // Output : 6789

    //......................................................................................

    // 2. Using an Object Constructor

    // Example : 

        //using a constructor
        function person11(first_name,last_name){
            this.first_name = first_name;
            this.last_name = last_name;
        }
        //creating new instances of person object
        let person111 = new person11('a','b');
        let person2 = new person11('c','d');
                                
        console.log(person111.first_name);                           // Output : a
        console.log(`${person2.first_name} ${person2.last_name}`);   // Output : c d

    //......................................................................................

    // 3. Object.create() method

    // Example : 

        // simple object with some properties
        const coder = {
            isStudying : false,
            printIntroduction : function(){
                console.log(`My name is ${this.name}. Am I
                studying? : ${this.isStudying}.`)
            }
        }
        // Object.create() method
        const me = Object.create(coder);
        // "name" is a property set on "me", but not on "coder"
        me.name = 'a';
        // Inherited properties can be overwritten
        me.isStudying = true;
        me.printIntroduction();

        // Output : My name is a. Am I studying? : true.

// =====================================================================================

// Classes : 

// =====================================================================================

// What is Class ?

    // Classes are blueprint of an Object. A class can have many Objects because class is a template while Object are instances of the class or the concrete implementation. 

    // Before we move further into implementation, we should know unlike other Object Oriented Language there are no classes in JavaScript we have only Object. To be more precise, JavaScript is a prototype based Object Oriented Language, which means it doesn’t have classes, rather it defines behaviors using a constructor function and then reuse it using the prototype. 

    // Note: Even the classes provided by ECMA2015 are objects.

    // # or

    // JavaScript classes, introduced in ECMAScript 2015, are primarily syntactical sugar over JavaScript’s existing prototype-based inheritance. The class syntax is not introducing a new object-oriented inheritance model to JavaScript. JavaScript classes provide a much simpler and clearer syntax to create objects and deal with inheritance. 
    // – Mozilla Developer Network

//......................................................................................

// Example : 1

    // Defining class using es6
    class Vehicle {
        constructor(name, maker, engine) {
            this.name = name;
            this.maker = maker;
            this.engine = engine;
        }
        getDetails(){
            return (`The name of the bike is ${this.name}.`)
        }
    }

    // Making object with the help of the constructor
    let bike1 = new Vehicle('Honda', 'Suzuki', '1340cc');
    let bike2 = new Vehicle('Ninja', 'Kawasaki', '998cc');

    console.log(bike1.name);            // Output : Honda
    console.log(bike2.maker);           // Output : Kawasaki
    console.log(bike1.getDetails());    // Output : The name of the bike is Honda.

// Example : 2

    // Defining class in a Traditional Way.
    function Vehicle1(name,maker,engine){
        this.name = name,
        this.maker = maker,
        this.engine = engine
    };

    Vehicle1.prototype.getDetails = function(){
        console.log('The name of the bike is '+ this.name);
    }

    let bike11 = new Vehicle1('Hero','Suzuki','1340cc');
    let bike22 = new Vehicle1('Ninja','Kawasaki','998cc');

    console.log(bike11.name);           // Output : Hero
    console.log(bike22.maker);          // Output : Kawasaki
    bike11.getDetails();                // Output : The name of the bike is Hero.

// =====================================================================================

// Encapsulation :

// =====================================================================================

// What is Encapsulation ?

    // The process of wrapping properties and functions within a single unit is known as encapsulation. 

//......................................................................................

// Example : 1

    //encapsulation example
    class person33{
        constructor(name,id){
            this.name = name;
            this.id = id;
        }
        add_Address(add){
            this.add = add;
        }
        getDetails(){
            console.log(`Name is ${this.name} , Address is: ${this.add}`);
        }
    }

    let person3 = new person33('a',21);
    person3.add_Address('Delhi');
    person3.getDetails();   // Output : Name is a , Address is: Delhi

    // In the above example we simply create a person Object using the constructor and Initialize its properties and use its functions. We are not bothered with the implementation details. We are working with an Object’s interface without considering the implementation details. 

    // Sometimes encapsulation refers to the hiding of data or data Abstraction which means representing essential features hiding the background detail. Most of the OOP languages provide access modifiers to restrict the scope of a variable, but their are no such access modifiers in JavaScript but there are certain ways by which we can restrict the scope of variables within the Class/Object. 

// Example : 2

    // Abstraction example
    function person4(fname,lname){
        let first_name = fname;
        let last_name = lname;

        let getDetails_no_access = function(){
            return (`First name is: ${first_name} Last
                name is: ${last_name}`);
        }

        this.getDetails_access = function(){
            return (`First name is: ${first_name}, Last
                name is: ${last_name}`);
        }
    }
    let person21 = new person4('a','b');        
    console.log(person21.first_name);           // Output : undefined
    console.log(person21.getDetails_no_access); // Output : undefined
    console.log(person21.getDetails_access());  // Output : First name is: a, Last name is: b

    // In the above example we try to access some property(person1.first_name) and functions(person1.getDetails_no_access) but it returns undefined while their is a method which we can access from the person object(person1.getDetails_access()). By changing the way we define a function we can restrict its scope.

// =====================================================================================

// Inheritance :

// =====================================================================================

// What is Inheritance ?

    // It is a concept in which some properties and methods of an Object are being used by another Object. Unlike most of the OOP languages where classes inherit classes, JavaScript Objects inherit Objects i.e. certain features (property and methods) of one object can be reused by other Objects. 

//......................................................................................

// Example : 

    //Inheritance example
    class person5{
        constructor(name){
            this.name = name;
        }
        //method to return the string
        toString(){
            return (`Name of person: ${this.name}`);
        }
    }

    class student extends person5{
        constructor(name,id){
            //super keyword for calling the above class constructor
            super(name);
            this.id = id;
        }
        toString(){
            return (`${super.toString()} , Student ID: ${this.id}`);
        }
    }

    let student1 = new student('a',22);
    console.log(student1.toString());  // Output : Name of person: a , Student ID: 22

// =====================================================================================

// Polymorphism :

// =====================================================================================

// What is Polymorphism ?

    // Polymorphism is one of the core concepts of object-oriented programming language. Polymorphism means the same function with different signatures is called many times. 

//Example :

    // In real life, Like a Boy at the same time is a Student, Class Monitor, etc. So Boy can perform different operations at the same time is called polymorphism.

// Features of Polymorphism:

    // Programmers can be used same method name repeatedly.
    // Polymorphism has the effect of reducing the number of functionalities that can be paired together.

//......................................................................................

// Example : 1

// Inheritance Polymorphism in JavaScript:

	class firstClass {
		add() {
			console.log("First Method")
		}
	}
	class secondClass extends firstClass {
		add() {
			console.log(30 + 40);
		}
	}
	class thirdClass extends secondClass {
		add() {
			console.log("Last Method")
		}
	}
	var ob = new firstClass();
	var ob2 = new secondClass();
	var ob3 = new thirdClass();
	ob.add();  // Output : First Method
	ob2.add(); // Output : 70
	ob3.add(); // Output : Last Method

//......................................................................................

// Example : 2

// Polymorphism with Functions and Objects:

	class A {
		area(x, y) {
			console.log(x * y);
		}
	}

	class B extends A {
		area(a, b) {
			super.area(a, b);
		}
	}
	var ob = new B();
	var output = ob.area(100, 200);

    // Output : 20000

// =====================================================================================

// Constructors :

// =====================================================================================

// What is Constructors ?

    // A constructor is a special function that creates and initializes an object instance of a class. In JavaScript, a constructor gets called when an object is created using the new keyword.
    // The purpose of a constructor is to create a new object and set values for any existing object properties.

// What Happens When A Constructor Gets Called ?

    // When a constructor gets invoked in JavaScript, the following sequence of operations take place:
        // A new empty object gets created.
        // The this keyword begins to refer to the new object and it becomes the current instance object.
        // The new object is then returned as the return value of the constructor.

//......................................................................................

// Example : 1

    // Using the "this" Keyword

    //Constructor
    function User() {
        this.name = 'Bob';
    }

    var user = new User();

// Example : 2

    // Create Multiple Objects

    //Constructor
    function User_1() {
    this.name = 'Bob';
    }

    var user1 = new User_1();
    var user2 = new User_1();

// Example : 3

    // Constructor with Parameters

    //Constructor
    function User_2 (name, age) {
        this.name = name;
        this.age = age;
    }

    var user1 = new User_2('Bob', 25);
    var user2 = new User_2('Alice', 27);


// Example : 4

    // Constructor vs Object Literal

    //Object literal
    let user_3 = {
        name: 'Bob'
    }

    //Constructor
    function User_4() {
        this.name = 'Bob';
    }

    var user1 = new User_4();
    var user2 = new User_4();


// Example : 5

    // Object Prototype

    //Constructor
    function User_5() {
        this.name = 'Bob';
    }

    let user10 = new User_5();
    let user20 = new User_5();

    //Adding property to constructor using prototype
    User_5.prototype.age = 25;

    console.log(user10.age); // 25
    console.log(user20.age); // 25

// Example : 6

    // Built-in Constructors

    var a = new Object();

    var b = new String();
    var c = new String("Bob");

    var d = new Number();
    var e = new Number(25);

    var f = new Boolean();
    var g = new Boolean(true);

//......................................................................................




