
const {zip,linkedlist} = require('./linked-list-zip');



describe('linked-list-kth test',()=>{


    test("where 2 lists are equal",()=>{
        const linkedlistA = new linkedlist();
        linkedlistA.Append('oneA')
        linkedlistA.Append('twoA')
        linkedlistA.Append('threeA')
        linkedlistA.Append('fourA')

        const linkedlistB = new linkedlist();
        linkedlistB.Append('oneB')
        linkedlistB.Append('twoB')
        linkedlistB.Append('threeB')
        linkedlistB.Append('fourB')
     let merging = zip(linkedlistA,linkedlistB)
        expect(merging.head.value).toEqual('oneA');
        expect(merging.head.next.value).toEqual('oneB')
        expect(merging.head.next.next.next.next.value).toEqual('threeA')
    })

    test("where list A is longer than list B",()=>{
        const linkedlistA = new linkedlist();
        linkedlistA.Append('oneA')
        linkedlistA.Append('twoA')
        linkedlistA.Append('threeA')
        linkedlistA.Append('fourA')

        const linkedlistB = new linkedlist();
        linkedlistB.Append('oneB')
        linkedlistB.Append('twoB')
        
     let merging = zip(linkedlistA,linkedlistB)
        expect(merging.head.value).toEqual('oneA');
        expect(merging.head.next.value).toEqual('oneB')
        expect(merging.head.next.next.next.next.value).toEqual('threeA')
        expect(merging.head.next.next.next.next.next.value).toEqual('fourA')

    })
    test("where list B is longer than list A",()=>{
        const linkedlistA = new linkedlist();
        linkedlistA.Append('oneA')
        linkedlistA.Append('twoA')
       
        const linkedlistB = new linkedlist();
        linkedlistB.Append('oneB')
        linkedlistB.Append('twoB')
        linkedlistB.Append('threeB')
        linkedlistB.Append('fourB')

     let merging = zip(linkedlistA,linkedlistB)
        expect(merging.head.value).toEqual('oneA');
        expect(merging.head.next.value).toEqual('oneB')
        expect(merging.head.next.next.next.next.value).toEqual('threeB')
        expect(merging.head.next.next.next.next.next.value).toEqual('fourB')

    })
    
    
})
