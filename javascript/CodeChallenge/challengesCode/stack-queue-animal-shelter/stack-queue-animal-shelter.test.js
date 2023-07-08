const AnimalShelter = require('./stack-queue-animal-shelter')

describe('stack-queue-animal-selter test',()=>{
    test('it will enqueue if the species is dog',()=>{
        
        let Animal = new AnimalShelter
        Animal.enqueue('poppy','dog')
       expect(Animal.front.name).toEqual('poppy')
    })
    test('it will enqueue if the species is cat',()=>{
        
        let Animal = new AnimalShelter
        Animal.enqueue('catty','cat')
       expect(Animal.front.name).toEqual('catty')
    })
    test('it will not enqueue if the species is not dog or cat',()=>{
        
        let Animal = new AnimalShelter
        Animal.enqueue('woody','hourse')
       expect(Animal.front).toEqual(null)
    })
    test('it will not enqueue if the name is not a string',()=>{
        
        let Animal = new AnimalShelter
        Animal.enqueue(null ,'dog')
       expect(Animal.front).toEqual(null)
    })

})