
function leftJoin (hash1,hash2){
    let results = []
    for (let i=0;i<hash1.map.length;i++){
      if(hash1.map[i]){
        let curr = hash1.map[i].head
        while(curr){
            let arr = Object.keys(curr.value)
            arr.push(curr.value[arr[0]])
            arr.push(hash2.get(arr[0]))
            results.push(arr)
            curr = curr.next
        }}
    }
    return results
}
module.exports=leftJoin