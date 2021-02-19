function caesarCipher(str, shift) {
  let alpha = "abcdefghijklmnopqrstuvwxyz";

  let result = [];
  for (let i = 0; i < str.length; i++) {
    if (alpha.includes(str[i])) {
      let newI = (alpha.indexOf(str[i]) + shift) % 26;
      result.push(alpha[newI]);
    } else {
      result.push(str[i]);
    }
  }

  return result.join("");
}

function jumbleSort(string, alphabet) {
    if (!alphabet) {
      alphabet = "abcdefghijklmnopqrstuvwxyz"
    }
    let sorted = false;
    let arr = string.split("")
    while (!sorted) {
        sorted = true;
        for (let i = 0; i < arr.length - 1; i++) {
          // console.log(alphabet)
            if (alphabet.split("").indexOf(arr[i]) > alphabet.indexOf(arr[i + 1])) {
                [arr[i], arr[i+1]] =[ arr[i+1], arr[i]]
                sorted = false;
            }
        }
    }

    return arr.join("")
} 

// console.log(jumbleSort("hello"))

function recSum(numArr) {
  if (!numArr.length) return 0;
  if (numArr.length === 1) return numArr[0];

  return numArr[0] + recSum(numArr.slice(1))
}

// console.log(recSum([1, 2, 3, 4]))

const sort = function(right, left) {
  let sorted = [];


  while(left.length > 0 && right.length > 0) {

    if (right[0] > left[0]) {
      sorted.push(left.shift())
    } else {
      sorted.push(right.shift())
    }
  }
 
  
 
  
  sorted = sorted.concat(right, left);

  return sorted;
  // return 
}

Array.prototype.mergeSort = function(callback) {
  if (this.length < 2) return this;
  if (!callback) callback = sort;
  let midIdx = Math.floor(this.length / 2);
  console.log(this.slice(0, midIdx), this.slice(midIdx));
  let right = callback(this.slice(0, midIdx))
  let left = callback(this.slice(midIdx))

  return right.mergeSort(callback).concat(left.mergeSort(callback))
  
}

let right = [1, 5, 6]
let left = [2, 3, 4]


console.log([1, 4, 6, 3, 7, 34, 53, 14].mergeSort())

var name = "vloc";
function foo() {
   name = "devel; "
   return;
   function name(){}
}

foo();
console.log(name)