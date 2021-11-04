const validateSubsequentArray = (arr, subArr) => {
    //given are two non empty arrays
    //check if the subArr is subsequence of the arr
    //numbers must not be adjacent 
    //return true or false
    //O(n)

    if (subArr.length > arr.length) return false;

    let idx = 0;

    for (const arrNum of arr) {
        if (idx === subArr.length) {
            break;
        } else if (subArr[idx] === arrNum) {
            idx++;
        }
    }

    if (idx === subArr.length) {
        return true;
    } else {
        return false;
    }


}

console.log(validateSubsequentArray([10, 11, 12, 13, 14, 15], [11, 13])); //returns true
console.log(validateSubsequentArray([10, 11, 12, 13, 14, 15], [11, 10])); //returns false
console.log(validateSubsequentArray([10, 11, 12, 13, 14, 15], [11])); //returns true
console.log(validateSubsequentArray([10, 11, 12, 13, 14, 15], [11, 13, 15])); //returns true
console.log(validateSubsequentArray([10, 11, 12, 13, 14, 15], [10, 11, 12])); //returns true
console.log(validateSubsequentArray([10, 11, 12, 13, 14, 15], [9])); //returns false
console.log(validateSubsequentArray([10, 11], [10, 11, 12])); //returns false