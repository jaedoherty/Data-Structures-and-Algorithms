/* Implement strStr().

Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Clarification:

What should we return when needle is an empty string? This is a great question to ask during an interview.

For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

 

Example 1:

Input: haystack = "hello", needle = "ll"
Output: 2
Example 2:

Input: haystack = "aaaaa", needle = "bba"
Output: -1
Example 3:

Input: haystack = "", needle = ""
Output: 0
 

Constraints:

0 <= haystack.length, needle.length <= 5 * 104
haystack and needle consist of only lower-case English characters.
*/ 

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr = function(haystack, needle) {
    if (needle === '') return 0;
    if (haystack === '') return -1;
    let idx = -1;
    
    for(let i = 0; i < haystack.length; i++) {
        let endIdx = i + needle.length;
        let subString = haystack.slice(i, endIdx);
        console.log(endIdx, subString)

        if (subString === needle) {
            idx = i;
            break
        }
    }

    return idx;
};

let haystack = 'a';
let needle = 'a';

//-------------------------------------------------------------------------------------------------\\

/* You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

 

Example 1:

Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.
Example 2:

Input: nums = [2,7,9,3,1]
Output: 12
Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
Total amount you can rob = 2 + 9 + 1 = 12.
 

Constraints:

1 <= nums.length <= 100
0 <= nums[i] <= 400 */

var rob = function(nums) {
    let evenHouses = 0;
    let oddHouses = 0;

    nums.forEach((num, i) => {
        if (i % 2 === 0) {
            evenHouses += num;
        } else {
            oddHouses += num;
        }
    })

    return evenHouses > oddHouses ? evenHouses : oddHouses;
};