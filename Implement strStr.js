/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    //edge case
    if(!needle.length) return 0;
    
    //helper vars
    let i = 0;
    let s = 0;
    
    //h e l l o  ll
    //    i
    //    s
    while(i < (haystack.length - needle.length + 1)){
       //compare the letters
        if(haystack[i + s] !== needle[s]){
            i++;
            s=0;
        } else {
            s++;
            if(s === needle.length) return i;
        }
    }
    return -1;
};
