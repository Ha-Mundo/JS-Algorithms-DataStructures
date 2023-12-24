///////////////// Graph ////////////////////

class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
    }

    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2) 
        this.adjacencyList[v2].push(v1)
    }
}

const graph = new Graph()

graph.addVertex('Tokyo')
graph.addVertex('Dallas')
graph.addVertex('Rome')
graph.addVertex('Paris')

graph.addEdge('Tokyo', 'Rome')
graph.addEdge('Tokyo', 'Dallas')
graph.addEdge('Rome', 'Dallas')
graph.addEdge('Rome', 'Paris')

console.log(graph);