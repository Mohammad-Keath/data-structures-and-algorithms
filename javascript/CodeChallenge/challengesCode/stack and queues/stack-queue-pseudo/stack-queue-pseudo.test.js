const stack = require('./stack-queue-pseudo')
describe('stack-Queues-pseudo test',()=>{
 
    test('Can successfully enqueue values onto a stack',()=>{
        let newStack = new stack
        newStack.push('one')
        newStack.push('two')
        newStack.push('three')
        newStack.enqueue('four')
        
        expect(newStack.top.value).toEqual('four')
        
    })
    test('Can successfully dequeue the stack',()=>{
        let newStack = new stack
        newStack.push('one')
        newStack.push('two')
        newStack.push('three')
        newStack.push('four')
        newStack.dequeue()
        expect(newStack.top.next.next.value).toEqual('two')
        expect(newStack.top.next.next.next).toEqual(null)
    })
  
})