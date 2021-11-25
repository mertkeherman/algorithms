// 0  1  2  3  4  5  6  7 
//"a  b  c  a  b  c  b  b"
// s  e
//{ "a" : 0, }
//maxLength = 1; 
const lengthOfLongestSubstring = (s) => {
    const charsMap = {};
    let winStart = 0;
    let maxLength = 0;
    
    for(let i = 0; i < s.length; i++){
        const winEnd = s[i];
        
        //check if current is already in charsMap/window
        //if true, duplicate value found
        if(charsMap[winEnd] >= winStart){
            //move to where it was las found + 1
            winStart = charsMap[winEnd] + 1;
        }
        //move winEnd
        charsMap[winEnd] = i;
        
        //calculate new maxLength
        maxLength = Math.max(maxLength, i - winStart + 1);
    }
    
    return maxLength;
};

const  s = "abcabcbb"
console.log(lengthOfLongestSubstring(s));
