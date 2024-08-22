function heapify(a,n,i){
  let largest=i;
  let left=2*i+1;
  let right=2*i+2;
  if(left<n && a[left]<a[largest]){
    largest=left;
  }
  if(right<n&&a[right]<a[largest]){
     largest=right;
  }
  if(largest!=i){
      [a[i],a[largest]]=[a[largest],a[i]];
      heapify(a,n,largest);
  }
}
function makeHeap(arr){
  let n=arr.length-1;
  for(let i=Math.floor(n/2)-1;i>=0;i--){
         heapify(arr,n,i);
  }
}
let arr=[2,4,5,1,7,10,6,9,10,3];
makeHeap(arr);
console.log("Min Heap ::",arr);

