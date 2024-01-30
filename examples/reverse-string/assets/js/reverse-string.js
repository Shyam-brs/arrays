/** 
Created : 2023 

Script : Reverse a string for the given array

Description : write an algorithm to revese the given string in array

  A function that reverses a string. The input string is given as an array of characters s.
**/

// Algorithm
let reverseString = function (s) {
  let size = s.length;

  // reverse string by mirror image
  for (let i = 0; i < Math.floor(size / 2); i++) {
    //Math.floor rounds a number down to the nearest integer.
    console.log(i);
    [s[i], s[size - 1 - i]] = [s[size - 1 - i], s[i]];
  }

  return s;
};

// Implementation
const reversedString = reverseString(["h", "e", "l", "l", "o", "r"]);
console.log("The reversed array string is");
console.log(reversedString);

// BIG O Notation
// Time complexity - O(n)
// Space complexity - O(1)
