const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const AC = document.querySelector("#AC");
const DEL = document.querySelector("#DEL");
const EQUALS = document.querySelector(".equals");
const displayLower = document.querySelector(".lower");
const displayUpper = document.querySelector(".upper");

let num1 = "";
let num2 = "";
let result = "";
let currentOperator = "";
displayLower.textContent = "";
displayUpper.textContent = "";
let operatorEntered = false;

numbers.forEach(function (i) {
  i.addEventListener("click", function () {
    if (!operatorEntered) {
      num1 += i.value;
      displayLower.textContent = num1;
    } else {
      num2 += i.value;
      displayLower.textContent = num2;
    }
  });
});

operators.forEach(function (i) {
  i.addEventListener("click", function () {
    currentOperator = i.value;
    operatorEntered = true;
    displayLower.textContent += currentOperator;
  });
});

AC.addEventListener("click", function () {
  num1 = "";
  num2 = "";
  currentOperator = "";
  operatorEntered = false;
  displayLower.textContent = "";
  displayUpper.textContent = "";
});

DEL.addEventListener("click", function () {
  if (!num2 == ""){
    num2 = num2.substring(0,num2.length-1);
    displayLower.textContent = displayLower.textContent.substring(0,displayLower.textContent.length-1);
  } else if (!currentOperator == ""){
    currentOperator = currentOperator.substring(0,currentOperator.length-1);
    displayLower.textContent = displayLower.textContent.substring(0,displayLower.textContent.length-1);
  } else if (!num1 == ""){
    num1 = num1.substring(0,num1.length-1);
    displayLower.textContent = displayLower.textContent.substring(0,displayLower.textContent.length-1);
  }
});

EQUALS.addEventListener("click", function () {
  console.log(operate(num1, currentOperator, num2));
  result = operate(num1, currentOperator, num2);
  displayUpper.textContent = result;
  displayLower.textContent = "";
  num1 = result;
  num2 = "";
});

function add(num1, num2) {
  return roundNumber(num1 + num2);
}

function subtract(num1, num2) {
  return roundNumber(num1 - num2);
}

function divide(num1, num2) {
  return roundNumber(num1 / num2);
}
function multiply(num1, num2) {
  return roundNumber(num1 * num2);
}
function getRemainder(num1, num2) {
  return num1 % num2;
}

function roundNumber(num) {
  return Math.round(num*100000)/100000;
}


function operate(a, currentOperator, b) {
  console.log([a, currentOperator, b]);
  a = Number(a);
  b = Number(b);
  switch (currentOperator) {
    case "+":
      return add(a, b);
    case "−":
      return subtract(a, b);
    case "×":
      return multiply(a, b);
    case "%":
      return getRemainder(a, b);
    case "÷":
      if (b === 0) return null;
      else return divide(a, b);
    default:
      return null;
  }
}
