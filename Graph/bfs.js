//BFs in Graph
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
             console.log(vertex +" -- > "+ [...this.list[vertex]]);
        }
    }
    bfs(startNode) {
        let queue = [];
        queue.push(startNode);
        let visited = new Set();
        visited.add(startNode);
        while (queue.length > 0) {
            let node = queue.shift();
            console.log(node);
            for (let neighbor of this.list[node]) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor);
                }
            }
        }
    }
}
let graph=new Graph();
graph.addVertex('A');
graph.addEdge('A','B');
graph.addEdge('A','C');
graph.addEdge('C','D');
graph.addEdge('B','C');
graph.addEdge('A','D');
graph.display();
graph.bfs('D');