// Find smallest element in BST
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
                return;
            }else{
                this.insertNode(node.left,newNode);
            }
        }else{
            if(node.right===null){
                node.right=newNode;
                return;
            }
            this.insertNode(node.right,newNode);
        }
    } 
    inorder(node,arr){
        if(node){
            this.inorder(node.left,arr);
            arr.push(node.data);
            this.inorder(node.right,arr); 
        }
        return arr;
    }
}
let tree=new BinaryTree();
let arr=[];
tree.insert(50);
tree.insert(15);
tree.insert(10);
tree.insert(25);
tree.insert(35);
tree.insert(10);
tree.insert(21);
tree.insert(60);
let res = tree.inorder(tree.root,arr);;
console.log("Smallest Elememt is ",res[0]);


