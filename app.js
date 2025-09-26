function add(nums) {
  let total = 0;
  for (let num of nums) {
    total += num;
  }
  return total;
}

function subtract(nums) {
  let total = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    total = nums[i] - nums[i + 1];
  }
  return total;
}

function multiply(nums) {
  let total = 1;
  for (let num of nums) {
    total *= num;
  }
  return total;
}

function divide(nums) {
  let isZero;
  let total = 1;
  for (let i = 0; i < nums.length - 1; i++) {
    total = nums[i] / nums[i + 1];
    if (nums[i] == 0) {
      isZero = true;
      return isZero;
    }
  }
  return total;
}

function operate(inputs, operator) {
  if (operator == "add") {
    console.log(add(inputs));
    return add(inputs);
  }
  if (operator == "subtract") {
    console.log(subtract(inputs));
    return subtract(inputs);
  }
  if (operator == "multiply") {
    console.log(multiply(inputs));
    return multiply(inputs);
  }
  if (operator == "divide") {
    console.log(divide(inputs));
    return divide(inputs);
  }
}
function chooseOperator(e) {
  if (e.target.id == "btnop-add") {
    return "add";
  }
  if (e.target.id == "btnop-subtract") {
    return "subtract";
  }
  if (e.target.id == "btnop-multiply") {
    return "multiply";
  }
  if (e.target.id == "btnop-divide") {
    return "divide";
  }
}

function storeInputs(inputs) {
  console.log("stored:", inputs);
  let inputsArray = [];
  inputsArray.push(inputs);
  console.log("storedArray:", inputsArray);
}

function displayInputs() {
  let numbers = document.querySelectorAll(".btn");
  let inputs = [];
  let inputsArray = [];
  let screen = document.querySelector(".screen");
  let operator;
  let total;

  let operationArray = ["+", "–", "×", "÷"];
  let operatorIndex;
  let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let operatorIsBeforeNum;
  // boolean value if operation i"s in screen.innerHTML
  let containsOperator;

  // boolean value if total value is being operated
  let isTotalOperated;

  let isZero;

  for (num of numbers) {
    num.addEventListener("click", function (e) {
      // do nothing after dividing by 0
      if (
        isZero == true &&
        (e.target.className == "btn btn-num" ||
          e.target.className == "btn btn-op" ||
          e.target.id == "btn-equals")
      ) {
        console.log("askdjfas");
        return;
      }
      // initial total
      if (e.target.className == "btn btn-op") {
        containsOperator = checkScreen(screen);
      }

      if (
        e.target.className == "btn btn-op" &&
        total == undefined &&
        containsOperator == false
      ) {
        containsOperator = checkScreen(screen);
        isTotalOperated = false;
        displayOperator(e);

        screen.innerHTML += displayOperator(e);
        console.log("stored:", inputs);
        inputs = parseInt(inputs);
        inputsArray.push(inputs);
        inputs = [];
        operator = chooseOperator(e);
        console.log(operator, "#oop");
        console.log("storedArray:", inputsArray, "op");

        console.log("inputsArray.length @@@:", inputsArray.length);
      }

      //to replace operator when clicking another operator btn
      if (
        e.target.className == "btn btn-op" &&
        containsOperator == true &&
        operatorIsBeforeNum == false
      ) {
        screen.innerHTML = replaceOperator(e, screen);
        operator = chooseOperator(e);
        console.log("contains true: ", screen.innerHTML);
      }

      // if an operator is pressed when there are pair of nums
      if (
        e.target.className == "btn btn-op" &&
        containsOperator == true &&
        operatorIsBeforeNum == true
      ) {
        containsOperator = false;
        console.log("stored#op:", inputs);
        inputs = parseInt(inputs);
        inputsArray.push(inputs);
        total = operate(inputsArray, operator);
        // roundedTotal = Math.round(total * 100000000) / 10000000;
        screen.innerHTML = total;
        inputsArray = [];
        inputsArray.push(total);
      }

      if (
        e.target.className == "btn btn-op" &&
        // screen.innerHTML !== "" &&
        total !== undefined &&
        containsOperator == false
      ) {
        isTotalOperated = true;
        screen.innerHTML += displayOperator(e);
        containsOperator = checkScreen(screen);
        inputs = [];
        operator = chooseOperator(e);
      }

      //if a num btn is clicked after a total is calculated
      //then clear it
      if (
        e.target.className == "btn btn-num" &&
        total !== undefined &&
        isTotalOperated == false
      ) {
        console.log("operated total");
        screen.innerHTML = null;
        total = undefined;
        inputs = [];
        inputsArray = [];
        isZero = false;
      }

      // when click "="
      if (
        e.target.id == "btn-equals" &&
        operatorIsBeforeNum == true &&
        isZero !== true
      ) {
        containsOperator = false;
        console.log("stored#equals:", inputs);
        inputs = parseInt(inputs);
        inputsArray.push(inputs);
        console.log("storedArray#equals:", inputsArray);
        total = operate(inputsArray, operator);
        // roundedTotal = Math.round(total * 100000000) / 10000000;
        screen.innerHTML = total;
        inputsArray = [];
        inputsArray.push(total);
      }

      if (e.target.id == "btn-equals") {
        isZero = operate(inputsArray, operator);
      }
      if (e.target.id == "btn-equals" && isZero == true) {
        screen.innerHTML == "YOU CANT DO THAT SILLY!";
      }
      //if divided by 0
      if (e.target.id == "btn-equals" && isZero == true) {
        screen.innerHTML = "YOU CANT DO THAT SILLY";
      }

      if (e.target.className == "btn btn-num") {
        //when any # is clicked
        handleNumClick(e);
        inputs += assignNumValue(e);
        console.log("inputs:", inputs);
        operatorIndex = checkOperatorIndex(screen.innerHTML, operationArray);
        operatorIsBeforeNum = checkOperatorIsBeforeNum(
          screen.innerHTML,
          operatorIndex,
          numberArray
        );
      }

      if (e.target.id == "btn-clear") {
        screen.innerHTML = null;
        total = undefined;
        inputs = [];
        inputsArray = [];
        containsOperator = console.log("clear");
        isZero = false;
      }
    });
  }
}
displayInputs();

function displayOperator(e) {
  if (e.target.id == "btnop-add") {
    return "+";
  }
  if (e.target.id == "btnop-subtract") {
    return "–";
  }
  if (e.target.id == "btnop-multiply") {
    return "×";
  }
  if (e.target.id == "btnop-divide") {
    return "÷";
  }
}
function checkScreen(screen) {
  // Make operation signs into an array
  // Check to see if screen.innerHTML includes an operation
  //// with For loop
  let html = screen.innerHTML;
  let operationArray = ["+", "–", "×", "÷"];
  for (let i = 0; i < operationArray.length; i++) {
    if (html.includes(operationArray[i])) {
      console.log("includes ops");
      return true;
    }
  }
  return false;
}

function replaceOperator(e, screen) {
  let html = screen.innerHTML;
  let operationArray = ["+", "–", "×", "÷"];
  let operator = displayOperator(e);

  for (let i = 0; i < operationArray.length; i++) {
    if (html.includes(operationArray[i])) {
      console.log(
        "#replace",
        html.replace(operationArray[i], displayOperator(e))
      );
      return html.replace(operationArray[i], displayOperator(e));
    }
  }
}

function handleNumClick(e) {
  let screen = document.querySelector(".screen");
  let numValue = assignNumValue(e);

  screen.innerHTML += numValue;
  return numValue;
}

function assignNumValue(e) {
  let input;

  for (i = 0; i <= 9; i++) {
    if (e.target.id == `btn-${i}`) {
      input = i;
      return input;
    }
  }
}

//Check index of operator
function checkOperatorIndex(html, operationArray) {
  //find location of operative
  let htmlArray = html.split("");
  for (let i = 0; i < htmlArray.length; i++) {
    for (let j = 0; j < operationArray.length; j++) {
      operationArray[j];
      if (htmlArray[i] == operationArray[j]) {
        console.log("op is at index", i);
        return i;
      }
    }
  }
}

//Check to see if there is an # after the operator
function checkOperatorIsBeforeNum(html, index, numberArray) {
  let htmlArray = html.split("");
  for (let i = 0; i < numberArray.length; i++) {
    if (htmlArray[index + 1] == numberArray[i]) {
      return true;
    }
  }
  return false;
}

//Problem:
// //
// calculate the pair of numbers when an operation is clicked

//Solution:
// //
// check to see if there is a num after the operator and if
// the operator is clicked then evaluate the pair of numbers
