// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here

    // When shift is false
    if (shift === 0 || shift > 25 || shift < -25 || shift === undefined) {
      return false;
    }
    if (encode === false) {
      // When encode is false
      shift = shift * -1;
    }
    // Creating an array of letters from the input & and changing them to lowercase
    const inputArray = input.toLowerCase().split("");

    // Creating an array of the alphabets for comparison
    const alphabets = "abcdefghijklmnopqrstuvwxyz".split("");

    // Initialzie an empty variable for the result
    let result = "";

    // Looping through the array with forEach
    inputArray.forEach((char) => {
      if (shift < 0) {
        shift = 26 + (shift % 26);
      }

      // Check for space and symbol
      if (char === " " || char === ".") {
        result += char;
      } else {
        result +=
          alphabets[(alphabets.length + alphabets.indexOf(char) + shift) % 26];
      }
    });
    return result;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
