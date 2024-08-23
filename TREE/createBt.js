//Create a Binary Tree
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
     if(node.left===null){
         node.left=node;
         return;
     }else{
        this.insert(node.left,node);
     }
     if(node.right===null){
         node.right=node;
         return;
     }else{
        this.insert(node.right,node);
    }
} 
traverse(node){
     if(node){
         this.traverse(node.left);
         console.log(node.data);
         this.traverse(node.right);
     }
  }    
}

let bt=new BinaryTree();
let arr=[4,5,7,1,12,3,10,5,40];
for(let i=0;i<arr.length;i++){
     bt.addNode(arr[i]); 
}
bt.traverse(bt.root);