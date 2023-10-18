// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  const polySquare = [
    ["a", "b", "c", "d", "e"],
    ["f", "g", "h", "i/j", "k"],
    ["l", "m", "n", "o", "p"],
    ["q", "r", "s", "t", "u"],
    ["v", "w", "x", "y", "z"],
  ];

  function polybius(input, encode = true) {
    // your solution code here

    const message = input.toLowerCase().split("");
    let result = "";

    if (encode) {
      for (let i = 0; i < message.length; i++) {
        const char = message[i];

        if (char === " ") {
          result += " ";
        } else {
          for (let row = 0; row < polySquare.length; row++) {
            for (let col = 0; col < polySquare[row].length; col++) {
              if (polySquare[row][col].includes(char)) {
                const rowNumber = row + 1;
                const colNumber = col + 1;

                result += colNumber.toString() + rowNumber.toString();
              }
            }
          }
        }
      }
    }
    return result;
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
