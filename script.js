const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const AC = document.querySelector("#AC")
const DEL = document.querySelector("#DEL")
const EQUALS = document.querySelector("#=")

let num1 = "";
let num2 = "";
let result = "";
let currentOperator = ""
displayContent = ""
let operatorEntered = false;

numbers.forEach(function (i) {
  i.addEventListener("click", function () {
   
  });
});

operators.forEach(function (i) {
  i.addEventListener("click", function () {
   
  });
});

AC.addEventListener("click", function () {
   
});

DEL.addEventListener("click", function () {
   
});
EQUALS.addEventListener("click", function () {
   
});









function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function divide(num1, num2) {
  return num1 / num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}
function getRemainder(num1, num2) {
  return num1 % num2;
}

function operate(currentOperator, a, b) {
  a = Number(a)
  b = Number(b)
  switch (currentOperator) {
    case '+':
      return add(a, b)
    case '−':
      return substract(a, b)
    case '×':
      return multiply(a, b)
    case '÷':
      if (b === 0) return null
      else return divide(a, b)
    default:
      return null
  }
}
