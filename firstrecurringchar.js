//given an array, return the first recurring character

let input = [2, 5, 2, 4, 6, 7, 8, 8];

function recurringChar(input) {
  if (input.length === 0 || input.length === 1) {
    return "invalid input";
  }

  for (let i = 0; i < input.length; i++) {
    let element = input[i];
    if (input.indexOf(element, i + 1) !== -1) {
      return element;
    }
  }
  return "no repeats";
}

console.log(recurringChar(input));

//runtime O(n) depends directly on how long n is
//space complexity O(1) nothing additional from input
