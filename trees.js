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
    // Add value to BST
    add(value){
        if(this.root == null) {
            this.root = new Node(value) // If the root doesn't exist, create the root/head with the given value.
            return this;
        } else {
            var pointer = this.root; // Takes the available root and makes it a variable
            while(pointer != null){ // The loop will continue if the evaluated node is not null
                if(value > pointer.value) { // If the value is greater than the root value then it will proceed to the right branch
                    if(pointer.right != null) { // If the right branch is not null then change the pointer variable to the value in the right branch
                        pointer = pointer.right
                    } else { // Otherwise, create a new node and insert the value
                        pointer.right = new Node(value);
                        return this;
                    }
                } else { // If the given value is less than the pointer value then the code will proceed to the left branch
                    if (pointer.left != null) { // Same process as line 22-26 but on the left branch.
                        pointer = pointer.left
                    } else {
                        pointer.left = new Node(value);
                        return this;
                    }
                }
            }
        }
    }

    contains(value){
        if(this.root == null) {
            return false;
        } else {
            var pointer = this.root;
            while(pointer != null){
                if(value == pointer.value){
                    return true;
                } else {
                    if(value > pointer.value){
                        pointer = pointer.right
                    }
                    else {
                        pointer = pointer.left
                    }
                }
            }
            return false;
        }
    }

    min(){

    }

    max(){

    }
}

var tree_1 = new BST();
// console.log(tree_1)
// BST { root: null }

tree_1.add(9).add(10).add(2).add(7).add(11)
// console.log(tree_1)
// BST { root: Node { data: 9, left: null, right: null } }

// console.log(tree_1.contains(8))
