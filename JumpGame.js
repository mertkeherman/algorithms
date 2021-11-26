// curr   next   
// 2       3     1      1      4
// true   false  false  false  false
const canJump = (nums) => {
   
    
    
    const possibleJumps = new Array(nums.length).fill(false);
    possibleJumps[0] = true;
    
    for(let next = 1; next < nums.length; next++){
        for(let current = 0; current < next; current++){
            //if possible to reach to reach curr and jump from curr to next, set pj to true
            if(possibleJumps[current] && current + nums[current] >= next){
                possibleJumps[next] = true;
                //if not possible to jump to next keep next false
                break;
            } 
        }
        
    }
    
    //return last value of pj
    return possibleJumps.pop();
};

nums = [3,2,1,0,4]
console.log(canJump(nums));
