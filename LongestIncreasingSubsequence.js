//   c   n
// [ 0,  1,  0,  3,  2,  3]
// [ 1,  1,  1,  1,  1,  1]
// max(, )
//lis = 1;
const lengthOfLIS = (nums) => {
    if(nums.length === 0) return 0;
    
    //return lis
    let lis = 1;
    
    //subsequence arr
    let subSeqHelper = new Array(nums.length).fill(1);
    
    //loop with next and curr
    for(let next = 1; next < nums.length; next++){
        for(let curr = 0; curr < next; curr++){
            //check if next > curr
            if(nums[next] > nums[curr]){
                //calc the curre lis
                subSeqHelper[next] = Math.max(subSeqHelper[curr] + 1, subSeqHelper[next])
            }
        }
        //reset lis
        lis = Math.max(lis, subSeqHelper[next]);
    }
    
    return lis;
};

nums = [10,9,2,5,3,7,101,18]
console.log(lengthOfLIS(nums))
