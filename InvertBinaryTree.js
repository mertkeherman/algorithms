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
 * @return {TreeNode}
 */
const invertTree = (root) => {
    
    //use a recursive helper func
    function recusrsiveHelper(node){
        
        //base case
        if(!node) return;
        
        //store left node in temp variable
        let temp = node.left
        
        //reassign the node values
        node.left = node.right;
        node.right = temp;
        
        //call helper with the curr node
        recusrsiveHelper(node.left);
        recusrsiveHelper(node.right);
    }
    
    recusrsiveHelper(root);
    return root;
};

root = [4,2,7,1,3,6,9]

console.log(invertTree(root));
