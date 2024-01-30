/** 
Created : 2023

Script : Longest substring

Description : write an algorithm for finding the longest substring

  The "Longest Substring Without Repeating Characters" problem involves finding the length of the 
  longest substring within a given string where no character is repeated.
  For example, in the string "abcabcbb", the longest substring without repeating characters is "abc", 
  with a length of 3.

**/

// Algorithm
let lengthOfLongestSubstring = function (s) {
  let set = new Set(); //collection of unique value, each value can occur only once
  let left = 0;
  let maxSize = 0;

  // check for length
  if (s.length === 0) return 0;
  if (s.length === 1) return 1;

  // length > 1
  for (let i = 0; i < s.length; i++) {
    while (set.has(s[i])) {
      set.delete(s[left]);
      console.log(set);
      left++;
    }
    set.add(s[i]);
    if (i - left + 1 > maxSize) {
      maxSize = i - left + 1;
      longestSubstring = s.slice(left, i + 1); // Update the longest substring
      console.log(longestSubstring); //the longest substring
    }
  }
  return maxSize; //length of the longest substring
};

// Implementation
// const longest = lengthOfLongestSubstring("pwwkew");
const longest = lengthOfLongestSubstring("abcdefabcdefgh");
console.log(`The length of the longest substring is ${longest}`);

// BIG O Notation
// Time complexity - O(n)
// Space complexity - O(n)
