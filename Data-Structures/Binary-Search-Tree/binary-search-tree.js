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
