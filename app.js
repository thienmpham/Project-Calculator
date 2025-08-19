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
  let numbers = document.querySelectorAll(".btn-num");
  let inputs = [];
  // iterate through each array item
  for (num of numbers) {
    num.addEventListener("click", function (e) {
      handleNumClick;
      inputs += assignNumValue(e);
      console.log("inputs:", inputs);
    });
  }
}
displayInputs();

function handleNumClick(e) {
  let screen = document.querySelector(".screen");
  let numValue = assignNumValue(e);

  console.log(e.target.id);
  screen.innerHTML += numValue;
  console.log(screen.innerHTML);

  // inputs.push(assignNumValue(e));
  // console.log("numValues:", numValues);
  //IDEA;
  //
  return numValue;

  //if !btn-num is clicked, then
  //return value on screen;
}

function assignNumValue(e) {
  let input;
  for (i = 0; i <= 9; i++) {
    if (e.target.id == `btn-${i}`) {
      input = `${i}`;
      console.log(input);

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
// Push the value of what is on the screen
// when !btn-num is pressed.
