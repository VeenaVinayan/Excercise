class Graph{
    constructor() {
        this.adjList = {}
    }
    addVertex(vertex){
        if(!this.adjList[vertex]){
            this.adjList[vertex] = new Set()
        }
    }
    addEdge(vertex1 , vertex2){
        if(!this.adjList[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjList[vertex2]){
            this.addVertex(vertex2)
        }
        this.adjList[vertex1].add(vertex2)
        this.adjList[vertex2].add(vertex1)
    }
    display(){
        for( let vertex in this.adjList){
            console.log(vertex + "->"+ [...this.adjList[vertex]])
        }
    }
    hasEdge(vertex1,vertex2){
        return (this.adjList[vertex1].has(vertex2)&& this.adjList[vertex2].has(vertex1))
    }
    removeEdge(vertex1,vertex2){
        this.adjList[vertex1].delete(vertex2)
        this.adjList[vertex2].delete(vertex1)
    }
    removeVertex(vertex){
        if(!this.adjList[vertex]){
            return
        }
        for(let adjvrtx of this.adjList[vertex]){
            this.removeEdge(vertex, adjvrtx)
        }
        delete this.adjList[vertex]
    }
     // Depth-First Search (DFS)
     dfs(startVertex) {
        const visited = new Set();
        const dfsRecursive = (vertex) => {
            if (!vertex || visited.has(vertex)) return;
            console.log(vertex);
            visited.add(vertex);
            this.adjList[vertex].forEach(neighbor => dfsRecursive(neighbor));
        };

        dfsRecursive(startVertex);
    }
    // Breadth-First Search (BFS)
    bfs(startVertex) {
        const visited = new Set();
        const queue = [startVertex];
        visited.add(startVertex);
        while (queue.length > 0) {
            const vertex = queue.shift();
            console.log(vertex);
            this.adjList[vertex].forEach(neighbor => {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor); 
                }
            });
        }
    }
    hasCycle() {
        const visited = new Set();
        const dfs = (vertex, parent) => {
            visited.add(vertex);
            for (let neighbor of this.adjList[vertex]) {
                if (!visited.has(neighbor)) {
                    if (dfs(neighbor, vertex)) {
                        return true;
                    }
                } else if (neighbor !== parent) {
                    return true;            
                }
            }
            return false;
        };

        for (let vertex in this.adjList) {
            if (!visited.has(vertex)) {
                if (dfs(vertex, null)) {
                    return true;
                }
            }
        }
        return false;
    }

}

const graph = new Graph()
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addEdge("A","B")
graph.addEdge("B","C")
// graph.addEdge("C","A")

graph.display()
console.log(graph.hasEdge("A","C"));
// graph.removeEdge("A","B")
// graph.removeVertex("A")
graph.display()
graph.dfs("A")
console.log(graph.hasCycle());