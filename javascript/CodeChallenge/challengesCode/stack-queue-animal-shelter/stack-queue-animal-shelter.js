class Node {
    constructor(name,species){
        // if (species  === 'dog' || 'cat'){
          this.name = name;
          this.species = species;
          this.next =null  
        // }
        // else return ('Sorry we can accept species other than dog and cat')
    }
}
class AnimalShelter {
    constructor(){
        this.front = null;
        this.rear = null;
    }
    enqueue(name,species){
        if ((species  === 'dog' ||species  === 'cat') && typeof name == 'string'){
            let newNode = new Node(name,species)
            if(this.rear){
                this.rear.next = newNode;
                this.rear=newNode
            }else{
                this.front = newNode;
                this.rear = newNode
            }
            return
         } else return ('Sorry we can accept species other than dog and cat')
    }
    dequeue(){
        if(this.front){
            let curr = this.front
            this.front = this.front.next
            let species = curr.species
            curr.next =null
            return species
        }
    }
}
module.exports = AnimalShelter