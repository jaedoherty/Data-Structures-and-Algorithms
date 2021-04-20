function isPrime(num) {
    if (num <= 2) return true;
    
    let currentFactor = 2;
    let primeBool = true;

    while(currentFactor < num) {
        if (num % currentFactor === 0) {
            primeBool = false;
            break;
        }
        currentFactor++
    }

    return primeBool;
}

console.log(isPrime(0))                          // false
console.log(isPrime(1))                         // false
console.log(isPrime(17))                         // true
console.log(isPrime(10000000000000))             // false