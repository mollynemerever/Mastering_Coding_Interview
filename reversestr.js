//create function that reverses a string

let str = "Hi my name is Molly";

function reverseString(str) {
  if (str.length === 0) {
    return "invalid string";
  }

  let output = "";
  for (let i = str.length - 1; i >= 0; i--) {
    output += str.charAt(i);
  }
  return output;
}

console.log(reverseString(str));

//O(n) time - linear time depends on how long str is
//O(1) space complexity - no added memory needed
