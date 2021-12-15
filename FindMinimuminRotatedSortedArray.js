/**
 * @param {number[]} nums
 * @return {number}
 */
// use binary search
// O(log N)
var findMin = function(nums) {
    //use left and right pointers
    let leftPointer = 0;
    let rightPointer = nums.length -1;
    
    //exception cases
    //check for length
    if(nums.length === 1) return nums[0];
    
    //check if rotated
    if(nums[leftPointer] < nums[rightPointer]) return nums[leftPointer];
    
    //if not rotated, run binary search
    while(leftPointer <= rightPointer){
        //mid value
        const mid = Math.floor((leftPointer + rightPointer) / 2);
        
        //helper vars
        const leftVal = nums[leftPointer];
        const midVal = nums[mid];
        const leftOfMid = nums[mid - 1];
        const rightOfMid = nums[mid + 1];
        
        //check for inflection point
        if(midVal > rightOfMid){
            return rightOfMid;
        } else if (leftOfMid > midVal) {
            return midVal;
        }
        
        //move pointers accordingly
        if(midVal > leftVal){
            leftPointer = mid + 1;
        } else {
            rightPointer = mid -1;
        }
    }
        
    
    
};
