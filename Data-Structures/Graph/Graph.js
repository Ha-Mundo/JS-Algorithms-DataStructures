///////////////// Graph ////////////////////

class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }

    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1] =  this.adjacencyList[vertex1].filter(v => v !== vertex2);
        this.adjacencyList[vertex2] =  this.adjacencyList[vertex2].filter(v => v !== vertex1);
    }

    removeVertex(vertex) {
        if (this.adjacencyList[vertex]) {
            while(this.adjacencyList[vertex].length) {
                this.removeEdge(vertex, this.adjacencyList[vertex].pop());
                }
            delete this.adjacencyList[vertex];
            }
    }

    depthFirstSearchRecursive(start = Object.keys(this.adjacencyList)[0]) {
        const adjacencyList = this.adjacencyList;
        const result = [];
        const visited = {};

        function traverse(vertex) {
            if (!adjacencyList[vertex]) return null;

            result.push(vertex);
            visited[vertex] = true;

            for (const linkedVertex of adjacencyList[vertex]) {
            if (!visited[linkedVertex]) traverse(linkedVertex);
            }
        }

        traverse(start);

        return result;
    }

}

const graph = new Graph()

graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")
graph.addVertex("E")
graph.addVertex("F")

graph.addEdge("A","B")
graph.addEdge("A","C")
graph.addEdge("B","D")
graph.addEdge("C","E")
graph.addEdge("D","E")
graph.addEdge("D","F")
graph.addEdge("E","F")

console.log(graph);
console.log(graph.depthFirstSearchRecursive('A')); // [ 'A', 'B', 'D', 'E', 'C', 'F' ]