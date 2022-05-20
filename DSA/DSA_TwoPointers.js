"use strict";
/**
 * Implement a function called countUniqueValues which accepts a sorted array,
 * and counts the unique values in the array. There can be negative numbers in the array,
 * but it will always be sorted.
 * @param {number[]}  arr - sorted array of numbers
 * @returns {number}  count - number of unique values in input array
 */
/* SOLUTION:
    start with i at index 0 and j at index i+1
    if in the loop, i === j, increment j by one and repeat the loop
    if i !== j, first increment i by 1 and then replace arr[i] with arr[j]
    once j reaches the end of arr, upto arr[i], there will be only unique values
    therefore the count of unique items in the array will be i+1,
    i.e. length of array containing unique values
*/
const countUniqueValues = (arr) => {
    if (arr.length === 0)
        return 0;
    let i = 0;
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }
    return i + 1;
};
/**
 * TEST CASES
 * countUniqueValues([1,2,2,3,4,6,6,9,9,10])
 * countUniqueValues([1,2,2])
 * countUniqueValues([])
 * countUniqueValues([-3,-3,-1,0,1,1,2])
 */
