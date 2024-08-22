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
    insert(value){
        let node=new Node(value);
        if(this.root===null){
            this.root=node;
        }else{
            this.insertNode(this.root,node);
        }
    }
    insertNode(node,newNode){
        if(node.data>newNode.data){
              if(node.left===null){
                  node.left=newNode
              }else{
                this.insertNode(node.left,newNode);
              }
        }else{
            if(node.right===null){
                node.right=newNode;
            }else{
                this.insertNode(node.right,newNode)
            }
        }
    }
    inOrder(node){
        if(node){
            this.inOrder(node.left);
            console.log(node.data);
            this.inOrder(node.right);
        }
    }
}
let tree=new BinaryTree();
tree.insert(20);
tree.insert(10);
tree.insert(35);
tree.insert(15);
tree.insert(32);
tree.insert(2);
tree.insert(5);
tree.inOrder(tree.root);