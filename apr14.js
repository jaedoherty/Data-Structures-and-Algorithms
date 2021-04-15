/**
 * @param {number} num
 * @return {string}
 */

const UNITS = {
  1: "One",
  2: "Two",
  3: "Three",
  4: "Four",
  5: "Five",
  6: "Six",
  7: "Seven",
  8: "Eight",
  9: "Nine",
  10: "Ten",
};
const TEENS = {
  11: "Eleven",
  12: "Twelve",
  13: "Thirteen",
  14: "Fourteen",
  15: "Fifteen",
  16: "Sixteen",
  17: "Seventeen",
  18: "Eighteen",
  19: "Nineteen",
};
const TENS = {
  20: "Twenty",
  30: "Thirty",
  40: "Forty",
  50: "Fifty",
  60: "Sixty",
  70: "Seventy",
  80: "Eighty",
  90: "Ninety",
};
const PLACES = {
  100: "Hundred",
  1000: "Thousand",
  1000000: "Million",
  1000000000: "Billion",
};
function addZeroes(integer, numZeros) {
  while (integer.length < numZeros) {
    integer += "0";
  }
  return parseInt(integer);
}
function findPlace(int) {
  let referenceInt = parseInt(int.toString()[0]);
  let currentPlace = PLACES[int / referenceInt];
  return UNITS[referenceInt] + " " + currentPlace;
}
var numberToWords = function (num) {
  if (num < 0)
    throw new Error("this function only accepts non-negative numbers");
  if (num === 0) return 0;
  let numString = num.toString().split("");
  let result = [];
  numString.forEach((int, i) => {
    if (int.length === 1) {
      result.push(UNITS[parseInt(int)]);
    } else if (int.length === 2) {
      console.log("teens", addZeroes(int, numString.length - i));
      result.push(TEENS[addZeroes(int, numString.length - i)]);
    } else {
      console.log("100+", findPlace(addZeroes(int, numString.length - i)));
      result.push(findPlace(addZeroes(int, numString.length - i)));
    }
  });
  return result.join(" ");
};
