// Given a string, write a function that returns a copy of the original string that has every other character capitalized. (Capitalization should begin with the second character.)

// Input: “hello, how are your porcupines today?”
// Output: “hElLo, HoW ArE YoUr pOrCuPiNeS ToDaY?”

// Split into characters
// set variable to be !capitalized so it alternates
// loop through array
// check if character is a letter, if so !capitalized
// join array and return

function alternateCapitals(str) {
  let capitalized = false;
  let letters = str.split("");
  let final = "";
  for (let i = 0; i < letters.length; i++) {
    if (/[a-zA-Z]/.exec(letters[i])) {
      if (capitalized === true) {
        letters[i] = letters[i].toUpperCase();
      } else {
        letters[i] = letters[i].toLowerCase();
      }
      capitalized = !capitalized;
    }
    final += letters[i];
  }
  return final;
}

console.log(alternateCapitals("hello I'm testing THIS out $$$ ok how we loooking"));
