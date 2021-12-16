/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let result = 0;
    //create a roman map
     const romanMap = {"I" : 1, "V" : 5, "X" : 10, "L" : 50, "C" : 100, "D" : 500, "M" : 1000 };
    
    //go over the s and add number together
    for( let i = 0; i < s.length; i++){
        //set helper vars
        let currLetter = s[i] 
        let nextLetter = s[i + 1];
        
        //check if we have two letters for one number
        if(romanMap[currLetter] < romanMap[nextLetter]){
            result += romanMap[nextLetter] - romanMap[currLetter];
            i++;
        } else {
            result += romanMap[currLetter];
        }
    }
    
    return result;
        
};

