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
 * @return {number[][]}
 */
const levelOrder =  (root) => {
  let result = [];

  //helper level traversal
  function levelTraversal(node, level) {
    //chack for invalid node
    if (!node) return;

    //create a subArr for a specific level
    if (!result[level]) {
      result[level] = [];
    }

    //push the curr value
    result[level].push(node.val);
    //call recursive func
    levelTraversal(node.left, level + 1);
    levelTraversal(node.right, level + 1);
  }

  levelTraversal(root, 0);
  return result;
};

root = [3,9,20,null,null,15,7]
console.log(levelOrder(root));
