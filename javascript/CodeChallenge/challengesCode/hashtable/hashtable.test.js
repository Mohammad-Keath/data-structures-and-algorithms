const Hashmap = require('./hashtable')
describe('Hashmap test',()=>{
    test('Setting a key/value to your hashtable results in the value being in the data structure',()=>{
        const myHashmap = new Hashmap(10);
        myHashmap.set("esam", "401d15 student");
        myHashmap.set("ahmad", "401d15 student");
        expect(myHashmap.map[myHashmap.makeHash('esam')].head.value).toEqual({"esam": "401d15 student"})
    })
    test('Retrieving based on a key returns the value stored',()=>{
        const myHashmap = new Hashmap(10);
        myHashmap.set("esam", "401d15 student");
        myHashmap.set("ahmad", "401d15 student");
        expect(myHashmap.get('esam')).toEqual("401d15 student")
    })
    test('Successfully returns null for a key that does not exist in the hashtable',()=>{
        const myHashmap = new Hashmap(10);
        myHashmap.set("esam", "401d15 student");
        myHashmap.set("ahmad", "401d15 student");
        expect(myHashmap.get('samer')).toBeNull()
    })
    test('Successfully returns a list of all unique keys that exist in the hashtable',()=>{
        const myHashmap = new Hashmap(10);
        myHashmap.set("esam", "401d15 student");
        myHashmap.set("ahmad", "401d15 student");
        expect(myHashmap.keys()).toEqual(["ahmad","esam"])
    })
    test('Successfully handle a collision within the hashtable',()=>{
        const myHashmap = new Hashmap(10);
        myHashmap.set("mohamad", "401d15 student");
        myHashmap.set("ahmad", "401d15 student");
        expect(myHashmap.map[myHashmap.makeHash('mohamad')].head.value).toEqual({"mohamad": "401d15 student"})
        expect(myHashmap.map[myHashmap.makeHash('mohamad')].head.next.value).toEqual({"ahmad": "401d15 student"})
    })
    test('Successfully retrieve a value from a bucket within the hashtable that has a collision',()=>{
        const myHashmap = new Hashmap(10);
        myHashmap.set("mohamad", "401d15 student");
        myHashmap.set("ahmad", "401d15 student");
        expect(myHashmap.get('ahmad')).toEqual("401d15 student")
    })
    test('Successfully hash a key to an in-range value',()=>{
        const myHashmap = new Hashmap(10);
        expect(myHashmap.makeHash('hwllo')).toBeLessThan(11)
        expect(myHashmap.makeHash('mohammadSamer')).toBeLessThan(11)
        expect(myHashmap.makeHash('ShihabEshtiwi')).toBeLessThan(11)

    })
})