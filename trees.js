class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor(){
        this.root = null;
    }
    add(value){
        if(this.root == null) {
            this.root = new Node(value)
            return this;
        } else {
            var pointer = this.root;
            while(pointer){
                if(value > pointer.value) {
                    if(pointer.right != null) {
                        pointer = pointer.right
                    } else {
                        pointer.right = new Node(value);
                        return this;
                    }
                } else {
                    if (pointer.left) {
                        pointer = pointer.left
                    } else {
                        pointer.left = new Node(value);
                        return this;
                    }
                }
            }
        }
    }
}

var tree_1 = new BST();
console.log(tree_1)
// BST { root: null }

tree_1.add(9).add(10).add(2).add(7)
console.log(tree_1)
// BST { root: Node { data: 9, left: null, right: null } }