///////////////// Graph ////////////////////

class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
    }

    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2) 
        this.adjacencyList[vertex2].push(vertex1)
    }

    removeEdge(vertex1, vertex2) {
     this.adjacencyList[vertex1] =  this.adjacencyList[vertex1].filter(v => v !== vertex2 )
     this.adjacencyList[vertex2] =  this.adjacencyList[vertex2].filter(v => v !== vertex1 )
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

graph.removeEdge('Rome', 'Paris')

console.log(graph);