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

let str = "tacocat";
// console.log("split", str.split(""))
console.log(scatterPalindrome(str))
