/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    
    let combinations = digits ? [''] : [];
    
    const map = {
        2: "abc",
        3: "def",
        4: "ghi",
        5: "jkl",
        6: "mno",
        7: "pqrs",
        8: "tuv",
        9: "wxyz",
    };
    
    //loop over every digit
    for(let digit of digits){
        let newCombis = [];
        //loop over combis
        for(let combi of combinations){
            //cobine letters 'ad', 'ae'
            for(const letter of map[digit]){
                //combi  a a a
                //letter d e f
                newCombis.push(combi + letter)
            }
        }
        // ['a', 'b', 'c']
        combinations = newCombis;
    }
    
    return combinations;
};
