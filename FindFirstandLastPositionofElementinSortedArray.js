/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//[5, 7, 7, 8, 8, 10]
//          l      r
//             m 
//mid = (3 + 5)/2 => 4
//pos = 4
var searchRange = function(nums, target) {
    //helper vars
    let pos = -1;
    let left = 0;
    let right = nums.length -1;
    
    //look fot the target
    while(left <= right){
        //calc mid
        let mid = Math.floor((left + right)/2);
        //check for target
        if(nums[mid] === target){
            pos = mid;
            break
        }
        //set new left and right
        if(target > nums[mid]){
            left = mid + 1
        } else {
            right = mid -1
        }
    }
    
    if(pos === -1) return [-1, -1];
    
    //look for start
    let startPos = pos;
    while(startPos > -1){
        if(nums[startPos -1] !== target){
            break
        } else {
            startPos--
        }
    }
    
    //look for end
    let endPos = pos;
    while(startPos < nums.length){
        if(nums[endPos +1] !== target){
            break
        } else {
            endPos++
        }
    }
    
    return [startPos, endPos];
};
