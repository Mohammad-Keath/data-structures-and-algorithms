const queue = require('./Queues')
describe('Queues test',()=>{
    test('Can successfully enqueue into a queue',()=>{
        let newQueue = new queue
        newQueue.enqueue('one') 
        expect(newQueue.rear.value).toEqual('one')
    })
    test('Can successfully enqueue multiple values into a queue',()=>{
        let newQueue = new queue
        newQueue.enqueue('one')
        newQueue.enqueue('two')
        newQueue.enqueue('three')
        newQueue.enqueue('four')
        
        expect(newQueue.front.value).toEqual('one')
        expect(newQueue.rear.value).toEqual('four')
    })
    test('Can successfully dequeue out of a queue the expected value',()=>{
        let newQueue = new queue
        newQueue.enqueue('one')
        newQueue.enqueue('two')
        newQueue.enqueue('three')
        newQueue.enqueue('four')
        newQueue.dequeue()
        expect(newQueue.front.value).toEqual('two')
    })
    test('Can successfully peek into a queue, seeing the expected value',()=>{
        let newQueue = new queue
        newQueue.enqueue('one')
        newQueue.enqueue('two')
        newQueue.enqueue('three')
        newQueue.enqueue('four')
        
        expect(newQueue.peek()).toEqual('one')
    })
    test('Can successfully empty a queue after multiple dequeues',()=>{
        let newQueue = new queue
        newQueue.enqueue('one')
        newQueue.enqueue('two')
        newQueue.enqueue('three')
        newQueue.enqueue('four')
        newQueue.dequeue()
        newQueue.dequeue()
        newQueue.dequeue()
        newQueue.dequeue()
        
        expect(newQueue.front).toEqual(null)
    })
    test('Can successfully instantiate an empty queue',()=>{
        let newQueue = new queue   
        expect(newQueue.front).toEqual(null)
    })
    test('Calling dequeue or peek on empty queue raises exception',()=>{
        let newQueue = new queue    
        expect(typeof newQueue.dequeue()).toBe("string")
        expect(typeof newQueue.peek()).toBe("string")
    })
})