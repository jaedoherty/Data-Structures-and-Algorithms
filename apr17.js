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

console.log(palindromeChecker('cdec'))