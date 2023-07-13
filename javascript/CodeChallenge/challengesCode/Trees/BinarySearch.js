const Node = require('./treeNode')
class BinarySearchTree {
    constructor(){
        this.root = null
    }
    add(value){
        let newNode = new Node(value)
        let curr = this.root
        if(this.root){
            while(curr){
                if(newNode.value > curr.value){
                    if(curr.right){
                            curr = curr.right
                    }else{
                        curr.right = newNode
                        break
                    }
                }
                if(newNode.value < curr.value){
                    if(curr.left){
                            curr = curr.left
                    }else{
                        curr.left = newNode
                        break
                    }
                }
            }
        }else this.root = newNode
    }
    preOrder(){
        if(this.root){
            let arr = []
            function traverse(node){
                arr.push(node.value)
                if(node.left) traverse(node.left)
                if(node.right) traverse(node.right)
            }
            traverse(this.root)
            return arr
        }
    }
    inOrder(){
        if(this.root){
            let arr = []
            function traverse(node){
                if(node.left) traverse(node.left)
                arr.push(node.value)
                if(node.right) traverse(node.right)
            }
            traverse(this.root)
            return arr
        }
    }
    postOrder(){
        if(this.root){
            let arr = []
            function traverse(node){
                if(node.left) traverse(node.left)
                if(node.right) traverse(node.right)
                arr.push(node.value)
            }
            traverse(this.root)
            return arr
        }
    }
}
module.exports = BinarySearchTree