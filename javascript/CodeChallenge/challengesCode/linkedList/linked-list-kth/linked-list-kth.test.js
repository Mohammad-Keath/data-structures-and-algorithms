
const linkedlist = require('./linked-list-kth');


describe('linked-list-kth test',()=>{
  

    test("Where k is greater than the length of the linked list",()=>{
        const newLinkList = new linkedlist();
        newLinkList.Append('one')
        newLinkList.Append('two')
        newLinkList.Append('three')
        newLinkList.Append('four')
        newLinkList.Append('five')
        newLinkList.Append('six')
        newLinkList.Append('seven')
        expect(newLinkList.kth(8)).toEqual('Exception');
    })
    test('Where k and the length of the list are the same',()=>{
        const newLinkList = new linkedlist();
        newLinkList.Append('one')
        newLinkList.Append('two')
        newLinkList.Append('three')
        newLinkList.Append('four')
        newLinkList.Append('five')
        newLinkList.Append('six')
        newLinkList.Append('seven')
        expect(newLinkList.kth(6)).toEqual('one');

    })
    test('Where k is not a positive integer',()=>{
        const newLinkList = new linkedlist();
        newLinkList.Append('one')
        newLinkList.Append('two')
        newLinkList.Append('three')
        newLinkList.Append('four')
        newLinkList.Append('five')
        newLinkList.Append('six')
        newLinkList.Append('seven')
        expect(newLinkList.kth(-2)).toEqual('Exception');

    })
    test("Where the linked list is of a size 1",()=>{
        const newLinkList = new linkedlist();
        newLinkList.Append('one')
       
        expect(newLinkList.kth(0)).toEqual('one');
      
    })
    test('“Happy Path” where k is not at the end, but somewhere in the middle of the linked list',()=>{
        const newLinkList = new linkedlist();
        newLinkList.Append('one')
        newLinkList.Append('two')
        newLinkList.Append('three')
        newLinkList.Append('four')
        newLinkList.Append('five')
        newLinkList.Append('six')
        newLinkList.Append('seven')
        expect(newLinkList.kth(3)).toEqual('four');
     
    })
    
})
