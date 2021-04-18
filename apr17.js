/*
 * Complete the 'palindromeChecker' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER_ARRAY startIndex
 *  3. INTEGER_ARRAY endIndex
 *  4. INTEGER_ARRAY subs
 * 
 * Given a string s, we make queries on substrings of s.

For each query queries[i] = [left, right, k], we may rearrange the substring s[left], ..., s[right], and then choose up to k of them to replace with any lowercase English letter. 

If the substring is possible to be a palindrome string after the operations above, the result of the query is true. Otherwise, the result is false.

Return an array answer[], where answer[i] is the result of the i-th query queries[i].

Note that: Each letter is counted individually for replacement so if for example s[left..right] = "aaa", and k = 2, we can only replace two of the letters.  (Also, note that the initial string s is never modified by any query.)

 

Example :

Input: s = "abcda", queries = [[3,3,0],[1,2,0],[0,3,1],[0,3,2],[0,4,1]]
Output: [true,false,false,true,true]
Explanation:
queries[0] : substring = "d", is palidrome.
queries[1] : substring = "bc", is not palidrome.
queries[2] : substring = "abcd", is not palidrome after replacing only 1 character.
queries[3] : substring = "abcd", could be changed to "abba" which is palidrome. Also this can be changed to "baab" first rearrange it "bacd" then replace "cd" with "ab".
queries[4] : substring = "abcda", could be changed to "abcba" which is palidrome.
 

Constraints:

1 <= s.length, queries.length <= 10^5
0 <= queries[i][0] <= queries[i][1] < s.length
0 <= queries[i][2] <= s.length
s only contains lowercase English letters.
 */

function palindromeChecker(s, startIndex, endIndex, subs) {
    // Write your code here
    if (s.length < 2) return '1';
    const result = '';
    startIndex.forEach((start, i) => {
        const newStr = s.slice(start, endIndex[i + 1])

    })
    return result;

}

function isPalindrome(s) {
   return s.split('').reverse().join('').toLowerCase() === s.toLowerCase()
}

// ------------------------------------------------------------------------
/* A robotic chemical delivery system for an Amazon laboratory has been configured to work using only one type of glass flask per day. For each chemical ordered, it will be filled to a mark that is at least equal to the volume ordered. There are multiple flasks available, each with markings at various levels.

Given a list of order requirements and a list of flasks with their measurements, write an algorithm to determine the single type of flask that will result in minimal waste. Waste is the sum of marking - requirement for each order. Output the zero-based index of the flask type chosen. If there are multiple answers, output the minimum index. If no flask satisfies the constraints, output -1.

Input
The input to the function/method consists of five arguments:

numOrders: an integer representing the number of orders;

requirements: a list of integers representing the requirements for the orders;

flaskTypes: an integer representing the number of flask types;

totalMarks: an integer representing the total number of markings;

markings: a list of pairs of integers where the first integer represents the index of the flask and second represents the one mark.

Output
Return an integer representing the index of the flask to choose or return -1 if none will work.

Constraints
1 <= numOrders <= 10^5
1 <= flaskTypes <= 10^4
1 <= totalMarks <= 10^5
1 <= requirements[i] <= 10^9
0 <= markings[i][0] < flaskTypes
0 <= markings[i][1] <= 10^9
0 <= j < numOrders
0 <= i < totalMarks
Note
The markings list will be given in order of the flasks, ie, the markings for the 0-index flask will be followed by markings of the 1-index flask and so on.

For each flask, the given markings will also be sorted in ascending order.

Examples
Example 1:
Input:
numOrders = 4

requirements = [4,6,6,7]

flaskTypes = 3

totalMarks = 9

markings =[[0, 3],[0,5],[0,7],[1,6],[1,8],[1,9],[2,3],[2,5],[2,6]]

Output: 0

Explanation:

The markings list is a list where the first element is the flask number and the second an available marking in this case, the first type has markings at 3, 5 and 7. The second type has them at 6, 8 and 9, and the third type has markings at 3, 5 and 6. Using the first flask type, the losses are: 5 - 4 = 1,7 -6 =1,7 -6 = 1, 7- 7 = 0.1 + 1 + 1 + 0 = 3 units wasted. Using the second flask type, losses are: 6 - 4 = 2.6 - 6 = 0,6-6 = 0,8 - 7 = 1.2 + 0 + 0 + 1 = 3units wasted. The third flask type cannot be used because its maximum capacity is 6 and there is an order for 7. Two types of flasks can be used and 3 units will be lost. The lower index flask is at index 0.
*/
function chooseFlask(requirements, flaskTypes, markings) {
  // Write your code here
  const flaskMarkings = {};

  markings.forEach((mark) => {
    let flaskNum = mark[0];
    if (flaskMarkings[flaskNum]) {
      flaskMarkings[flaskNum].push(mark[1]);
    } else {
      flaskMarkings[flaskNum] = [mark[1]];
    }
  });
  let minWaste;
  let currentWaste = 0;
  let bestFlask = -1;

  Object.keys(flaskMarkings).forEach((flask) => {
    const marks = flaskMarkings[flask];
    marks.forEach((marking) => {
      const waste = marking - requirements[flask];
      console.log('waste', marking, requirements[flask], waste, currentWaste)
      if (waste > 0) currentWaste += waste;
    });
    console.log(minWaste, currentWaste);
    if (minWaste === undefined || minWaste > currentWaste) {
        console.log('changing waste', flask)
      minWaste = currentWaste;
      currentWaste = 0;
      bestFlask = flask;
    }
  });

  return bestFlask;
}

console.log(
  chooseFlask([4, 6], 2, [
    [0, 5],
    [0, 7],
    [0, 10],
    [1, 4],
    [1, 10],
  ])
);

//------------------------------------------------------------------------

/*
 * Complete the 'minimumMoves' function below. 
 Given 2 arrays (of integers), find the min # of moves to make arr1 === arr2.

 Ex: arr1 = [123, 543]
 arr2 = [321, 279]



 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY arr1
 *  2. INTEGER_ARRAY arr2
 */

function minimumMoves(arr1, arr2) {
    // Write your code here

}