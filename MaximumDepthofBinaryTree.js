/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const maxDepth = (root) => {
    
    let depth = 0;
    
    //helper recursive function
    function countLevels(node, currDepth){
        //base case
        if(!node){
            depth = Math.max(currDepth -1, depth);
            return;
        }
        
        //call with child nodes
        countLevels(node.left, currDepth + 1);
        countLevels(node.right, currDepth + 1);
    }
    //initial call
    countLevels(root, 1);
    return depth;
};

const root = [3,9,20,null,null,15,7];
console.log(maxDepth(root));
