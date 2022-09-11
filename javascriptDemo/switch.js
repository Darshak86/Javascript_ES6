console.log("Switch Case");

// =====================================================================================

// # What is Switch?

// The switch statement is used to perform different actions based on different conditions.

// Syntax :

    // switch (expression) {
    //   case x:
    //     // code block
    //     break;
    //   case y:
    //     // code block
    //     break;
    //   default:
    //     // code block
    // }

// This is how it works:

    // The switch expression is evaluated once.
    // The value of the expression is compared with the values of each case.
    // If there is a match, the associated block of code is executed.
    // If there is no match, the default code block is executed.

// Example : 

    let day;
    switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
    }

    console.log(day) // Sunday
