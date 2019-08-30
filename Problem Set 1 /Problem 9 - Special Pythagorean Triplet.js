function specialPythagoreanTriplet(n) {
    let sumOfabc = n;
    
    for (let a = 1; a <= sumOfabc; a++) {
        for (let b = a + 1; b <= sumOfabc; b++) {
            const c = Math.sqrt(a * a + b * b);
            
            if (a + b + c === sumOfabc) {
                console.log(a, b, c, a * b * c);
                return a * b * c;
            }
        }
    }
}

specialPythagoreanTriplet(24) // 480
// specialPythagoreanTriplet(120) // 49920
// specialPythagoreanTriplet(1000) // 31875000