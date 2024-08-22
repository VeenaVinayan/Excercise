// Find there is any cycle formed in this graph
class Graph{
    constructor(){
         this.list={}
    }
    addVertex(vertex){
        if(!this.list[vertex]){
              this.list[vertex]=new Set();
        }
    }
    addEdge(vertex1,vertex2){
        if(!this.list[vertex1]){
             this.addVertex(vertex1);
        }
        if(!this.list[vertex2]){
            this.addVertex(vertex2); 
        }
        this.list[vertex1].add(vertex2);
        this.list[vertex2].add(vertex1);
    }
    display(){
        for(let vertex in this.list){
            console.log(vertex +"-->"+[...this.list[vertex]]);
        }
    }
    hasEdge(vertex1,vertex2){
         return(this.list[vertex1].has(vertex2)
           && this.list[vertex2].has(vertex1));
    }
    hasCycle() {
        const visited = new Set();
        const dfs = (vertex, parent) => {
            visited.add(vertex);
            for (let neighbor of this.list[vertex]) {
                if (!visited.has(neighbor)) {
                    if (dfs(neighbor, vertex)) {
                        return true;
                    }
                } else if (neighbor !== parent) {
                    return true;            
                }
            }
            return false;
        } 
        for (let vertex in this.list) {
               if (!visited.has(vertex)) {
                    if (dfs(vertex, null)) {
                        return true;
                    }
                }
            }
            return false;
    }  
}
let graph =new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addEdge('A','B');
graph.addEdge('A','C');
graph.addEdge('B','C');
graph.display();
console.log(graph.hasEdge('A','B'));
console.log(graph.hasCycle());