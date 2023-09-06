const Vertex = require('./vertex')
const Edge = require('./edge')
const Graph = require('./graph')

describe('Graph test',()=>{
    test('Vertex can be successfully added to the graph',()=>{
        const zero = new Vertex(0);
        const one = new Vertex(1);
        const two = new Vertex(2);
        const myGraph = new Graph();
        myGraph.addVertex(zero);
        myGraph.addVertex(one);
        myGraph.addVertex(two);
        expect(myGraph.size()).toEqual(3)
    })
    test('An edge can be successfully added to the graph',()=>{
        const zero = new Vertex(0);
        const one = new Vertex(1);
        const two = new Vertex(2);
        const myGraph = new Graph();
        myGraph.addVertex(zero);
        myGraph.addVertex(one);
        myGraph.addVertex(two);
        myGraph.addEdge(zero, two);
        myGraph.addEdge(two, one);
        expect(myGraph.getNeighbors(zero)).toEqual([{"vertex": {"value": 2}, "weight": 0}])
    })
    test('A collection of all vertices can be properly retrieved from the graph',()=>{
        const zero = new Vertex(0);
        const one = new Vertex(1);
        const two = new Vertex(2);
        const myGraph = new Graph();
        myGraph.addVertex(zero);
        myGraph.addVertex(one);
        myGraph.addVertex(two);
        expect(myGraph.getVertices()).toEqual([0, 1, 2])
    })
    test('All appropriate neighbors can be retrieved from the graph',()=>{
        const zero = new Vertex(0);
        const one = new Vertex(1);
        const two = new Vertex(2);
        const myGraph = new Graph();
        myGraph.addVertex(zero);
        myGraph.addVertex(one);
        myGraph.addVertex(two);
        myGraph.addEdge(zero, two);
        myGraph.addEdge(two, one);
        expect(myGraph.getNeighbors(zero)).toEqual([{"vertex": {"value": 2}, "weight": 0}])
    })
    test('Neighbors are returned with the weight between vertices included',()=>{
        const zero = new Vertex(0);
        const one = new Vertex(1);
        const two = new Vertex(2);
        const myGraph = new Graph();
        myGraph.addVertex(zero);
        myGraph.addVertex(one);
        myGraph.addVertex(two);
        myGraph.addEdge(zero, two);
        myGraph.addEdge(two, one);
        expect(myGraph.getNeighbors(zero)).toEqual([{"vertex": {"value": 2}, "weight": 0}])
    })
    test('The proper size is returned, representing the number of vertices in the graph',()=>{
        const zero = new Vertex(0);
        const one = new Vertex(1);
        const two = new Vertex(2);
        const myGraph = new Graph();
        myGraph.addVertex(zero);
        myGraph.addVertex(one);
        myGraph.addVertex(two);
        expect(myGraph.size()).toEqual(3)
    })
    test('A graph with only one vertex and edge can be properly returned',()=>{
        const zero = new Vertex(0);
        const myGraph = new Graph();
        myGraph.addVertex(zero);
        myGraph.addEdge(zero, zero);
        expect(myGraph.size()).toEqual(1)

    })
})