/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    
   //sort input
    nums = nums.sort((a, b) => a - b)

    //helper vars
    let i, j, k, m, sum
    let result = []
    
    //main loop
    for (i = 0; i < nums.length - 3; i++) {
        //avoid duplicates
        if (i > 0 && nums[i] === nums[i - 1]) continue
        //second for loop
        for (j = i + 1; j < nums.length - 2; j++) {
            //avoid repetitive values
            if (j !== i + 1 && nums[j] === nums[j - 1]) continue
            //set two extra pointers
            k = j + 1
            m = nums.length - 1
            while (k < m) {
                sum = nums[i] + nums[j] + nums[k] + nums[m]
                if (sum === target) {
                    result.push([nums[i], nums[j], nums[k], nums[m]])

                    //avoid duplicates
                    while (nums[k + 1] === nums[k]) k++
                    while (nums[m - 1] === nums[m]) m--

                    k++
                    m--
                } else if (sum > target) {
                    m--
                } else {
                    k++
                }
            }

        }
    }
    return result;
};
