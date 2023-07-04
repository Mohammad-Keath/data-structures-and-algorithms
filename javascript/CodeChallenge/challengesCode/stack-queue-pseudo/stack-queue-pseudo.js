class Node {
    constructor(value){
        this.value = value;
        this.next = null
    }
}
class Stack {
    constructor(){
        this.top = null;
        this.length = 0
    }
    push(value){
        let newNode = new Node(value); 
        if(this.top){
            newNode.next = this.top
            this.top = newNode
            this.length ++
        }else {
            this.top = newNode
            this.length ++        
        }
    }
    pop(){
        if(this.top){
            let temp = this.top;
            this.top = this.top.next
            temp.next = null
            this.length --
        }else return('Sorry the Stack is empty') 
    }
    peek(){
        if(this.top){
            return this.top.value
        }else return('Sorry this stack is empty')
    }
    enqueue(value){
        this.push(value)
    }
    dequeue(){
        if(this.top){
            let curr = this.top
            while(curr.next.next){
                curr = curr.next
            }
            curr.next =null
        }
    }
}
module.exports = Stack