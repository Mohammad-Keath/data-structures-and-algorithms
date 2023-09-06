const stack = require('./stack')
describe('stack test',()=>{
    test('Can successfully push onto a stack',()=>{
        let newStack = new stack
        newStack.push('one') 
        expect(newStack.top.value).toEqual('one')
    })
    test('Can successfully push multiple values onto a stack',()=>{
        let newStack = new stack
        newStack.push('one')
        newStack.push('two')
        newStack.push('three')
        newStack.push('four')
        
        expect(newStack.top.value).toEqual('four')
        
    })
    test('Can successfully pop off the stack',()=>{
        let newStack = new stack
        newStack.push('one')
        newStack.push('two')
        newStack.push('three')
        newStack.push('four')
        newStack.pop()
        expect(newStack.top.value).toEqual('three')
    })
    test('Can successfully empty a stack after multiple pops',()=>{
        let newStack = new stack
        newStack.push('one')
        newStack.push('two')
        newStack.push('three')
        newStack.push('four')
        newStack.pop()
        newStack.pop()
        newStack.pop()
        newStack.pop()
        
        expect(newStack.top).toEqual(null)
    })
    test('Can successfully peek the next item on the stack',()=>{
        let newStack = new stack
        newStack.push('one')
        newStack.push('two')
        newStack.push('three')
        newStack.push('four')
        newStack.pop()
        
        expect(newStack.peek()).toEqual('three')
    })
    test('Can successfully instantiate an empty stack',()=>{
        let newStack = new stack   
        expect(newStack.top).toEqual(null)
    })
    test('Calling pop or peek on empty stack raises exception',()=>{
        let newStack = new stack    
        expect(typeof newStack.pop()).toEqual('string')
        expect(typeof newStack.peek()).toEqual('string')
    })
})