/** 
Created : 2023

Script : Merge sorted array

Description : write an algorithm for merge sorted array.

  You are given two integer arrays num1 and num2, sorted in non-decreasing order, & 
  two integers m and n, representing the number of elements in num1 and num2 respectively. 
  Merge num1 and num2 into a single array sorted in non-decreasing order.

**/

// Algorithm
let merge = function (num1, m, num2, n) {
  // init 3 pointers
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;

  // console.log("i = " +  i);
  // console.log("j = " +  j);
  // console.log("k = " + k);

  // while loop that continues as long as there are elements in num2
  while (j >= 0) {
    // console.log(j);
    if (i >= 0 && num1[i] > num2[j]) {
      num1[k--] = num1[i--];
    } else {
      num1[k--] = num2[j--];
    }
  }
  console.log(num1);
};

// Implementation
console.log("The sorted array is ");
const mergedNum = merge([1, 2, 3, 3, 3, 10], 6, [2, 5, 6], 3);

// BIG O Notation
// Time complexity - O(m + n)
// - where 'm' is number of elements in 'num1' and 'n' is number of elements in 'num2'
// Space complexity - O(1)

// Non decreasing - where the numbers may or may not increase but they never decrease
// example - 1 2 2 3 3 4 5 6 6
