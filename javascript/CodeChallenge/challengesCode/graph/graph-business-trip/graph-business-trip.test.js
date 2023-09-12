const Vertex = require('../graph/vertex')
const Edge = require('../graph/edge')
const Graph = require('../graph/graph')

describe('graph-business-trip test',()=>{
    test('test 1',()=>{
        const zero = new Vertex('Jordan');
        const one = new Vertex('Syria');
        const two = new Vertex('Dubai');
        const myGraph = new Graph();
        myGraph.addVertex(zero);
        myGraph.addVertex(one);
        myGraph.addVertex(two);
        myGraph.addEdge(zero, one,200);
        myGraph.addEdge(one, two,300);
        expect(myGraph.trips(['Jordan','Syria'])).toEqual(200)
        expect(myGraph.trips(['Jordan','Syria','Dubai'])).toEqual(500)
    })
    test('test 2',()=>{
        const Syria = new Vertex('Syria');
        const Jordan = new Vertex('Jordan');
        const Dubai = new Vertex('Dubai');
        const Iraq = new Vertex('Iraq');
        const Palestine = new Vertex('Palestine');
        const Lebanon = new Vertex('Lebanon');
        const myGraph = new Graph();
        myGraph.addVertex(Syria);
        myGraph.addVertex(Jordan);
        myGraph.addVertex(Dubai);
        myGraph.addVertex(Iraq);
        myGraph.addVertex(Palestine);
        myGraph.addVertex(Lebanon);
        myGraph.addEdge(Jordan, Syria,200);
        myGraph.addEdge(Dubai, Iraq,300);
        myGraph.addEdge(Palestine, Lebanon,150);
        myGraph.addEdge(Lebanon, Dubai,250);
        myGraph.addEdge(Syria, Iraq,270);
        expect(myGraph.trips(['Jordan','Syria','Iraq'])).toEqual(470)
        expect(myGraph.trips(['Palestine','Lebanon'])).toEqual(150)
        expect(myGraph.trips(['Palestine','Dubai','Iraq'])).toEqual(null)
    })
    
})