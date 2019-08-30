String.prototype.reverse = function () {
    return this.split("").reverse().join("");
}

class BigNumber {
    constructor(value) {
        this.value = ""+value
    }

    toString() { return this.value; }

    equals(number) {
        return this.value == number.value;
    }

    add(number) {
        if (typeof number === "number") number=new BigNumber(number);
        const n1 = this.value.reverse();
        const n2 = number.value.reverse();
        const l  = Math.max(n1.length, n2.length)
        let s = 0, result = "";
        
        for(let i=0;i<l;i++) {
            let s1=i < n1.length ? (n1[i]|0) : 0;
            let s2=i < n2.length ? (n2[i]|0) : 0;
            s+=s1+s2;
            result += (s%10);
            s=parseInt(s/10);
        }
        while(s>0) {
            let n = s%10;
            result += n;
            s=parseInt(s/10);
        }
        result = result.reverse()
        return new BigNumber(result);
    }

    inc() {
        return this.add(1);
    }

    mul(number) {
        if (typeof number === "number") number=new BigNumber(number);
        let counter = new BigNumber("0")
        let result  = new BigNumber("0")
        while (!counter.equals(number)) {
            result  = result.add(this);
            counter = counter.inc();
        }
        return result;
    }

    exp(number) {
        if (typeof number === "number") number=new BigNumber(number);
        let counter = new BigNumber("0")
        let result  = new BigNumber("1")
        while (!counter.equals(number)) {
            result  = result.mul(this);
            counter = counter.inc();
        }
        return result;
    }

}

const result = (n) => {
    let a = new BigNumber(1)
    for(let b = 1; b<=n;b++)a=a.mul(b);
    return eval(a.toString().split("").join("+"))
}

result(10)   // 27