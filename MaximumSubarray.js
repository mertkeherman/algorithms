// [5, 9 ,8 , 15 ,23]
// maxPrevSum =  5
// maxCurrSum =  5
//[5,4,-1,7,8]
// i
const maxSubArray = (nums) => {
    
    //max prev sum until current index
    //helps to find max value without the second for loop
    const maxPrevSum = [nums[0]];
    // max variable
    let maxCurrSum = nums[0];
    
    //loop over nums
    for(let i = 1; i < nums.length; i++){
        let num = nums[i];
        //determin max sum until now and set it
        maxPrevSum[i] = Math.max(num, num + maxPrevSum[i -1]);
        //determin the current max value, its either current maxValue or max sum until current index
        maxCurrSum = Math.max(maxCurrSum, maxPrevSum[i]);
    }
    
    return maxCurrSum;
    
};

const nums = [5,4,-1,7,8];

console.log(maxSubArray(nums));
