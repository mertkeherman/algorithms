//each triplet must return 0
//we need an sorted array to achieve O(n^2)
//use 3 pointers
//[ -4, -1, -1, 0, 1, 2 ]
//   i   L            R   

const threeSum = (nums) => {
    
    //use higher order function to sort
    nums.sort((a,b) => a - b);
    //result array
    let result = [];
    
    for(let i = 0; i < nums.length; i++) {
        const searched = 0 -nums[i]; // 0 - (-4) = 4
        let leftPointer = i + 1;
        let rightPointer = nums.length - 1;
        
        //skip duplicates;
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        
        while(leftPointer < rightPointer) {
            if(nums[leftPointer] + nums[rightPointer] === searched){
                result.push([nums[i], nums[leftPointer], nums[rightPointer]]);
                leftPointer++;
                while(nums[leftPointer] === nums[leftPointer - 1]){
                    leftPointer++;
                }
            } else if (nums[leftPointer] + nums[rightPointer] < searched) {
                leftPointer++;
            } else {
                rightPointer--;
            }
        }
    }
    
    return result;
};

const nums = [-1,0,1,2,-1,-4]
console.log(threeSum(nums));