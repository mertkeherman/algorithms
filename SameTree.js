/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
const isSameTree = (p, q) => {
    let result = true;
    
    //helper recursive func
    function isSameNode(p, q){
        //check if both nodes are invalid
        if(!p && !q){
            return;
        //check if one of the nodes is invalid
        } else if(!p || !q){    
            result = false;
            return;
        //check if values are the same
        }else if(p.val !== q.val){
            result = false;
            return;
        }
        //call recursve helper for children
        isSameNode(p.left, q.left);
        isSameNode(p.right, q.right);
    }
    
    isSameNode(p, q);
    return result;
};

const p = [1,2,3];
const q = [1,2,3];

console.log(isSameTree(p,q))
