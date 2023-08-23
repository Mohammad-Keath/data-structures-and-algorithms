const Hashmap = require('./hashtable')
describe('Hashmap test',()=>{
    test('Setting a key/value to your hashtable results in the value being in the data structure',()=>{
        const myHashmap = new Hashmap(10);
        myHashmap.add("esam", "401d15 student");
        myHashmap.add("ahmad", "401d15 student");
        expect(myHashmap[1]).toEqual()
    })
    test('Retrieving based on a key returns the value stored',()=>{
        const myHashmap = new Hashmap(10);
        myHashmap.add("esam", "401d15 student");
        myHashmap.add("ahmad", "401d15 student");
        expect(myHashmap[1]).toEqual()
    })
    test('Successfully returns null for a key that does not exist in the hashtable',()=>{
        let newQueue = new queue
        newQueue.enqueue('one')
        newQueue.enqueue('two')
        newQueue.enqueue('three')
        newQueue.enqueue('four')
        newQueue.dequeue()
        expect(newQueue.front.value).toEqual('two')
    })
    test('Successfully returns a list of all unique keys that exist in the hashtable',()=>{
        let newQueue = new queue
        newQueue.enqueue('one')
        newQueue.enqueue('two')
        newQueue.enqueue('three')
        newQueue.enqueue('four')
        
        expect(newQueue.peek()).toEqual('one')
    })
    test('Successfully handle a collision within the hashtable',()=>{
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
    test('Successfully retrieve a value from a bucket within the hashtable that has a collision',()=>{
        let newQueue = new queue   
        expect(newQueue.front).toEqual(null)
    })
    test('Successfully hash a key to an in-range value',()=>{
        let newQueue = new queue    
        expect(typeof newQueue.dequeue()).toBe("string")
        expect(typeof newQueue.peek()).toBe("string")
    })
})