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
  
  function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
    // Stage 1: Search for the node to remove
    let currentNode = root;
    let parentNode: TreeNode | null = null;
  
    while (currentNode) {
      if (key === currentNode.val) {
        break; // Node found
      } else if (key < currentNode.val) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else {
        parentNode = currentNode;
        currentNode = currentNode.right;
      }
    }
  
    // Stage 2: Delete the node (if found)
    if (currentNode) {
      // Handle different cases based on node children
      if (!currentNode.left && !currentNode.right) {
        // Node has no children - simply remove it
        if (parentNode) {
          if (parentNode.left === currentNode) {
            parentNode.left = null;
          } else {
            parentNode.right = null;
          }
        } else {
          // Deleting root node with no children - set root to null
          root = null;
        }
      } else if (currentNode.left && !currentNode.right) {
        // Node has only left child - replace with left child
        if (parentNode) {
          if (parentNode.left === currentNode) {
            parentNode.left = currentNode.left;
          } else {
            parentNode.right = currentNode.left;
          }
        } else {
          // Deleting root node with only left child - set root to left child
          root = currentNode.left;
        }
      } else if (!currentNode.left && currentNode.right) {
        // Node has only right child - replace with right child
        if (parentNode) {
          if (parentNode.left === currentNode) {
            parentNode.left = currentNode.right;
          } else {
            parentNode.right = currentNode.right;
          }
        } else {
          // Deleting root node with only right child - set root to right child
          root = currentNode.right;
        }
      } else {
        // Node has two children - find inorder successor (min in right subtree)
        const successor = findInorderSuccessor(currentNode.right!);
        currentNode.val = successor.val;
        // Recursively delete the inorder successor (which has at most one child)
        deleteNode(currentNode.right, successor.val);
      }
    }
  
    return root;
  }
  
  function findInorderSuccessor(node: TreeNode): TreeNode {
    let current = node;
    while (current.left) {
      current = current.left;
    }
    return current;
  }
  
  