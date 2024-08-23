//Heap Sort Max Heap Ascending order
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
      if(left<n && a[left].p>a[largest].p){
         largest=left;
      }
      if(right<n && a[right].p>a[largest].p){
         largest=right;
      }
      if(i!==largest){
           [a[i], a[largest]]=[a[largest], a[i]];
           heapify(a,n,largest);
      }
}
let a=[{p:8,value:25},
       {p:2,value:100},
       {p:5,value:10},
       {p:4,value:34},
       {p:7,value:50},
       {p:2,value:83}
];
heapSort(a);
console.log("Sorted Array ::"+JSON.stringify(a));