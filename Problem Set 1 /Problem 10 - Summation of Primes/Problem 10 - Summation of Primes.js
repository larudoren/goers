function primeSummation(n) {
    let total = 0;
    
    const isPrime = num => {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return num !== 0 && num !== 1;
    }
    
    for (let i = 2; i < n; i++) {
        if (isPrime(i)) {
            total += i;
        }
    }
    
    // console.log(total);
    return total;
}

primeSummation(17); // 41