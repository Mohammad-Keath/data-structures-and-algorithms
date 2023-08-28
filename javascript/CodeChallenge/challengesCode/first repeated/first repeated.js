function firstRepeated (string){
    const splitted = string.split(/[,\s]+/)
    for (let i=0;i<splitted.length;i++){
        for(let j =i+1 ;j<splitted.length;j++){
            if (splitted[i].toLowerCase()==splitted[j].toLowerCase()){
                return splitted[i].toLowerCase()
            }
        }
    }
    return null
}
module.exports=firstRepeated