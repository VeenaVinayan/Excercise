// Insert a node 
function  insert(a,item){
   a.push(item);
   let i=a.length-1;
   while(i>0){
   let parent=Math.floor(i-1/2);
   if(a[i]>a[parent]){
            [a[i],a[parent]]=[a[parent],a[i]];
            i=parent;
    }else{
        break;
    }
  }
}

let heap=[50,30,20,15,10,8,16];
insert(heap,60);
console.log("Heap ::"+heap);