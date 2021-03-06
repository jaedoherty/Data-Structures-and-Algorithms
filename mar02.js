/* Alice has n candies, where the ith candy is of type candyType[i]. Alice noticed that she started to gain weight, so she visited a doctor.

The doctor advised Alice to only eat n / 2 of the candies she has (n is always even). Alice likes her candies very much, and she wants to eat the maximum number of different types of candies while still following the doctor's advice.

Given the integer array candyType of length n, return the maximum number of different types of candies she can eat if she only eats n / 2 of them. */

// Input: candyType = [1,1,2,2,3,3]
// Output: 3
// Explanation: Alice can only eat 6 / 2 = 3 candies. Since there are only 3 types, she can eat one of each type.
// Example 2:

// Input: candyType = [1,1,2,3]
// Output: 2
// Explanation: Alice can only eat 4 / 2 = 2 candies. Whether she eats types [1,2], [1,3], or [2,3], she still can only eat 2 different types.
// Example 3:

// Input: candyType = [6,6,6,6]
// Output: 1
// Explanation: Alice can only eat 4 / 2 = 2 candies. Even though she can eat 2 candies, she only has 1 type.

function maxCandies(candyType) {
    let candies = {};
    let max = candyType.length / 2;
    candyType.forEach(candy => {
        if (candies[candy]) {
            candies[candy] += 1; 
        } else {
            candies[candy] = 1;
        }
    })
    let numTypes = Object.values(candies).length;

    return numTypes > max ? max : numTypes


}

// console.log(maxCandies([1, 1, 2, 2, 3, 3]));

/* You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.

You are given an integer array nums representing the data status of this set after the error.

Find the number that occurs twice and the number that is missing and return them in the form of an array.

 

Example 1:

Input: nums = [1,2,2,4]
Output: [2,3]
Example 2:

Input: nums = [1,1]
Output: [1,2]
*/

function setMismatch(nums) {
    let arr = nums.sort((a, b) => a - b)
    // if (nums[0] !== 1) return [nums[0], 1]
    let correct = [...Array(nums.length).keys()].map((num) => num + 1);
    // console.log("sorted", arr, "correct", correct)
    let result = [];
    // let missing = "";
    // let dupe = "";
    //comparing to index
    // make a hash with key of correct # and val the count of that num
    arr.forEach((num, i) => {
        if (num !== correct[i]) {
            result.push(num)
        }
    })

    return result
}

console.log(setMismatch([3, 2, 3, 4, 6, 5]));