//Check the BT is BST
class TreeNode {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
    inOrder(root, arr = []){
        if(root){
            this.inOrder(root.left,arr)
            arr.push(root.value)
            this.inOrder(root.right,arr)
        }
        return arr
    }
    isBST(root,min = null,max= null){ 
        if(root==null){
            return true
        }
        if((min!== null && root.value <= min) || (max!==null && root.value>=max)){
            return false
        }
        return this.isBST(root.left, min, root.value) && this.isBST(root.right, root.value, max)
    }
}
let root =new TreeNode(25);
root.left=new TreeNode(20);
root.right=new TreeNode(35);
root.left.left=new TreeNode(10);
root.left.righr= new TreeNode(21);
root.right.left=new TreeNode(30);
root.right.right=new TreeNode(40);
console.log(root.inOrder(root));
console.log(root.isBST(root));


