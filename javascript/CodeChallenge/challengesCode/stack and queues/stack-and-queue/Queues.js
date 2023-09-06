class Node{
    constructor(value){
        this.value = value;
        this.next = null
    }
}

class Queue{
    constructor(){
        this.front = null;
        this.rear = null
    }
    enqueue(value){
        let newNode = new Node(value)
       if(this.front){
        this.rear.next = newNode
        this.rear = newNode
       }else{
        this.front= newNode;
        this.rear = newNode
       }
    }
    dequeue(){
        if(this.front){
            let temp = this.front
            this.front = this.front.next
            temp.next = null
        }else return("Sorry this queue is empty")
    }
    peek(){if(this.front){
        return this.front.value
    }else return('Sorry this Queue is empty')
    }
    isEmpty(){
        return(this.front == null)
    }
}
module.exports=Queue