function twoSum(numsArray, targetSum) {
    // given an unsorted and non empty array of distinct numbers
    // given a target sum which is a sum of two numbers in the given array
    // return an array of the two numbers that summed up are equal to the target sum, or empty array
    // go trough the array once O(n)

    const map = {};

    for (const num of numsArray) {
        let searchedNum = targetSum - num;
        if (searchedNum in map) {
            return [searchedNum, num];
        } else {
            map[num] = true;
        }
    }

    return [];

}

twoSum([-3, 6, 2, -7], 3);