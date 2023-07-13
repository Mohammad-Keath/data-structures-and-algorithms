const Node = require('./treeNode')

class BinaryTree {
    constructor(){
        this.root = null
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
module.exports = BinaryTree