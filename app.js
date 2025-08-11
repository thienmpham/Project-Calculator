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
  // iterate through each array item
  for (num of numbers) {
    num.addEventListener("click", handleNumClick);
  }
}
displayInputs();

function handleNumClick(e) {
  // 1. Display a number on the screen
  //1a. Assign the click to a variable
  console.log(e.target.id);
  let screen = document.querySelector(".screen");

  //assign value of screen to click event
  screen.innerHTML += assignNumValue(e);
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
