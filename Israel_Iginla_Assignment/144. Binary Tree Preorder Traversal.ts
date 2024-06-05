/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
interface TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
  }
  
  function preorderTraversal(root: TreeNode | null): number[] {
    const result: number[] = [];
  
    const traverse = (node: TreeNode | null) => {
      if (!node) return;
  
      result.push(node.val); // Visit root first (preorder)
      traverse(node.left);
      traverse(node.right);
    };
  
    traverse(root);
    return result;
  }
  