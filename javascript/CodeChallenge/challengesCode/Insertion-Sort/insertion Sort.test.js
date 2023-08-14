const  insertionSort = require ('./insertion-Sort');

describe('insertion sort test',()=>{
    test("test [20,18,12,8,5,-2]",()=>{
        const arr = [20,18,12,8,5,-2];
        const result = insertionSort(arr)
        expect(result).toEqual([-2,5,8,12,18,20]);
    })
   
})