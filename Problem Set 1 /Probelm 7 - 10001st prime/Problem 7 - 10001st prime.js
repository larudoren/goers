function getNthPrime(n) {
  let primes = [];
    
    const isPrime = num => {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return num !== 0 && num !== 1;
    }
    
    let count = 2;
    while (primes.length < n) {
        if (isPrime(count)) {
            primes.push(count);
        }
        count++;
    }
    
    // console.log(primes.pop());
    return primes.pop();
}

getNthPrime(6); // 13