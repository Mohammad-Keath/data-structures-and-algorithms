const Vertex = require('./vertex')
const Edge = require('./edge')

class Graph{
    constructor(){
        this.adjacencyList = new Map()
    }
    addVertex(vertex){
        this.adjacencyList.set(vertex,[])
    }
    addEdge(start,end,weight){
        if (!this.adjacencyList.has(start) || !this.adjacencyList.has(end)) {
            console.log(`vertex does not exist`)
            return;
        }
        else {
            const adjacencies = this.adjacencyList.get(start);
            let edge = new Edge(end,weight);
            adjacencies.push(edge);
        } 
    }
    getVertices(){
        let arr =[]
        const keys= Array.from(this.adjacencyList.keys())
        keys.map(item=>{arr.push(item.value)})
        return arr
    }
    getNeighbors(vertex){
        const adjacencies = this.adjacencyList.get(vertex);
        if (!adjacencies) {
            return [];
        }

         return adjacencies.map(edge => {
            return {
                vertex: edge.vertex,
                weight: edge.weight
            };
         });    
    }
    size(){
        let size = 0
        this.adjacencyList.forEach(item=>{size++})
        return size
    }
}
module.exports=Graph

