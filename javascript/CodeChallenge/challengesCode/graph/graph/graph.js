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
            weight: edge.weight, // Assuming your Edge class has a 'weight' property
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

const zero = new Vertex(0);
const one = new Vertex(1);
const two = new Vertex(2);
const three = new Vertex(3);
const four = new Vertex(4);
const five = new Vertex(5);



const myGraph = new Graph();

myGraph.addVertex(zero);
myGraph.addVertex(one);
myGraph.addVertex(two);
myGraph.addVertex(three);
myGraph.addVertex(four);
myGraph.addVertex(five);

// console.log(myGraph);


myGraph.addEdge(zero, five);
myGraph.addEdge(zero, three);
myGraph.addEdge(three, one);
myGraph.addEdge(four, one);
myGraph.addEdge(two, three);
myGraph.addEdge(zero, two);
myGraph.addEdge(five, four);





// console.log("after", myGraph);

for (const [k, v] of myGraph.adjacencyList.entries()) {
    console.log( k, v);
}
console.log('getNeighbors',myGraph.getNeighbors(three))
console.log('size',myGraph.size())
console.log('getVertices ..',myGraph.getVertices())