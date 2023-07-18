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
    maxNum(){
        let highest = this.root.value;
        function gothrough (node){
        if(node.left){
            gothrough(node.left)
        }
        if (node.value>highest){
        highest = node.value
        }
        if(node.right){
        gothrough(node.right)
        }
        } 
        gothrough(this.root)
        return highest
    }
    breadth(){
        let arr = [];
        arr.push(this.root)
        function goThrough (value){
        if (value.left){
        arr.push(value.left)
        }
        if(value.right){
        arr.push(value.right)
        }
        }
        for(let i=0;i<arr.length;i++){
        goThrough(arr[i])
        }
        let newArr =[]
        for(let i=0; i<arr.length;i++){
            newArr.push(arr[i].value)
        }
        return newArr
        }
}
module.exports = BinaryTree