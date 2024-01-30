## Sort Colors

This algorithm takes an array of integers as input and sorts the array in place such that all the 0s are at the beginning of the array, all the 1s are in the middle of the array, and all the 2s are at the end of the array.

The function works by maintaining three pointers: a low pointer, a mid pointer, and a high pointer. The low pointer points to the first element in the array that is not yet sorted. The mid pointer points to the current element in the array. The high pointer points to the last element in the array.

The function iterates over the array, starting at the low pointer. For each element in the array, the function swaps the element with the element at the low pointer if the element is 0, simply increments the mid pointer if the element is 1, or swaps the element with the element at the high pointer if the element is 2. The function continues to iterate over the array until the low pointer reaches the high pointer. At the end, the array will be sorted in place.
