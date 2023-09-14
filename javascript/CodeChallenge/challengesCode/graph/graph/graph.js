const Vertex = require('./vertex')
const Edge = require('./edge')
const res = require('express/lib/response')
const { index } = require('cheerio/lib/api/traversing')

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
    trips(arr){
        let cost = 0
        if(arr.length>1){
            const keys= Array.from(this.adjacencyList.keys())
            let vertices = this.getVertices()
            for(let i=0;i<arr.length-1;i++){
                if(vertices.includes(arr[i])&&vertices.includes(arr[i+1])){
                    let first = keys[vertices.indexOf(arr[i])]
                    let neighbors = this.getNeighbors(first)
                    for(let j=0;j<neighbors.length;j++){
                        if(neighbors[j].vertex.value == arr[i+1]){
                            cost += neighbors[j].weight
                        } 
                    } 
                } else return null
                if(cost == 0){
                    return null
                }
            }
        }
        return cost     
    }
    DepthFirst(root) {
        const visited = [];
        const queue = [];
        const result = [];
    
        queue.push(root);
        visited.push(root);
        result.push(root.value)
        const recursion = (node)=>{
            let neighbors = this.getNeighbors(node)
            neighbors.map((neighbor)=>{
                if (!visited.includes(neighbor.vertex)) {
                    queue.push(neighbor.vertex);
                    visited.push(neighbor.vertex);
                    if(!result.includes(neighbor.vertex.value)){
                        result.push(neighbor.vertex.value);
                }
                }
                recursion(queue.shift())
            }) 
        }
        recursion(queue.shift());
        
    
        return result;
      }
}
module.exports=Graph

