function scatterPalindrome(strToEvaluate) {
  let count = 0;
  let palindromes = []
  for (let i = 0; i < strToEvaluate.length; i++) {
      for (let j = i; j < strToEvaluate.length; j++) {
          let sub = strToEvaluate.slice(i, j+1)
          let perms = permutations(sub.split(""))
        //   console.log("sub", perms)
          let counted = false;
        //   while(!counted) {

              perms.forEach(perm => {
                  if (perm.join("") === perm.reverse().join("")) {
                    //   console.log("perm", perm)
                      if(sub.length === 1 || !palindromes.includes(sub)) palindromes.push(sub)
                    //  counted = true 
                    
                  } 
              })
            //   counted = true; 
        //   }
          console.log("pals", palindromes)
      }
  }

  return palindromes.length
}

function permutations(array) {
//  array = str.split()
  if (array.length <= 1) {
    return [array];
  }
  const result = [];
  const first = array.pop();
  const prevPerms = permutations(array);

  prevPerms.forEach((perm) => {
    for (let i = 0; i <= perm.length; i++) {
      let nextPerm = perm.slice(0, i).concat([first]).concat(perm.slice(i));
      result.push(nextPerm);
    }
  });

  return result;
}

// let str = "tacocat";
// console.log("split", str.split(""))
// console.log(scatterPalindrome(str))


/*
Given two strings s and t, return the minimum window in s which will contain all the characters in t. If there is no such window in s that covers all characters in t, return the empty string "".

Note that If there is such a window, it is guaranteed that there will always be only one unique minimum window in s.

 

Example 1:

Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Example 2:

Input: s = "a", t = "a"
Output: "a"
 

Constraints:

1 <= s.length, t.length <= 105
s and t consist of English letters.
 

Follow up: Could you find an algorithm that runs in O(n) time?
*/

function anagram (s1, s2) {
    let chars = {};
    if (s1.length !== s2.length) return false;
    for(let i = 0; i < s1.length; i++) {
        if (chars[s1[i]]) {
            chars[s1[i]] += 1
        } else {
            chars[s1[i]] = 1
        }
    }
    for(let i = 0; i < s2.length; i++) {
        if (chars[s2[i]]) {
            chars[s2[i]] -= 1
        } else {
            chars[s2[i]] = 1
        }
    }

    return Object.values(chars).every(num => num === 0)
}



function minWindow(s, t) {
    let left = 0;
    let right = t.length;
    let sub = s.slice(left, right).split("")
    let includes = 0;

    t.split("").forEach((char, i) => {
        if (!sub.includes(char)) {

        }
    })
    // if (s.slice(left, right))


//     if (!t.length) return "";
//     let minSub = s;
//     let nextTChar = t[0];
//     let tIndex = s.indexOf(nextTChar)
// // check 0 to s and s to end for the next character
// // like a binary search



//        if (tIndex < 0) {
//          return "";
//        }
//        let start = minWindow(s.slice(0, t+1), t.slice(1))
//        let end = minWindow(s.slice(t, s.length), t.slice(1))
     
//        if (start.length === 0) {
//            return end
//        } else if (end.length === 0) {
//            return start
//        }

//        return start.length < end.length ? start : end
     

//     //    if (s.includes(nextTChar)) {
//     //     //    return minWindow(s.slice(tIndex + 1), t.slice(1, t.length - 1)) 
//     //        return nextTChar.concat(minWindow(s.slice(tIndex + 1), t.slice(1)));
//     //    }
//     // // if (tIndex === 0) {
//     //     // } else {
//     //     return minWindow(s.slice(tIndex + 1), t.slice(1, t.length - 1))
//     // // }
    
}

let s = "DOBECODEBANC"
let t = "ABC"
// let u = 

console.log(anagram(s, t))

// Write a `String.prototype.realWordsInString(dictionary)` method, that returns
// an array containing the substrings of `string` that appear in `dictionary`.
// sorted alphabetically. This method does NOT return any duplicates

String.prototype.realWordsInString = function(dictionary) {
    // let alpha = "abcdefghijklmnopqrstuvwxyz";
    // let substrings

    // function (str) {
    let substrings = [];
    // let that = this;
    for(let i = 0; i < this.length; i++) {
        for(let j = i; j < this.length; j++) {
           substrings.push(this.slice(i, j+1)) 
        }
    }
    let that = this;
    // console.log(substrings.includes(that), that)
    // console.log(substrings)
    let result = []
    substrings.forEach(sub => {
        if(dictionary.includes(sub) && !result.includes(sub) ) {
            console.log(sub)
            result.push(sub)
        }
    })
    return result.sort();
}
    
// }