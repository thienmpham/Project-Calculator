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

function storeInputs() {}
