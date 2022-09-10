console.log("styling console.log");

// =====================================================================================

// Give style in console.log text

console.log(
  `%cHello %cWorld`,
  "color:red ; font-size : 22px",
  "background : green ; color : white ; font-size : 30px ; "
);

// =====================================================================================

// Give style by using function

function print(text){
    console.log(`%c${text}`, "color:blue ; font-size : 16px");
}

print('Hello World')
