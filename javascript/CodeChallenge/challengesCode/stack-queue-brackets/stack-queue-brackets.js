class Node{
    constructor(value){
        this.value = value;
        this.next = null
    }
  }
  
  class Stack{
    constructor(){
        this.top = null;
    }
    push(value){
        let newNode = new Node(value)
        newNode.next = this.top;
        this.top = newNode;
    }
    pop(){
        if(this.top){
            let temp = this.top
            this.top = this.top.next
            temp.next = null
            return temp
        }else return('Sorry the stack is empty')
    }
    peek(){
        if(this.top){
            return this.top.value
        }else return("Sorry the stack is empty")
    }
    isEmpty(){
        return (this.top === Null)
    }
  }
  function validateBrackets(value){
    let newstack = new Stack()
    const obj= {
      "]":'[',
      '}':'{',
      ')':"("
    }
    for(let i=0;i<value.length;i++){
        console.log(value[i])
        if(value[i]=='('||value[i]=='['||value[i]=='{'){
          newstack.push(value[i])
        }else if(value[i]==')'||value[i]=='}'||value[i]==']'){
          let curr = newstack.top
          if (newstack.top !== null){
            while(curr){
             if(curr.value == obj[value[i]]){
              newstack.pop()
              break
             }else curr = curr.next
            }if(curr == null){return false}
          }else return false
        }
    } return newstack.top == null
  }
  module.exports=validateBrackets