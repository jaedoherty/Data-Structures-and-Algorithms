// /**
//  * @param {number} num
//  * @return {string}
//  */

// const UNITS = {
//   1: "One",
//   2: "Two",
//   3: "Three",
//   4: "Four",
//   5: "Five",
//   6: "Six",
//   7: "Seven",
//   8: "Eight",
//   9: "Nine",
//   10: "Ten",
// };
// const TEENS = {
//   11: "Eleven",
//   12: "Twelve",
//   13: "Thirteen",
//   14: "Fourteen",
//   15: "Fifteen",
//   16: "Sixteen",
//   17: "Seventeen",
//   18: "Eighteen",
//   19: "Nineteen",
// };
// const TENS = {
//   20: "Twenty",
//   30: "Thirty",
//   40: "Forty",
//   50: "Fifty",
//   60: "Sixty",
//   70: "Seventy",
//   80: "Eighty",
//   90: "Ninety",
// };
// const PLACES = {
//   100: "Hundred",
//   1000: "Thousand",
//   1000000: "Million",
//   1000000000: "Billion",
// };
// function addZeroes(integer, numZeros) {
//   while (integer.length < numZeros) {
//     integer += "0";
//   }
//   return parseInt(integer);
// }
// // function findPlace(int) {
// //      if (int < 100) return "";
// //   let intPlace = (int.toString().length - 1) % 3; // how many groups of 3 0's are there
// //   console.log("intPlace", intPlace);
// //   let referenceInt = parseInt(int.toString().slice(0, int.toString().length - intPlace - 1));
// //   console.log("ref", referenceInt);
// //   let currentPlace = PLACES[int / referenceInt];
// //   console.log("currentPlace", currentPlace);

// //   if (UNITS[referenceInt]) {
// //     return UNITS[referenceInt] + " " + currentPlace;
// //   } else if (TEENS[referenceInt]) {
// //     return TEENS[referenceInt] + " " + currentPlace;
// // } else if (TENS[referenceInt]){
// //     return TENS[referenceInt] + " " + currentPlace;
// //   } else {
// //       return findPlace(referenceInt) + currentPlace 
// //   }
// // }

// // count groups of 3 0's and slice and then add the correct place

// function findPlace(int) {
//     let newInt = int.toString();
//     switch () {
//         case value:
            
//             break;
    
//         default:
//             break;
//     }
//     let count = 0
//     while(newInt.length > 3) {
//         newInt = newInt.slice(0, newInt.length - 3)
//         count++
//         console.log(newInt)
//     }

//     return Object.values(PLACES)[count];
// }

// function numberToWords(num) {
//   //   if (num < 0)
//   //     throw new Error("this function only accepts non-negative numbers");
 
//   if (num === 0) return 0;
//   let numString = num.toString().split("");
//   console.log(numString);
//   let result = [];

//   numString.forEach((int, i) => {
//     if (numString.length - i === 1) {
//       result.push(UNITS[parseInt(int)]);
//     } else if (numString.length - i === 2) {
//       console.log("teens", addZeroes(int, numString.length - i));
//       result.push(TEENS[addZeroes(int, numString.length - i)]);
//     } else {
//       console.log("100+", findPlace(addZeroes(int, numString.length - i)));
//       result.push(findPlace(addZeroes(int, numString.length - i)));
//     }
//   });
//   return result.join(" ");
// }

// console.log(findPlace(300000));

// /*class Solution:
//     def numberToWords(self, num):
//         """
//         :type num: int
//         :rtype: str
//         """
//         def one(num):
//             switcher = {
//                 1: 'One',
//                 2: 'Two',
//                 3: 'Three',
//                 4: 'Four',
//                 5: 'Five',
//                 6: 'Six',
//                 7: 'Seven',
//                 8: 'Eight',
//                 9: 'Nine'
//             }
//             return switcher.get(num)
//         def two_less_20(num):
//             switcher = {
//                 10: 'Ten',
//                 11: 'Eleven',
//                 12: 'Twelve',
//                 13: 'Thirteen',
//                 14: 'Fourteen',
//                 15: 'Fifteen',
//                 16: 'Sixteen',
//                 17: 'Seventeen',
//                 18: 'Eighteen',
//                 19: 'Nineteen'
//             }
//             return switcher.get(num)
//         def ten(num):
//             switcher = {
//                 2: 'Twenty',
//                 3: 'Thirty',
//                 4: 'Forty',
//                 5: 'Fifty',
//                 6: 'Sixty',
//                 7: 'Seventy',
//                 8: 'Eighty',
//                 9: 'Ninety'
//             }
//             return switcher.get(num)
//         def two(num):
//             if not num:
//                 return ''
//             elif num < 10:
//                 return one(num)
//             elif num < 20:
//                 return two_less_20(num)
//             else:
//                 tenner = num // 10
//                 rest = num - tenner * 10
//                 return ten(tenner) + ' ' + one(rest) if rest else ten(tenner)
//         def three(num):
//             hundred = num // 100
//             rest = num - hundred * 100
//             if hundred and rest:
//                 return one(hundred) + ' Hundred ' + two(rest) 
//             elif not hundred and rest: 
//                 return two(rest)
//             elif hundred and not rest:
//                 return one(hundred) + ' Hundred'
//         billion = num // 1000000000
//         million = (num - billion * 1000000000) // 1000000
//         thousand = (num - billion * 1000000000 - million * 1000000) // 1000
//         rest = num - billion * 1000000000 - million * 1000000 - thousand * 1000
//         if not num:
//             return 'Zero'
//         result = ''
//         if billion:        
//             result = three(billion) + ' Billion'
//         if million:
//             result += ' ' if result else ''    
//             result += three(million) + ' Million'
//         if thousand:
//             result += ' ' if result else ''
//             result += three(thousand) + ' Thousand'
//         if rest:
//             result += ' ' if result else ''
//             result += three(rest)
//         return result
//         */


const LESS_THAN_20 = [
  "",
  "One",
  "Two",
  "Three",
  "Four",
  "Five",
  "Six",
  "Seven",
  "Eight",
  "Nine",
  "Ten",
  "Eleven",
  "Twelve",
  "Thirteen",
  "Fourteen",
  "Fifteen",
  "Sixteen",
  "Seventeen",
  "Eighteen",
  "Nineteen",
];
const TENS = [
  "",
  "Ten",
  "Twenty",
  "Thirty",
  "Forty",
  "Fifty",
  "Sixty",
  "Seventy",
  "Eighty",
  "Ninety",
];
const THOUSANDS = ["", "Thousand", "Million", "Billion"];

var numberToWords = function (num) {
  if (num === 0) {
    return "Zero";
  }
  let thousandCounter = 0;
  let result = "";

  while (num > 0) {
    if (num % 1000 != 0) {
      result =
        numToString(num % 1000) + THOUSANDS[thousandCounter] + " " + result;
    }
    num /= 1000;
    num = Math.trunc(num);
    thousandCounter++;
  }
  return result.trim();
};

function numToString(num) {
  if (num === 0) return "";
  else if (num < 20) return LESS_THAN_20[num] + " ";
  else if (num < 100)
    return TENS[Math.trunc(num / 10)] + " " + numToString(num % 10);
  else
    return (
      LESS_THAN_20[Math.trunc(num / 100)] + " Hundred " + numToString(num % 100)
    );
}

console.log(numberToWords(30000))