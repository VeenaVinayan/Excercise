// Adjacency Matrix
class Graph{
    constructor(size){
       this.size=size;
       this.list=[];
       for(let i=0;i<this.size;i++){
         this.list[i]=[];
         for(let j=0;j<this.size;j++){
             this.list[i][j]=0;
         }
       }
    }
    addEdge(vertex1,vertex2){
         this.list[vertex1][vertex2]=1;
         this.list[vertex2][vertex1]=1;
    }
    displayGraph(){
        for(let i=0;i<this.size;i++){
            console.log(this.list[i].join(' '));
        }
    }
}
let graph=new Graph(5);
graph.addEdge(1,2);
graph.addEdge(3,2);
graph.addEdge(1,5);
graph.addEdge(3,4);
graph.addEdge(2,4);
graph.addEdge(3,5);
graph.addEdge(1,4);
graph.displayGraph();
