function firstRepeated (string){
    const splitted = string.split(/[,\s]+/)
    let num = []
    for (let i=0;i<splitted.length;i++){
        if (num.includes(splitted[i].toLowerCase())){
            return splitted[i].toLowerCase()
        }
        num.push(splitted[i].toLowerCase())
    }
    return null
}
module.exports=firstRepeated