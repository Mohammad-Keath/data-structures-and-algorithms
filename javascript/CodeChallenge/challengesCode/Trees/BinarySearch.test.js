const BinarySearch = require('./BinarySearch')
describe('Binery search tree test',()=>{
    test('Can successfully instantiate an empty tree',()=>{
        let newBinary = new BinarySearch
        expect(newBinary.root).toEqual(null)
    })
    test('Can successfully instantiate a tree with a single root node',()=>{
        let newBinary = new BinarySearch
        newBinary.add(25)
        expect(newBinary.root.value).toEqual(25)
    })
    test('For a Binary Search Tree, can successfully add a left child and right child properly to a node',()=>{
        let newBinary = new BinarySearch
        newBinary.add(25)
        newBinary.add(12)
        newBinary.add(35)
        expect(newBinary.root.left.value).toEqual(12)
        expect(newBinary.root.right.value).toEqual(35)
    })
    test('Can successfully return a collection from a pre-order traversal',()=>{
        let newBinary = new BinarySearch
        newBinary.add(25)
        newBinary.add(12)
        newBinary.add(35)
        newBinary.add(41)
        newBinary.add(10)
        newBinary.add(15)
        expect(newBinary.preOrder()).toEqual([25, 12, 10, 15, 35, 41])
    })
    test('Can successfully return a collection from an in-order traversal',()=>{
        let newBinary = new BinarySearch
        newBinary.add(25)
        newBinary.add(12)
        newBinary.add(35)
        newBinary.add(41)
        newBinary.add(10)
        newBinary.add(15)
        expect(newBinary.inOrder()).toEqual([10, 12, 15, 25, 35, 41])
    })
    test('Can successfully return a collection from a post-order traversal',()=>{
        let newBinary = new BinarySearch
        newBinary.add(25)
        newBinary.add(12)
        newBinary.add(35)
        newBinary.add(41)
        newBinary.add(10)
        newBinary.add(15)
        expect(newBinary.postOrder()).toEqual([10, 15, 12, 41, 35, 25])
    })
})