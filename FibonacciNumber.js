function nthFibSeq(n) {
    if (n === 1) {
        return 0;
    } else if (n === 2) {
        return 1;
    } else {
        let result = 0;
        let count = 3;
        let first = 0;
        let second = 1;
        while (count <= n) {
            result = first + second;
            first = second;
            second = result;
            count++;
        }
        return result;
    }
}

nthFibSeq(6)