//Create 
class Node{
     constructor(value){
        this.data=value;
        this.left=null;
        this.right=null;
    }
  }
  function inorder(root){
      let node=root;
      if(node){
         inorder(node.left);
         console.log(node.data);
         inorder(node.right);
      }
  }
  function preorder(node){
    if(node){
        console.log(node.data);
        preorder(node.left);
        preorder(node.right);
    }
  }
  function postorder(node){
    if(node){
        postorder(node.left);
        postorder(node.right);
        console.log(node.data);
    }
  }
  console.log("BST TRAVERSAL !!");
  let root=new Node(25);
  root.left=new Node(20);
  root.right=new Node(35);
  root.left.left=new Node(10);
  root.left.right=new Node(21);
  root.right.left=new Node(30);
  root.right.right=new Node(40);
  console.log("InOrder Traversal !!");
  inorder(root);
  console.log("PreOrder Traversal !!");
  preorder(root);
  console.log("Post Order Traversal");
  postorder(root);