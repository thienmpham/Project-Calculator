function add([nums]) {
  let total = 0;
  for (let num of nums) {
    return (total += num);
  }
}

function subtract([nums]) {
  let total = 0;
  for (let num of nums) {
    return (total -= num);
  }
}

function multiply([nums]) {
  let total = 1;
  for (let num of nums) {
    return (total *= num);
  }
}

function divide([nums]) {
  let total = 1;
  for (let num of nums) {
    return (total /= num);
  }
}

function operate([inputs], operator) {
  for (let input of inputs) {
  }
}

function displayInputs() {
  let numbers = document.querySelectorAll(".btn");
  let inputs = [];
  let screen = document.querySelector(".screen");
  // iterate through each array item
  for (num of numbers) {
    num.addEventListener("click", function (e) {
      console.log(e.target.className);
      if (e.target.className == "btn btn-op") {
        console.log("op");
      }
      if (e.target.className == "btn btn-num") {
        handleNumClick(e);
        inputs += assignNumValue(e);
        console.log("inputs:", inputs);
      }
      if (e.target.id == "btn-clear") {
        screen.innerHTML = null;
        inputs = [];
      }
    });
  }
}
displayInputs();

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
      input = `${i}`;
      return input;
    }
  }
}

// -----IDEAS:
// Store input into just one variable
// Once a operation is chosen, then the second
//set of #'s is a separate array item

// if !btn-num is selected then it will add
// ... the current value of input

// CURRENT GOAL
// If an operative btn is pushed
// ..then start to store the next set of #'s
