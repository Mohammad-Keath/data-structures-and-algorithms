# array-reverse
|Problem Domain|Algorithm|
|In this challenge we are working on changing the array that inputed to the function from its normal array into the same array but in reverse, it means that the first element will become the last one and the same for other|we are going to take one element by one from the first element of the array into the last one, then unshifted to a new array in order to rearrange it|

|Test Cases| Code|
| 1. given [1,2,3,4,5] return [5,4,3,2,1]|const ReverseArray = (arr)=>{
    const newArr = [];
    arr.forEach((item)=>{
        newArr.unshift(item)
    })
    return newArr
}
| 2. given ['ahmad','salem','khaled','mohammad'] return ['mohammad','khaled','salem','ahmad']|