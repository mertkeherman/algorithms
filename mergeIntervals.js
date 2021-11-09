const merge = (intervals) => {
    
    //edge case check
    if(intervals.length === 0) return [];
    
    //sort the starting points from least to greatest
    intervals.sort((a,b) => a[0] - b[0]);
    
    //define the result array and set push the first sorted element
    const result = [intervals[0]];
    
    //loop over the array 
    for(let i = 0; i < intervals.length; i++){
        //check if start in the current interval is greater/equal to last interval in the res array
        
        //define helper variables
        const currIntInIntervals = intervals[i];
        const lastIntInResult = result[result.length -1];
        
        //check if intersect
        if(currIntInIntervals[0] <= lastIntInResult[1]){
            //decide which end of interval is greter and set it to last one in result
            lastIntInResult[1] = Math.max(currIntInIntervals[1], lastIntInResult[1]);
        }else {
            //no intersection just push it to result
            result.push(currIntInIntervals);
        }
        
    }
    
    return result;
    
};

const intervals = [[1,3],[2,6],[8,10],[15,18]];

console.log(merge(intervals));
