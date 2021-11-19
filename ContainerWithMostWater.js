const maxArea = (height) => {
    
    //define result
    let maxContainer = 0;
    
    //define left and right walls
    let leftWall = 0;
    let rightWall = height.length - 1;
    
    //calculate the max area while left and right walld don' intersect
    //keep th heighest wall while going over the array
    while(leftWall < rightWall){
        //check which wall is shorter (height) * (width) 
        const currentContainer = Math.min(height[leftWall], height[rightWall]) * (rightWall - leftWall);
        maxContainer = Math.max(currentContainer, maxContainer);
        
        //move a smaller wall
        if(height[leftWall] < height[rightWall]){
            leftWall++;
        } else {
            rightWall--;
        }
    }
    
    return maxContainer;
    
};

height = [4,3,2,1,4]

console.log(maxArea(height));
