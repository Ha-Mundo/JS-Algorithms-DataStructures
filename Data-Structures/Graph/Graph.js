///////////////// Graph ////////////////////

class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
    }
}

const graph = new Graph()

graph.addVertex('Tokio')
graph.adjacencyList['Tokio'].push('Japan')
graph.addVertex('Tokio')

console.log(graph);