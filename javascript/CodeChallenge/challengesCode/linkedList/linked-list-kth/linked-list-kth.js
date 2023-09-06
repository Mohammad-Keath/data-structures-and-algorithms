
class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}
class linkedlist {
    constructor(){
        this.head = null
        this.tail = null   
    }
    Append(value){
        const newNode =new Node(value);
        if(this.head){
            let current = this.head;
            while(current.next){
                current = current.next
            }
          current.next =newNode
          this.tail = current.next
        }
        else this.head = newNode
        }
    kth(k){
        let current = this.head;
        let length = 0
        while(current.next){
            current = current.next
            length ++
        }
        if (k>length || k<0){
            return("Exception")
        }
        else{
            let placeFromFirst = length -k
            let nextArr = ['this.head']
            for(let i=0;i<placeFromFirst;i++){
                nextArr.push('next')
            }
            nextArr.push('value')
            return(eval(nextArr.join('.'))) 
            //this.head[parseInt(nextArr.join('.'))].value
        }
    }
}
module.exports=linkedlist