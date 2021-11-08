const rob = (nums) => {
    //consider edge cases
    if(nums.length === 0) return 0;
    if(nums.length === 1) return nums[0];
    if(nums.length === 2) return Math.max(nums[0], nums[1]);
    
    //define the max rob amount array
    const maxRobAmount = [nums[0], Math.max(nums[0], nums[1])];
    
    //look for further houses 
    for(let i = 2; i < nums.length; i++){
        //calculate max rob amount
        maxRobAmount.push(Math.max(nums[i] + maxRobAmount[i - 2], maxRobAmount[i -1]));
    }
    
    //returning the result
    return maxRobAmount.pop();
};

const nums = [2,7,9,3,1];

console.log(rob(nums));
