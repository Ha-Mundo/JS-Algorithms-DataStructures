/* ////////////// Binary Search Trees /////////////////
- Every parent node has at most two children
- Every node to the left of the parent node is always less than the parent
- Every node to the right of the parent node is always greater than the parent

Insertion: O(log n)
Removal: O(1)
Searching: O(log n)
Access: O(n) 
*/

class Node {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  };

  class BinarySearchTree {
    constructor() {
      this.root = null;
    }

    insert(val) {
        let newNode = new Node(val)

        if(!this.root) {
            this.root = newNode
            return this
        } 
        let currentNode = this.root

        while(true) {
            if(val === currentNode.val) return undefined
            if(val < currentNode.val) {
                if(!currentNode.left) {
                    currentNode.left = newNode
                    return this
                }
                currentNode = currentNode.left
            } else {
                if(val > currentNode.val) {
                    if(!currentNode.right){
                        currentNode.right = newNode
                        return this
                    }
                    currentNode = currentNode.right
                }
            }
        }
    }

    find(val) {
        let currentNode = this.root
        
        while (currentNode) {
            if (val === currentNode.val) return currentNode;
      
            if (val < currentNode.val) currentNode = currentNode.left;
            else currentNode = currentNode.right;
          }
      
        return null
    }

    contains(val) {
        return !!this.find(val);
    }

    breadthFirstSearch(node = this.root) {
        if(!node) return null

        let data = []
        let queue = []
        queue.push(node)
        
        while(queue.length) {
            node = queue.shift()
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
            data.push(node.val)
        
        }
        return data
    }
}

let tree = new BinarySearchTree()

tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(2)
tree.insert(7)
tree.insert(11)
tree.insert(16)
console.log(tree);
console.log(tree.find(13));
console.log(tree.contains(13));
console.log(tree.breadthFirstSearch());
