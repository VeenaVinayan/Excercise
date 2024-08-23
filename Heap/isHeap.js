
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
let a=[10,5,3,4,1];
console.log(a);
let res= isHeap(a)?"Heap":"Not Heap";
console.log(res);
a=[1,50,31,40,1];
console.log(a);
res= isHeap(a)?"Heap":"Not Heap";
console.log(res);
