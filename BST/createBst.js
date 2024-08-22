//Create BST
class Node{
    constructor(value){
        this.data=value;
        this.left=null;
        this.right=null;
    }
}
class BinaryTree{
    constructor(){
        this.root=null;
    }
    addNode(value){
        let node=new Node(value);
        if(this.root===null){
            this.root=node;
       }else{
            this.insert(this.root,node);
        }
    }
    insert(node,newNode){
         if(node.data>newNode.data){
              if(node.left===null){
                node.left=newNode
              }else{
                 this.insert(node.left,newNode);
              }
         }else{
            if(node.right===null){
                node.right=newNode
            }else{
                 this.insert(node.right,newNode);
            }
         }
    }
    inorder(node){
        if(node){
            this.inorder(node.left);
            console.log(node.data);
            this.inorder(node.right);
        }
    }
}
console.log("Create BST!!");
let tree=new BinaryTree();
tree.addNode(25);
tree.addNode(30);
tree.addNode(10);
tree.addNode(5);
tree.addNode(55);
tree.addNode(15);
tree.addNode(7);
tree.addNode(45);
console.log("Inorder !!");
tree.inorder(tree.root);
