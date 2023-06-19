
const {LinkedList} = require('./linked-list-insertions');


describe('Linked list insertion test',()=>{
    test("Can successfully add a node to the end of the linked list",()=>{
        const newLinkList = new LinkedList();
        newLinkList.Append('one')
        newLinkList.Append('two')
        newLinkList.Append('three')
        expect(newLinkList.tail.value).toEqual('three');
        expect(newLinkList.tail.next).toEqual(null)
    })
    test('Can successfully add multiple nodes to the end of a linked list',()=>{
        const newLinkList = new LinkedList();
        newLinkList.Append('one')
        newLinkList.Append('two')
        newLinkList.Append('three')
        expect(newLinkList.head.value).toEqual('one');
        expect(newLinkList.head.next.value).toEqual('two');
        expect(newLinkList.head.next.next.value).toEqual('three');
        expect(newLinkList.tail.value).toEqual('three');
        expect(newLinkList.tail.next).toEqual(null)
    })
    test('Can successfully insert a node before a node located i the middle of a linked list',()=>{
        const newLinkList = new LinkedList();
        newLinkList.Append('one')
        newLinkList.Append('two')
        newLinkList.Append('three')
        newLinkList.InsertBefore('two','seven')
        expect(newLinkList.head.value).toEqual('one')
        expect(newLinkList.head.next.value).toEqual('seven')
        expect(newLinkList.head.next.next.value).toEqual('two')

    })
    test("Can successfully insert a node before the first node of a linked list",()=>{
        const newLinkList = new LinkedList();
        newLinkList.Append('one')
        newLinkList.Append('two')
        newLinkList.InsertBefore('one','seven')
        expect(newLinkList.head.value).toEqual('seven')
        expect(newLinkList.head.next.value).toEqual('one')
    })
    test('Can successfully insert after a node in the middle of the linked list',()=>{
        const newLinkList = new LinkedList();
        newLinkList.Append('one')
        newLinkList.Append('two')
        newLinkList.Append('three')
        newLinkList.InsertAfter('two','seven')
        expect(newLinkList.head.next.value).toEqual('two')
        expect(newLinkList.head.next.next.value).toEqual('seven')
        expect(newLinkList.head.next.next.next.value).toEqual('three')

    })
    test('Can successfully insert a node after the last node of the linked list',()=>{
        const newLinkList = new LinkedList();
        newLinkList.Append('one')
        newLinkList.Append('two')
        newLinkList.InsertAfter('two','seven')
        expect(newLinkList.head.next.value).toEqual('two')
        expect(newLinkList.head.next.next.value).toEqual('seven')
        expect(newLinkList.head.next.next.next).toEqual(null)
    })

})
