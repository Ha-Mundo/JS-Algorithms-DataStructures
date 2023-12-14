/////////////// Binary Search Trees /////////////////

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
        let newNode = new Node(val);

        if(!this.root) {
            this.root = newNode;
            return this;
        } 
        let currentNode = this.root;

        while(true) {
            if(val === currentNode.val) return undefined;
            if(val < currentNode.val) {
                if(!currentNode.left) {
                    currentNode.left = newNode;
                    return this;
                }
                currentNode = currentNode.left;
            } else {
                if(val > currentNode.val) {
                    if(!currentNode.right){
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
    }

    find(val) {
        let currentNode = this.root;
        
        while (currentNode) {
            if (val === currentNode.val) return currentNode;
      
            if (val < currentNode.val) currentNode = currentNode.left;
            else currentNode = currentNode.right;
          }
      
        return null;
    }

    contains(val) {
        return !!this.find(val);
    }

    breadthFirstSearch(node = this.root) {
        if(!node) return null;

        let data = [];
        let queue = [];
        queue.push(node);
        
        while(queue.length) {
            node = queue.shift();
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
            data.push(node.val);
        
        }
        return data;
    }

    depthFirstSearchPreOrder(currentNode = this.root) {
        let data = [];

        function traverse(node) {
            data.push(node.val);

            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }

     traverse(currentNode);
     return data;
    }

    depthFirstSearchPostOrder(currentNode = this.root) {
        let data = [];

        function traverse(node) {
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            data.push(node.val);
        }

        traverse(currentNode);
        return data;
    }

    depthFirstSearchInOrder(currentNode = this.root) {
        let data = [];

        function traverse(node) {
            if(node.left) traverse(node.left);
            data.push(node.val);
            if(node.right) traverse(node.right);
        }

        traverse(currentNode);
        return data;
    }
}

let tree = new BinarySearchTree()

tree.insert(10)       
tree.insert(6)       
tree.insert(15)     
tree.insert(3)
tree.insert(8)
tree.insert(20)


console.log(tree); // return the tree
console.log(tree.find(15)); // return 15th node
console.log(tree.find(100)); // null
console.log(tree.contains(15)); // true
console.log(tree.contains(100)); // false
console.log(tree.breadthFirstSearch()); // [ 10, 6, 15, 3, 8, 20 ]
console.log(tree.depthFirstSearchPreOrder()); // [ 10, 6, 3, 8, 15, 20 ]
console.log(tree.depthFirstSearchPostOrder()); // [ 3, 8, 6, 20, 15, 10 ]
console.log(tree.depthFirstSearchInOrder()); // [ 3, 6, 8, 10, 15, 20 ]
