// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task of calculates a value

// 1. Function declaration
// function name(param1, param2) { body... return; }
// one function === one thing
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS

function printHello() {
  console.log("Hello");
}
printHello();

function log(message) {
  console.log(message);
}
log("Hello@");
log(1234);

// 2.Parameters
// primitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
  obj.name = "coder";
}
const ellie = { name: "ellie" };
changeName(ellie);
console.log(ellie);

// 3. Default parameters (added in ES6)
function showMessage(message, from = "unknown") {
  console.log(`${message} by ${from}`);
}
showMessage("Hi!");

// 4. Rest parameters (added in ES6)
function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }

  for (const arg of args) {
    console.log(arg);
  }
}
printAll("dream", "coding", "ellie");

// 5. Local scope
let globalMessage = "global"; //global variable
function printMeesage() {
  let message = "hello"; // local variable
  console.log(message);
  console.log(globalMessage);
}
printMeesage();

// 6. Return a value
function sum(a, b) {
  return a + b;
}
const result = sum(1, 2);
console.log(`sum: ${sum(1, 2)}`);

// 7. Early return, early exit
// bad
function upgradeUser(user) {
  if (user.point > 10) {
    // long upgrade logic
  }
}
// good
function upgradeUser(user) {
  if (user.point <= 10) {
    return;
  }
  // long upgrade logic
}

// First-class function
// functions are treated like any other value
// can be assigned as a value to variable
// can be passed as an argument to other functions
// can be returned by another function

// 1. Function expression
// a function declaration can be called earlier than it is defined. (hosited)
// a function expression is created when the execution reaches it. (not hosited)
const print = function () {
  console.log("print");
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callback function using function exression
function randomQuiz(answer, printYes, printNo) {
  if (answer === "love you") {
    printYes();
  } else {
    printNo();
  }
}

const printYes = function () {
  console.log("yes!");
};

// named function
// better debugging in debuggers's stack traces
// recursions
const printNo = function print() {
  console.log("no!");
};
randomQuiz("wrong", printYes, printNo);
randomQuiz("love you", printYes, printNo);

// Arrow function
// always anonymous
const simplePrint = function () {
  console.log("simplePrint!");
};

// const simplePrint = () => console.log("simplePrint!");
// const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
  // do something more
  return a * b; // when using arrow function, use 'return'
};

// IIFE : Immediately Invoked Function Expression
(function hello() {
  console.log("IIFE");
})();

// Fun quiz time
// function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder

const calculate = (command, a, b) => {
  switch (command) {
    case "add":
      return a + b;
      break; // delete break;
    case "substract":
      return a - b;
      break;
    case "divide":
      return a / b;
      break;
    case "multiply":
      return a * b;
      break;
    case "remainder":
      return a % b;
      break;
    default:
      console.log("invalid command"); // throw Error('error');
      break;
  }
};
console.log(calculate("add", 10, 5));
console.log(calculate("substract", 10, 5));
console.log(calculate("divide", 10, 5));
console.log(calculate("multiply", 10, 5));
console.log(calculate("remainder", 10, 5));
