class BinaryTree{
    constructor(value){
        this.data=value;
        this.left=null;
        this.right=null;
    }
    inorder(node){
        if(node){
            this.inorder(node.left);
            console.log(node.data);
            this.inorder(node.right);
        }
    }
    search(node,x){
        if(node===null){
            return `${x} Not Found !!`;
        }
        if(node.data===x){
            return `${x} Found !!`;
        }
        if(node.data>x){
            return this.search(node.left,x)
        }else{
            return this.search(node.right,x);
         }
        }
    }
let bt=new BinaryTree(50);
bt.left=new BinaryTree(40);
bt.right=new BinaryTree(75);
bt.left.left=new BinaryTree(10);
bt.left.right=new BinaryTree(45)
bt.inorder(bt);
console.log(bt.search(bt,7));
console.log(bt.search(40));
