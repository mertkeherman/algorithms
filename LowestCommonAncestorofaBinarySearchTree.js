/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let current = root;
    
    //while current is valid
    while(current){
        //check if current is less than p & q
        //if less traverse to the right
        if(current.val < p.val && current.val < q.val){
            current = current.right;
            //check if current is greater than p & q
            //if less traverse to the left
        } else if(current.val > p.val && current.val > q.val){
            current = current.left;
        } else {
            return current;
        }
    }
    
};
