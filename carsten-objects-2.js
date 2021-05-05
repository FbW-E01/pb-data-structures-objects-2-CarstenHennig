// # Objects: Part 2

// **1. Check if a number is within a given range.**
// Write a program that checks if a number is within the range of an object's min and max properties.
// Assume min <= max is always true.

// Examples:

// - 4, { min: 0, max: 5 }) ➞ true
// - 4, { min: 4, max: 5 }) ➞ true
// - 4, { min: 6, max: 10 }) ➞ false
// - 5, { min: 5, max: 5 }) ➞ true

function checkNumberIsInRange(num, obj) {
  const min = obj.min;
  const max = obj.max;

  if (num < min) {
    return false;
  }
  if (num > max) {
    return false;
  }
  return true;
}

let checkNumber = {
  num1: 4,
  num2: 5,
};

for (let numChecker in checkNumber) {
  console.log(checkNumber[numChecker]);
  if (checkNumber[numChecker] >= 0 && checkNumber[numChecker] <= 5) {
    console.log("0-5 true");
  } else {
    console.log("0-5 false");
  }
  if (checkNumber[numChecker] >= 4 && checkNumber[numChecker] <= 5) {
    console.log("4-5 true");
  } else {
    console.log("4-5 false");
  }
  if (checkNumber[numChecker] >= 6 && checkNumber[numChecker] <= 10) {
    console.log("6-10 true");
  } else {
    console.log("6-10 false");
  }
  if (checkNumber[numChecker] >= 5 && checkNumber[numChecker] <= 5) {
    console.log("5-5 true");
  } else {
    console.log("5-5 false");
  }
}

// **2. Scrabble.**
// Write a program that, given an array of scrabble tiles, counts the maximum score that a player can earn
// from the tiles in their hand.
// Example:
// [
// { tile: "N", score: 1 },
// { tile: "K", score: 5 },
// { tile: "Z", score: 10 },
// { tile: "X", score: 8 },
// { tile: "D", score: 2 },
// { tile: "A", score: 1 },
// { tile: "E", score: 1 }
// ]

// The player's maximum score: 1 + 5 + 10 + 8 + 2 + 1 + 1 = 28

const scrabbleTiles = [
  { tile: "N", score: 1 },
  { tile: "K", score: 5 },
  { tile: "Z", score: 10 },
  { tile: "X", score: 8 },
  { tile: "D", score: 2 },
  { tile: "A", score: 1 },
  { tile: "E", score: 1 },
];

// for (scores in obj) {
//   console.log(Object.entries(obj[scores]));
//   const iterateScores = Object.assign({}, scores);
//  console.log(iterateScores);
//   for (scoreScore in scores) {
//     console.log(Object.entries(scores[scoreScore]));
//   }
// }

function calcMaxScrabbleScore(tiles) {
  let total = 0;
  for (let i = 0; i < tiles.length; i++) {
    total += tiles[i]["score"];
  }
  return total;
}

console.log(calcMaxScrabbleScore(scrabbleTiles));

// **3. Is it an empty object?**
// Write a program that returns true if an object is empty, and false if otherwise.

// Examples:

// - {} ➞ true
// - {a: 1} ➞ false

function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}
console.log(isEmpty({}));
console.log(isEmpty({ a: "a" }));

// **4. Counting Letters.**
// Create a  that counts the number of occurrences of each letter in a string.
// Return an object with key pair values of letters and the number of occurrences for each letter.

// Example:

// - countLetters("tree") ➞ {t: 1, r: 1, e: 2}
function countLetters(str) {
  let splitStr = str.split("");
  // console.log(splitStr);
  let emptyObject = {};
  for (let i = 0; i < splitStr.length; i++) {
    if (emptyObject.hasOwnProperty(splitStr[i])) {
      emptyObject[splitStr[i]]++;
    } else {
      emptyObject[splitStr[i]] = 1;
    }
  }
  return emptyObject;
}

console.log(countLetters("tree"));
console.log(countLetters("Helllooo"));

// **5. Free Shipping.**
// Create a function that determines whether an online order should get free shipping.
// An order gets free shipping if the total cost of items exceeds €50.

// Examples:

// - freeShipping({ "Sponge": 3.50, "Soap": 5.99 }) ➞ false
// - freeShipping({ "Surround Sound Equipment": 499.99 }) ➞ true
// - freeShipping({ "Wool": 13.99, "Knitting Needles": 15.50, "Bag": 13.99 }) ➞ false
let object1 = {
  Salt: 3.5,
  Sand: 2.13,
};

let object2 = {
  Apple: 100,
  Wool: 60,
};

function freeShipping(obj) {
  let value1 = Object.values(obj);
  let total = 0;
  for (let i = 0; i < value1.length; i++) {
    total += value1[i];
  }
  return total > 50;
}

console.log(freeShipping(object1));
console.log(freeShipping(object2));

// **6. Programming Object.**

// ```javascript
// const programming = {
//   languages: ["JavaScript", "Python", "Ruby"],
//   isChallenging: true,
//   isRewarding: true,
//   difficulty: 8,
//   jokes:
//     "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
// };
// ```

// - Write the command to add the language "Go" to the end of the languages array.

const programming = {
  languages: ["JavaScript", "Python", "Ruby"],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
  jokes:
    "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke",
};

programming.languages.push("Go");
console.log(programming.languages);

// - Change the difficulty to the value of 7.
programming.difficulty = 7;
console.log(programming.difficulty);

// - Using the delete keyword, write the command to remove the jokes key from the programming object.
delete programming.jokes;
console.log(programming);

// - Write a command to add a new key called isFun and a value of true to the programming object.
programming.iFun = true;
console.log(programming);

// - Using a loop, iterate through the languages array and console.log all of the languages.
for (const x of programming.languages) {
  console.log(x);
}

// - Using a loop, console.log all of the keys in the programming object.
for (const x of Object.keys(programming)) {
  console.log(x);
}

// - Using a loop, console.log all of the values in the programming object.
for (const x of Object.values(programming)) {
  console.log(x);
}

// - Create an object method where if the keys "isChallenging" and "isRewarding" have values of "true",
// then return "Learning the programming languages: "JavaScript, Python, Ruby, Go" is
//  rewarding and challenging.
//**Bonus:** In a comment, explain what is printed if we console.log an object method without calling it and why.
programming.trueOrNot = function () {
  if (programming.isChallenging && programming.isRewarding) {
    return `Learning the programming languages: ${programming.languages} is rewarding and challenging.`;
  }
};

console.log(programming.trueOrNot());

// **Bonus**:
// - Make sure that any other code cannot delete or change properties of the object.

Object.freeze(programming);
programming.languages = "Milad";
programming.hack = "Tried it";
console.log(programming);
