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
  let total = 1;
  for (let i = 0; i < nums.length - 1; i++) {
    total = nums[i] / nums[i + 1];
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
  // boolean value if operation i"s in screen.innerHTML
  let containsOperator;
  // iterate through each array item

  for (num of numbers) {
    num.addEventListener("click", function (e) {
      // initial total
      if (e.target.className == "btn btn-op") {
        containsOperator = checkScreen(screen);
      }
      if (
        e.target.className == "btn btn-op" &&
        // screen.innerHTML !== "" &&
        total == undefined &&
        containsOperator == false
      ) {
        containsOperator = checkScreen(screen);
        // screen.innerHTML = null;
        screen.innerHTML += displayOperator(e);
        console.log("stored:", inputs);
        inputs = parseInt(inputs);
        inputsArray.push(inputs);
        inputs = [];
        operator = chooseOperator(e);
        console.log(operator, "#oop");
        console.log("storedArray:", inputsArray, "op");
      }

      if (
        e.target.className == "btn btn-op" &&
        // screen.innerHTML !== "" &&
        total !== undefined &&
        containsOperator == false
      ) {
        // screen.innerHTML = null;
        screen.innerHTML += displayOperator(e);
        containsOperator = checkScreen(screen);
        inputs = [];
        operator = chooseOperator(e);
        console.log("storedArray#total:", inputsArray);
      }

      if (
        e.target.id == "btn-equals"
        // && screen.innerHTML !== ""
      ) {
        containsOperator = false;
        console.log("stored#equals:", inputs);
        inputs = parseInt(inputs);
        inputsArray.push(inputs);
        console.log("storedArray#equals:", inputsArray);
        total = operate(inputsArray, operator);
        screen.innerHTML = total;
        inputsArray = [];
        inputsArray.push(total);
      }
      if (e.target.className == "btn btn-num") {
        handleNumClick(e);
        inputs += assignNumValue(e);
        console.log("inputs:", inputs);
      }

      if (e.target.id == "btn-clear") {
        screen.innerHTML = null;
        total = undefined;
        inputs = [];
        inputsArray = [];
        containsOperator = console.log("clear");
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
  console.log("includes subtract", html.includes(operationArray[0]));
  for (let i = 0; i < operationArray.length; i++) {
    if (html.includes(operationArray[i])) {
      console.log("includes ops");
      return true;
    }
  }
  return false;
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
