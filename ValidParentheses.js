const isValid = (s) => {
    //stack to store brakets 
    const stack = [];
    
    //define lookup object for brakets order
    //key value pairs 
    const lookup = { "{":"}", "(":")", "[":"]"}
    
    //loop over input string
    for(let i = 0; i < s.length; i++){
        let char = s[i];
        
        //check if there is a key equal to char in the lookup
        if(lookup[char]) {
            stack.push(char);
        } else if(lookup[stack.pop()] !== char){
            //we are in here because it is not a left half(key of lookup)
            return false;
        }
    }
    
    return stack.length === 0;
};

const s = "()[]{}";

console.log(isValid(s));
