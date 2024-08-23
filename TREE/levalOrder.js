// Find Leval Order

class BinaryTree{
    constructor(value){
        this.data=value;
        this.left=null;
        this.right=null;
    }
    traverse(){
        if(this ===null) return;
         let queue=[];
         queue.push(this);
         while(queue.length>0){
            let node=queue.shift();
            console.log(node.data);
            if(node.right!=null) queue.push(node.left);
            if(node.right!=null) queue.push(node.right);
         }
    }
}

let root=new BinaryTree(10);
root.left=new BinaryTree(20);
root.right=new BinaryTree(30);
root.left.left=new BinaryTree(1);
root.left.right=new BinaryTree(2);
root.traverse();
