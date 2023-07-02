class Node {
 constructor(value){
 this.value = value;
 this.next = null 
}}
class LinkedList {
    constructor(){
        this.head = null;
        this.tail = null }
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
    InsertBefore(site,value){
    const newNode =new Node(value);
            let current = this.head;
            let afterCurrent = this.head.next
            if (current.value==site){
                newNode.next = this.head
                this.head = newNode
            } else{
            while(current.next.value !== site){
                current = current.next
                afterCurrent = afterCurrent.next
            }
          current.next =newNode
          newNode.next = afterCurrent
            }
        }
    InsertAfter(site,value){
    const newNode =new Node(value);
            let current = this.head;
            let afterCurrent = this.head.next
            if (current.value==site){
                current.next = newNode
                newNode.next = afterCurrent
            } else{
            while(current.value !== site){
                current = current.next
                afterCurrent = afterCurrent.next
            }
          current.next =newNode
          newNode.next = afterCurrent
            }
        }


}
module.exports = {
    Node :Node,
    LinkedList : LinkedList  }
