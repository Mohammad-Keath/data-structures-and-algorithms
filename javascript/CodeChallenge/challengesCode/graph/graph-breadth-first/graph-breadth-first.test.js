const Vertex = require('../graph/vertex')
const Edge = require('../graph/edge')
const Graph = require('../graph/graph')
describe('Graph bredth first test',()=>{
    test('test 1',()=>{
        const zero = new Vertex(0);
        const one = new Vertex(1);
        const two = new Vertex(2);
        const myGraph = new Graph();
        myGraph.addVertex(zero);
        myGraph.addVertex(one);
        myGraph.addVertex(two);
        myGraph.addEdge(zero, one);
        myGraph.addEdge(one, two);
        expect(myGraph.breadthFirst(zero)).toEqual([0, 1, 2])
    })
    test('test 2',()=>{
        const zero = new Vertex(0);
        const one = new Vertex(1);
        const two = new Vertex(2);
        const myGraph = new Graph();
        myGraph.addVertex(zero);
        myGraph.addVertex(one);
        myGraph.addVertex(two);
        myGraph.addEdge(zero, two);
        myGraph.addEdge(two, one);
        expect(myGraph.breadthFirst(zero)).toEqual([0, 2, 1])
    })
    test('test3',()=>{
        const zero = new Vertex(0);
        const one = new Vertex(1);
        const two = new Vertex(2);
        const myGraph = new Graph();
        myGraph.addVertex(zero);
        myGraph.addVertex(one);
        myGraph.addVertex(two);
        myGraph.addEdge(zero, two);
        myGraph.addEdge(zero, one);
        expect(myGraph.breadthFirst(zero)).toEqual([0, 2, 1])
    })
    test('test4',()=>{
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
        myGraph.addEdge(zero, five);
        myGraph.addEdge(zero, three);
        myGraph.addEdge(three, one);
        myGraph.addEdge(four, one);
        myGraph.addEdge(two, three);
        myGraph.addEdge(zero, two);
        myGraph.addEdge(five, four);
        expect(myGraph.breadthFirst(zero)).toEqual([0, 5, 3, 2, 4, 1])
    })
})