
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
    }
   function zipLists(listA,listB){
        let newlist = new linkedlist()
        newlist.Append(listA.head.value)
        newlist.Append(listB.head.value)
        // let currentNew = newlist.head
        
        let currentA =listA.head
        let currentB = listB.head
        while(currentA.next||currentB.next){
            if(currentA.next){
            currentA = currentA.next
            newlist.Append(currentA.value)}

            if(currentB.next){
            currentB=currentB.next
            newlist.Append(currentB.value)}
        }
        return newlist

    //     let newlist = new linkedlist()
    //     let currentA = listA.head
    //     let postcurrentA = listA.head.next
    //     let currentB = listB.head
    //     let postcurrentB = listB.head.next
    //     let current
    //     while(currentA.next||currentB.next){
    //             if(currentA.next){
    //             currentA.next = null
    //             if(newlist.head){
    //                 current.next = currentA
    //                 current = current.next
    //                 currentA = postcurrentA
    //                 postcurrentA = postcurrentA.next
    //             }else {
    //                 newlist.head = currentA
    //                 current = newlist.head
    //             }
                
    //             if(currentB.next){
    //                 currentB.next = null
    //                 current.next = currentB
    //                 currentB = postcurrentB
    //                 postcurrentB = postcurrentB.next
    //                 current=current.next
    //             }
    //     }
    // }
    // return newlist
}

module.exports={linkedlist:linkedlist,
zip:zipLists}