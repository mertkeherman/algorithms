const groupAnagrams = (strs) => {
    
    //store grouped strs
    // { tea : ['eat', 'ate', 'tea']}
    const groupedStrs = {};
    
    //loop over strs
    for(let str of strs){
        
        //reverse str and assign to key
        const key = str.split('').sort().join('');
        
        //if key is not stored create new empty arr for the key
        if(!groupedStrs[key]){
            groupedStrs[key] = [];
        }
        
        groupedStrs[key].push(str);
    }
    
    //return arr of values
    return Object.values(groupedStrs);
    
};

const strs = ["eat","tea","tan","ate","nat","bat"]
console.log(groupAnagrams(strs));
