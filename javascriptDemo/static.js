console.log("Static Variable and Static Methods");

// =====================================================================================

// What is Static?

    // Static class methods are defined on the class itself.
    // You cannot call a static method on an object, only on an object class.

//......................................................................................

    // Example : 1

        class Car {
            constructor(name) {
                this.name = name;
            }
            static hello() {
                return "Hello!!";
            }
        }

        let myCar = new Car("Ford");

        // You can call 'hello()' on the Car Class:
        console.log(Car.hello())  // Hello!!

        // But NOT on a Car Object:
        // console.log(myCar.hello()); // Uncaught TypeError: myCar.hello is not a function
        // this will raise an error.

     // Example : 2

     // If you want to use the myCar object inside the static method, you can send it as a parameter:

     class Car1 {
       constructor(name) {
         this.name = name;
       }
       static hello(x) {
         return "Hello " + x.name;
       }
     }
     let myCar1 = new Car1("Ford");
     console.log(Car1.hello(myCar1)) // Hello Ford
