

class Node{
    constructor(value){
        this.value = value;
        this.next = null
    }
}

class Stack{
    constructor(){
        this.top = null;
    }
    push(value){
        let newNode = new Node(value)
        newNode.next = this.top;
        this.top = newNode;
    }
    pop(){
        if(this.top){
            let temp = this.top
            this.top = this.top.next
            temp.next = null
            return temp
        }else return('Sorry the stack is empty')
    }
    peek(){
        if(this.top){
            return this.top.value
        }else return("Sorry the stack is empty")
    }
    isEmpty(){
        return (this.top == Null)
    }
}
module.exports=Stack