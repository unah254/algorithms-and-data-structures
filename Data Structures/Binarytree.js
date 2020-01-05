//check if a binary tree is a BST or not 

//A binary search tree is a binary tree with some special properties:

// The node value must be greater than all the node values in the left subtree.
//The node value must be less than all the node values in the right subtree.
// Both left and right subtrees must also be a binary search tree.

function BinaryTree () {
    this.root = null;
  }
  
  var last_logged;
  
  function isBST (root) {
  
    if (root === null) { // base case
      return true;
    }
    
    // Verify and recurse left
    if (!isBST(root.left)) {
      return false;
    }
  
    // Verify the current node
    if (last_logged !== null && root.data <= last_logged) {
      return false;
    }
  
    // Log the current data for debugging and update the last_logged
    console.log('Current Node : ', root.data);
    last_logged = root.data;
  
    // Verify and recurse left
    if (!isBST(root.right)) {
      return false;
    }
  
    return true;
  }
  
  // Create a Binary Tree as a sample input
  var root = {
    data : 8,
    left : null,
    right : null
  };
  var n1 = {
    data : 10,
    left : null,
    right : null
  };
  
  var n2 = {
    data : 6,
    left : null,
    right : null
  };
  
  var BT = new BinaryTree();
  BT.root = root;
  
  // Create a Binary Search Tree (BST) and Verify  
  BT.root.left = n2; 
  BT.root.right = n1; 
  console.log(isBST(BT.root)); // true
  
  // Create a non-BST and Verify 
  BT.root.left = n1; 
  console.log(isBST(BT.root)); // false