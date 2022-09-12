console.log("Modules");

// =====================================================================================

// What is Modules?

// As our program grows bigger, it may contain many lines of code. Instead of putting everything in a single file, you can use modules to separate codes in separate files as per their functionality. This makes our code organized and easier to maintain.

// Module is a file that contains code to perform a specific task. A module may contain variables, functions, classes etc.

//......................................................................................

// Example : 

    // This is a Rectangle Module. 
    function Rectangle() 
    { 
        var length, width; 
    
        function create(l, w) 
        { 
            length = l; 
            width = w; 
        } 
    
        function getArea() 
        { 
            return (length * width); 
        } 
    
        function getPerimeter() 
        { 
            return (2 * (length + width)); 
        } 
    
        // This is the object to consist public members. 
        // The rest are private members. 
        var publicAPI = { 
            create , 
            getArea, 
            getPerimeter
        }; 
    
        // To be returned upon creation of a new instance. 
        return publicAPI; 
    } 
    
    // create a Rectangle module instance 
    var myRect = Rectangle(); 
    myRect.create(5, 4); 
    console.log("Area: " + myRect.getArea()); 
    console.log("Perimeter: " + myRect.getPerimeter());

    // Output: 
    // Area: 20
    // Perimeter: 18