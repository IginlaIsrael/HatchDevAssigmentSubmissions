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
  
  function levelOrder(root: TreeNode | null): number[][] {
      const result: number[][] = [];
  
    if (!root) return result; // Handle empty tree
  
    const queue: TreeNode[] = [];
    queue.push(root);
  
    while (queue.length) {
      const levelSize = queue.length;
      const currentLevel: number[] = [];
  
      for (let i = 0; i < levelSize; i++) {
        const node = queue.shift()!; // Safe access due to levelSize check
  
        currentLevel.push(node.val);
  
        // Add non-null children to the queue for next level
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      }
  
      result.push(currentLevel);
    }
  
    return result;
  };