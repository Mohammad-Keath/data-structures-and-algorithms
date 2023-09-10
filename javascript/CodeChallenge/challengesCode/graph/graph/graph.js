const Vertex = require('./vertex')
const Edge = require('./edge')
const res = require('express/lib/response')

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
    breadthFirst(startNode) {
        const visited = [];
        const queue = [];
        const result = [];
    
        queue.push(startNode);
        visited.push(startNode);
        result.push(startNode.value)
    
        while (queue.length > 0) {
            const currentNode = queue.shift();
            
            let neighbors = this.getNeighbors(currentNode)
        
            neighbors.map((neighbor)=>{
                if (!visited.includes(neighbor.vertex)) {
                    queue.push(neighbor.vertex);
                    visited.push(neighbor.vertex);
                    if(!result.includes(neighbor.vertex.value)){
                        result.push(neighbor.vertex.value);
                }
                }
            }) 
        }
    
        return result;
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

