//

/*
We are given two sentences A and B.  (A sentence is a string of space separated words.  Each word consists only of lowercase letters.)

A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.

Return a list of all uncommon words. 

You may return the list in any order.

 

Example 1:

let A = "this apple is sweet";
let B = "this apple is sour"
Output: ["sweet","sour"]
Example 2:

Input: A = "apple apple", B = "banana"
Output: ["banana"]

Input:
"mqk g g"
"uuz rk uuz"
Output:
["mqk","uuz","rk"]
Expected:
["mqk","rk"]

Input:
"ppz wl ppz"
"wl e b b"
Output:
["e","b"]
Expected:
["e"]
 

Note:

0 <= A.length <= 200
0 <= B.length <= 200
A and B both contain only spaces and lowercase letters.

*/

function uncommonFromSentences(A, B) {
    let newA = A.split(" ");
    let newB = B.split(" ");
    let uncommon = [];

    newA.forEach((word, i) => {
        if (!newB.includes(word) && !newA.slice(0, i).includes(word) && !newA.slice(i+1, newA.length).includes(word))
            uncommon.push(word)
        }
    )
    newB.forEach((word, i) => {
        if (!newA.includes(word) && !newB.slice(0, i).includes(word) && !newB.slice(i+1, newB.length).includes(word)) {
            uncommon.push(word)
        }
    })

    return uncommon;
}


/* OR
        formatted_output = (A + " " + B).split(" ")
        unique = set()
        uncommon = set()

        for fruit in formatted_output:
          if fruit not in unique:
            unique.add(fruit)
            uncommon.add(fruit)
          elif fruit in uncommon:
            uncommon.remove(fruit)

        return list(uncommon)
*/

// let A = "apple apple"
// let B = "banana"
// console.log(uncommonFromSentences(A, B))

/*
Given two strings s and t , write a function to determine if t is an anagram of s.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
Note:
You may assume the string contains only lowercase alphabets.

Follow up:
What if the inputs contain unicode characters? How would you adapt your solution to such case?


*/

function isAnagram(s, t) {
    if (s.length !== t.length) return false;

    let count = {};

    for(let i = 0; i < s.length; i++) {
        if (count[s[i]]) {
            count[s[i]] += 1;
        } else {
            count[s[i]] = 1;
        }
    }

    for(let i = 0; i < t.length; i++) {
        if (count[t[i]]) {
            count[t[i]] -= 1;
        } else {
            count[t[i]] = 1;
        }
    }

    return Object.values(count).every(num => num === 0)

}

// let s = "anagram"; 
// let t = "nagaram" 
// let v = "nagaram";
// console.log(isAnagram(s, t))

/*
Given a sorted array nums, remove the duplicates in-place such that duplicates appeared at most twice and return the new length.

Do not allocate extra space for another array; you must do this by modifying the input array in-place with O(1) extra memory.

Clarification:

Confused why the returned value is an integer, but your answer is an array?

Note that the input array is passed in by reference, which means a modification to the input array will be known to the caller.

Internally you can think of this:

// nums is passed in by reference. (i.e., without making a copy)
int len = removeDuplicates(nums);

// any modification to nums in your function would be known by the caller.
// using the length returned by your function, it prints the first len elements.
for (int i = 0; i < len; i++) {
    print(nums[i]);
}
 

Example 1:

Input: nums = [1,1,1,2,2,3]
Output: 5, nums = [1,1,2,2,3]
Explanation: Your function should return length = 5, with the first five elements of nums being 1, 1, 2, 2 and 3 respectively. It doesn't matter what you leave beyond the returned length.
Example 2:

Input: nums = [0,0,1,1,1,1,2,3,3]
Output: 7, nums = [0,0,1,1,2,3,3]
Explanation: Your function should return length = 7, with the first seven elements of nums being modified to 0, 0, 1, 1, 2, 3 and 3 respectively. It doesn't matter what values are set beyond the returned length.
 

Constraints:

1 <= nums.length <= 3 * 104
-104 <= nums[i] <= 104
nums is sorted in ascending order.
*/

function removeDuplicates(nums) {

    // keep track of a count of each number
    // compare it to the number before it 
    // if the same, increment count
    // if count > 2, replace the current value with a ""
    // if number is different, resent the count to 1

       let count = 1;

       for (let i = 1; i < nums.length; i++) {
         if (nums[i] !== nums[i - 1]) {
           count = 1;
        //    console.log("reset", i);
         } else {
           count++;
         }

         if (count > 2) {
        //    console.log(nums, i, count);
           nums.splice(i, 1);
           i -= 1;
        //    console.log("new", nums);
         }
       }

       nums.filter((num) => num !== "");

       return nums.length;
}

// let nums = [1, 1, 1, 2, 2, 3];
// console.log(removeDuplicates(nums))

/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
Example 4:

Input: s = "([)]"
Output: false
Example 5:

Input: s = "{[]}"
Output: true
*/

function isValid(string) {
    // let pairs = {
    //     "{" : "}",
    //     "(" : ")",
    //     "[" : "]"
    // }


    // let chars = [];

    // for(let i = 0; i < string.length; i++) {


    // }
}

/*
Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

The number of elements initialized in nums1 and nums2 are m and n respectively. You may assume that nums1 has a size equal to m + n such that it has enough space to hold additional elements from nums2.

 

Example 1:

Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Example 2:

Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
 

Constraints:

nums1.length == m + n
nums2.length == n
0 <= m, n <= 200
1 <= m + n <= 200
-109 <= nums1[i], nums2[i] <= 109
*/

function mergeSortedArrays(nums1, m, nums2, n) {
    for (let i = 0; i < n; i++) {
      let addIndex = m + i;
      nums1[addIndex] = nums2[i];
    }

    return nums1.sort((a, b) => a - b);

} 

// let nums1 = [1,2,3,0,0,0]
// let m = 3
// let nums2 = [2,5,6]
// let n = 3

// console.log(mergeSortedArrays(nums1, m, nums2, n))

/*
We have a list of points on the plane.  Find the K closest points to the origin (0, 0).

(Here, the distance between two points on a plane is the Euclidean distance.)

You may return the answer in any order.  The answer is guaranteed to be unique (except for the order that it is in.)

 

Example 1:

Input: points = [[1,3],[-2,2]], K = 1
Output: [[-2,2]]
Explanation: 
The distance between (1, 3) and the origin is sqrt(10).
The distance between (-2, 2) and the origin is sqrt(8).
Since sqrt(8) < sqrt(10), (-2, 2) is closer to the origin.
We only want the closest K = 1 points from the origin, so the answer is just [[-2,2]].
Example 2:

Input: points = [[3,3],[5,-1],[-2,4]], K = 2
Output: [[3,3],[-2,4]]
(The answer [[-2,4],[3,3]] would also be accepted.)
 

Note:

1 <= K <= points.length <= 10000
-10000 < points[i][0] < 10000
-10000 < points[i][1] < 10000
*/

function kClosest (points, K) {
// points is a matrix of coordinates, x is [0] and y is [1]
// make an array of the distances with coordinating indices to the points array
// find the min of that array, return any indices that have that value in the min array, and then return those indices as the result

    let distances = [];
    points.forEach(point => {
        let distance = Math.pow(point[0], 2) + Math.pow(point[1], 2)
        distances.push(Math.sqrt(distance))
    })

    let min = Math.min(...distances);
    let indices = [];

    distances.forEach((distance, i) => {
        if (distance === min) {
            indices.push(i)
        }
    })

    console.log(indices)

    let result = [];

    indices.forEach(index => {
        if (result.length <= K) {
            result.push(points[index])
        }
    })

    return result;
}

let points = [
  [3, 3],
  [5, -1],
  [-2, 4],
]
let K = 2;

console.log(kClosest(points, K));