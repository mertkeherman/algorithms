/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    //sort the input
    nums.sort((a,b) => a - b);
    
    //helper vars
    let closest = 0;
    let min = Infinity;

    //loop over nums
    //[-1,5,-12,2,1,-4]
    //  i l          r
    for(let i = 0; i < nums.length; i ++){
        let leftPointer = i + 1; 
        let rightPointer = nums.length - 1;
        
        while(leftPointer < rightPointer){
            let sum = nums[i] + nums[leftPointer] + nums[rightPointer];
            const diff = Math.abs(sum - target);
            //found new closest
            if(diff < min){
                min = diff;
                closest = sum;
            }
            if(sum < target){
                leftPointer++;
            } else {
                rightPointer--;
            }
        }
    }
    
    return closest;
    
};

