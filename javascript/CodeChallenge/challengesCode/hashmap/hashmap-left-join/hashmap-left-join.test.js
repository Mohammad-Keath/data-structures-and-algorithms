const leftJoin = require('./hashmap-left-join')
const Hashmap = require('../hashtable/hashtable')
describe('left join test',()=>{
    test('test 1',()=>{
        const myHashmap = new Hashmap(10);
        myHashmap.set("diligent", "employed");
        myHashmap.set("fond", "enamored");
        myHashmap.set("guide", "usher");
        const myHashmap2 = new Hashmap(10);
        myHashmap2.set("diligent", "idle");
        myHashmap2.set("fond", "averse");
        myHashmap2.set("guide", "follow");
        const result = leftJoin(myHashmap,myHashmap2)
        expect(result).toEqual([["diligent", "employed", "idle"], ["guide", "usher", "follow"], ["fond", "enamored", "averse"]])
    })
    test('test 2',()=>{
        const myHashmap = new Hashmap(10);
        myHashmap.set("outfit", "garb");
        myHashmap.set("wrath", "anger");
        myHashmap.set("guide", "usher");
        const myHashmap2 = new Hashmap(10);
        myHashmap2.set("outfit", "idle");
        myHashmap2.set("wrath", "delight");
        myHashmap2.set("guide", "follow");
        const result = leftJoin(myHashmap,myHashmap2)
        expect(result).toEqual([["wrath", "anger", "delight"], ["outfit", "garb", "idle"], ["guide", "usher", "follow"]])
    })
})