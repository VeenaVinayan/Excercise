//Delete a node 
function deleteNode(a){
      let n=a.length;
      if(n===0) return;
      a[0]=a[n-1];
      a.pop();
      heapifyDown(a,0)
}
function heapifyDown(a,i){
    let largest=i;
    let n=a.length;
    while(i<n){
        left=2*i+1;
        right=2*i+2;
        if(left<n && a[left]>a[largest]){
            largest=left;
        }
        if(right<n && a[right]>a[largest]){
            largest=right;
        }
        if(largest !==i){
            [a[i],a[largest]]=[a[largest],a[i]];
            i=largest;
        }else break;
   }
}
let heap=[50,30,20,15,10,8,5];
deleteNode(heap);
console.log("Values ::"+heap);
deleteNode(heap);
console.log("Values ::"+heap);
deleteNode(heap);
console.log("Values ::"+heap);
