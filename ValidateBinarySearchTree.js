/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
//Time O(n)
//Space O(1)
var isValidBST = function(root) {
    let isValid = true;
    
    //helper recursive func
    function checkValidity(node, min, max){
        //check for valid node
        if(!node) return;
        
        //check if node.val is in between min and max
        if(
            (min !== null && node.val <= min) || 
            (max !== null && node.val >= max)) 
        {
            isValid = false;
            return;
        }
        
        //call recursive func for children
        checkValidity(node.left, min, node.val);
        checkValidity(node.right, node.val, max)
    }
    
    //initial call
    checkValidity(root, null, null);
    return isValid;
};

























