const BinaryTree = require('../BinaryTree')
const Node = require('../treeNode')
const tree_intersection = require('./tree-intersection')

describe('tree-insertion test',()=>{
    test('test 1',()=>{
        let one = new Node('one');
        let two = new Node('two');
        let three = new Node('three');
        let four = new Node('four');
        let five = new Node('five');
        let six = new Node('six');
        let seven = new Node('seven');
        let eight = new Node('eight');
        let nine = new Node('nine');
        one.left = two;
        one.right = three;
        two.left = six;
        three.left = four;
        three.right = five;
        six.right = seven;
        seven.left = eight;
        seven.right = nine;
        let tree = new BinaryTree;
        tree.root = one

        let fiveA = new Node('five');
        let sixA = new Node('six');
        let sevenA = new Node('seven');
        let eightA = new Node('eight');
        let nineA = new Node('nine');
        fiveA.right=sixA
        sixA.right = sevenA;
        sevenA.left = eightA;
        sevenA.right = nineA;
        let tree2=new BinaryTree
        tree2.root=fiveA
        let results = tree_intersection(tree,tree2)
        expect(results).toEqual(["eight", "nine", "seven", "six", "five"])
    })
    test('test2',()=>{
        let one = new Node('one');
        let two = new Node('two');
        let three = new Node('three');
        let four = new Node('four');
        one.left = two;
        one.right = three;
        three.left = four;
        let tree = new BinaryTree;
        tree.root = one
    
        let six = new Node('six');
        let seven = new Node('seven');
        let eight = new Node('eight');
        let nine = new Node('nine');
        six.right = seven;
        seven.left = eight;
        seven.right = nine;
        let tree2 = new BinaryTree;
        tree2.root = six
        let results = tree_intersection(tree,tree2)
        expect(results).toEqual([])
    })
    test('test3',()=>{
        let one = new Node('one');
        let two = new Node('two');
        let three = new Node('three');
        let four = new Node('four');
        one.left = two;
        one.right = three;
        three.left = four;
        let tree = new BinaryTree;
        tree.root = one
    
        let one1 = new Node('one');
        let two1 = new Node('two');
        let three1 = new Node('three');
        let four1 = new Node('four');
        one1.left = two1;
        one1.right = three1;
        three1.left = four1;
        let tree2 = new BinaryTree;
        tree2.root = one1
        let results = tree_intersection(tree,tree2)
        expect(results).toEqual(["two", "four", "three", "one"])
    })
})