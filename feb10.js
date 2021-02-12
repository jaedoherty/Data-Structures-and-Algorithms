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

console.log(recSum([1, 2, 3, 4]))