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
    if (!alphabet) let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let sorted = false;
    let arr = string.split("")
    while (!sorted) {
        sorted = true;
        for (let i = 0; i < arr.length - 1; i++) {
            if (alphabet.indexOf(arr[i]) > alphabet.indexOf(arr[i + 1])) {
                [arr[i], arr[i+1]] =[ arr[i+1], arr[i]]
                sorted = false;
            }
        }
    }

    return arr.join("")
} 
