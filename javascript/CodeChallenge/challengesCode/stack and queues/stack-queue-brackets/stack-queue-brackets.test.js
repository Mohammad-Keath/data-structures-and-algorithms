let validation =require('./stack-queue-brackets')


describe('stack-queue-brackets test',()=>{
    test('this input {} must return true',()=>{ 
       expect(validation('{}')).toEqual(true)
    })
    test('this input {}(){} must return true',()=>{ 
       expect(validation('{}(){}')).toEqual(true)
    })
    test('this input ()[[Extra Characters]] must return true',()=>{ 
       expect(validation('()[[Extra Characters]]')).toEqual(true)
    })
    test('this input [({}] must return false',()=>{ 
       expect(validation('[({}]')).toEqual(false)
    })
    test('this input {(}) must return false',()=>{ 
       expect(validation('{(})')).toEqual(false)
    })
})