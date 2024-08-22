// Delete an Item from BST
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
                 node.left=newNode;
              }else{
                 this.insertNode(node.left,newNode);
              }
        }else{
            if(node.right===null){
                node.right=newNode;
            }else{
                this.insertNode(node.right,newNode);
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
    getSuccessor(node){
        node=node.right;
        while(node!== null && node.left !==null){
            node=node.left;
        }
        return node;
    }
    deleteNode(node,x){
      if(node===null){
        return "Not Deleted!!";
    }
    if(node.data>x){
       node.left=this.deleteNode(node.left,x);
    }else if(node.data<x){
        node.right=this.deleteNode(node.right,x);
    }else{
        if(node.left=== null){
            return node.left;
        }
        if(node.right===null){
            return node.right;  
        }
    }
    let succ=this.getSuccessor(node);
    node.data=succ.data;
    node.right=this.deleteNode(node.right,succ.data)
    return node.data;  
}
}
let bt=new BinaryTree();
bt.insert(50);
bt.insert(34);
bt.insert(10);
bt.insert(25);
bt.insert(75);
bt.insert(100);
bt.insert(65);
console.log("Inorder Traversal !!");
bt.inorder(bt.root);
console.log("Deleted Node :: "+bt.deleteNode(bt.root,25));
