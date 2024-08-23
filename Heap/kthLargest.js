
var findKthLargest = function(nums, k) {
    let n=nums.length;
    let i
     for(i=Math.floor(n/2)-1;i>=0;i--){
           heapify(nums,n,i)
    }
    console.log(nums);
    for(i=n-1;i>k;i--){
       [nums[0],nums[i]]= [nums[i],nums[0]];
        heapify(nums,i,0);
   }
   //console.log(nums)
    return nums[n-i];
};
function heapify(a,n,i){
    let largest=i;
    let right=2*i+2;
    let left=2*i+1;
    if(left<n && a[left]>a[largest]){
         largest=left;
    }
    if(right<n && a[right]>a[largest]){
         largest=right;
    }
    if(i!== largest){
         [a[i],a[largest]]=[a[largest],a[i]];
         heapify(a,n,largest);
    }
}

let nums=[3,4,1,5,2,6];
console.log(findKthLargest(nums,1));