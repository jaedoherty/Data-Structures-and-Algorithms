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