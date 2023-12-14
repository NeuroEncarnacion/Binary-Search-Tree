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

// Check if a value is contained within the tree
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

// Returns that smallest value within the BST
    min(){
        var pointer = this.root
        var min = pointer.value
        while(pointer.left){
            if(min > pointer.left.value){
                min = pointer.left.value
                pointer = pointer.left
            }
        }
        return min;
    }

// Returns the largest value within the BST
    max(){
        var pointer = this.root
        var max = pointer.value
        while(pointer.right){
            if(max < pointer.right.value){
                max = pointer.right.value
                pointer = pointer.right
            }
        }
        return max;
    }

// Returns the number of nodes(values) contained within a tree 
    // size(){
    //     var pointer = this.root;
    //     var size = 0;
    //     if(this.root == null){
    //         return 0;
    //     } 
    // }

// Returns true if the BST is empty or false if it is not
    isEmpty(){
        if(this.root == null) {
            return true;
        } return false;
    }   
}

var tree_1 = new BST();
var tree_2 = new BST();
// console.log(tree_1)
// BST { root: null }

tree_1.add(9).add(10).add(2).add(7).add(11).add(1)
// console.log(tree_1)

// console.log(tree_1.contains(-7))
// console.log(tree_1.min())
// console.log(tree_1.max())
// console.log(tree_1.size())
// console.log(tree_2.size())
// console.log(tree_1.isEmpty())
// console.log(tree_2.isEmpty())