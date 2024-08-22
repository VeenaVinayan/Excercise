// convert an array into 
function heapify(arr,n,i){
   let largest=i;
   let left=2*i+1;
   let right=2*i+2;
   if(left<n && arr[left]>arr[largest]){
        largest=left;
    }
    if(right<n && arr[right]>arr[largest]){
        largest=right;
    }
    if(largest!=i){ 
       [arr[i],arr[largest]]=[arr[largest],arr[i]];
       heapify(arr,n,largest);
    }
}
function buildMaxHeap(arr){
    let n=arr.length;
    for(let i=Math.floor(n/2)-1;i>=0;i--){
        heapify(arr,n,i);
    }
}
let arr=[34,12,3,10,16,17,6,5,65];
buildMaxHeap(arr);
console.log("Max Heap :",arr);