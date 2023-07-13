const BinaryTree = require('./BinaryTree')
const Node = require('./treeNode')

describe('Binery tree test',()=>{
    test('Can successfully instantiate an empty tree',()=>{
        let newBinary = new BinaryTree
        expect(newBinary.root).toEqual(null)
    })
    test('Can successfully instantiate a tree with a single root node',()=>{
        let newBinary = new BinaryTree
        let newnode = new Node(1) 
        newBinary.root = newnode 
        expect(newBinary.root.value).toEqual(1)
    })
    test('Can successfully return a collection from a pre-order traversal',()=>{
        let one = new Node(1);
        let two = new Node(2);
        let three = new Node(3);
        let four = new Node(4);
        let five = new Node(5);
        let six = new Node(6);
        let seven = new Node(7);
        let eight = new Node(8);
        let nine = new Node(9);
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
      
        expect(tree.preOrder()).toEqual([1, 2, 6, 7, 8, 9, 3, 4, 5])
    })
    test('Can successfully return a collection from an in-order traversal',()=>{
        let one = new Node(1);
        let two = new Node(2);
        let three = new Node(3);
        let four = new Node(4);
        let five = new Node(5);
        let six = new Node(6);
        let seven = new Node(7);
        let eight = new Node(8);
        let nine = new Node(9);
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
        expect(tree.inOrder()).toEqual([6, 8, 7, 9, 2, 1, 4, 3, 5])
    })
    test('Can successfully return a collection from a post-order traversal',()=>{
        let one = new Node(1);
        let two = new Node(2);
        let three = new Node(3);
        let four = new Node(4);
        let five = new Node(5);
        let six = new Node(6);
        let seven = new Node(7);
        let eight = new Node(8);
        let nine = new Node(9);
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
        expect(tree.postOrder()).toEqual([8, 9, 7, 6, 2, 4, 5, 3, 1])
    })
})
