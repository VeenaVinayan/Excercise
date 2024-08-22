//Heap Sort
function heapSort(a){
     let n=a.length;
     for(let i=Math.floor(n/2)-1;i>=0;i--){
          heapify(a,n,i);
     }
     for(let i=n-1;i>0;i--){
         [a[0], a[i]]=[a[i], a[0]];
         heapify(a,i,0);
    }
}
function heapify(a,n,i){
      let largest=i;
      let left=2*i+1;
      let right=2*i+2;
      if(left<n && a[left]>a[largest]){
         largest=left;
      }
      if(right<n && a[right]>a[largest]){
         largest=right;
      }
      if(i!==largest){
           [a[i], a[largest]]=[a[largest], a[i]];
           heapify(a,n,largest);
      }
}
let a=[4,5,12,44,56,7,10,1,22,3];
heapSort(a);
console.log("Sorted Array ::"+a);