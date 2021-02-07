function maxNumWith5(n) {
    let max = 0;
    let arr = n.toString()

    for(i = 0; i < arr.length; i++) {
        let start = arr.slice(0, i);
        let end = arr.slice(i, arr.length);
        // console.log(start, end)

        let newNum = start + "5" + end 

        if (parseInt(newNum) > max) {
            max = parseInt(newNum); 
        }
    }

    return max;
}

// let n = 14;
// console.log(maxNumWith5(n))

function balancedString(S) {
   
    let substrings = [];

      for (let i = 0; i < S.length; i++) {
        for (let j = i + 1; j < S.length; j++) {
          const subst = S.slice(i, i + j);
          substrings.push(subst);

        }
      }

      let shortest = "";
      substrings.forEach(sub => {
         if (shortest.length === 0) {
             if (isBalanced(sub)) {
                let shortest = sub
             }
         } else if (shortest.length > sub && isBalanced(sub)) {
             shortest = sub;
         }
      })

    //   return shortest.length;
    if (shortest.length === 0) {
        return -1;
    } else {
        return shortest;
    }
}

function isBalanced(string) {
    for(i = 0; i < string.length; i++) {
        if (string[i] === string[i].toLowerCase()) {
           if (!string.includes(string[i].toUpperCase())) {
                return false;
           } 
        } else if (string[i] === string[i].toUpperCase()) {
            if (!string.includes(string[i].toLowerCase())) {
              return false;
            } 
        } 
    }

    return true;
}

let S = "azABaabza";
console.log(isBalanced('AcZCbaB'));
console.log(balancedString(S));
