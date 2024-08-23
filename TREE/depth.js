//Depth of a binary tree
class BinaryTree{
    constructor(value){
        this.data=value;
        this.left=null;
        this.right=null;
    }
}
function findDepth(node){
    if(node===null) return 0
    else{
        let ldepth=findDepth(node.left);
        let rdepth=findDepth(node.right);
        return Math.max(rdepth,ldepth)+1;
    }
  

}

let tree=new BinaryTree(25);
tree.left=new BinaryTree(20);
tree.right=new BinaryTree(10);
tree.left.right=new BinaryTree(5);
tree.right.left=new BinaryTree(1);
tree.left.left=new BinaryTree(90);
tree.right.right=new BinaryTree(15);
tree.left.left.left=new BinaryTree(80);
tree.left.left.left.left=new BinaryTree(60);
console.log("Depth of Tree ::" +findDepth(tree));