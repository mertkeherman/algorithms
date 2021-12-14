/**
 * @param {number[]} nums
 * @return {number}
 */
// time and space O(n);
var maxProduct = function(nums) {
    //create helper arrays until specific index
    let maxArr = [nums[0]];
    let minArr = [nums[0]];
    let result = nums[0];
    
    //go over input arr
    for (let i = 1; i < nums.length; i++){
        const num = nums[i];
        
        //calc which num is larger, account for negative numbers
        maxArr[i] = Math.max(num, num * maxArr[i - 1], num * minArr[i - 1]);
        //calc which num is less
        minArr[i] = Math.min(num, num * maxArr[i - 1], num * minArr[i - 1]);
        
        //set result
        result = Math.max(result, maxArr[i]);
    }
    
    return result;
};
