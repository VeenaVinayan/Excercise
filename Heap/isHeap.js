//Check the given BT is heap or not
function buildHeap(a){
    let n=a.length;
    for(let i=[n/2]-1;i>=0;i--){
        heapify(a,n,i);
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
        [a[i], a[largest]] = [a[largest], a[i]];
        heapify(a,n,largest);
    }
}
function isHeap(a){
    let n=a.length;
    for(let i=0;i<n;i++){
        let largest=i;
        let left=2*i+1;
        let right=2*i+2;
        if(a[largest]<a[left] && left<n){
             return false;
        }
        if(a[largest]<a[right] && right<n){ 
            return false;
        }
    }
    return true;
}
let a=[3,5,6,7,12,30,45,66,1];
buildHeap(a);
console.log(a);
let res= isHeap(a)?"Heap":"Not Heap";
console.log(res);
