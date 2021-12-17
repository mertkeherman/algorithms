/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    //create roman map/arr descending order 
    const romanMap = [
        { val: 1000, symbol: 'M' },
        { val: 900, symbol: 'CM' },
        { val: 500, symbol: 'D' },
        { val: 400, symbol: 'CD' },
        { val: 100, symbol: 'C' },
        { val: 90, symbol: 'XC' },
        { val: 50, symbol: 'L' },
        { val: 40, symbol: 'XL' },
        { val: 10, symbol: 'X' },
        { val: 9, symbol: 'IX' },
        { val: 5, symbol: 'V' },
        { val: 4, symbol: 'IV' },
        { val: 1, symbol: 'I' },
    ];
    
    //create helper vars
    let currNum = num;
    let result = '';
    let i = 0;
    
    //while num is valid
    while(currNum){
            // 1000   M
        const { val, symbol} = romanMap[i];
        
        while(currNum >= val){
            //add symbol to result str
            result += symbol;
            //subtract symbol val from currNum
            currNum -= val;
        }
        
        i++;
            
    }
    
    return result;
            
};


