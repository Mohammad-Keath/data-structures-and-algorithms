"use strict";
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }
    append(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = node;
    }
    print() {
        let values = [];
        let current = this.head;
        while (current) {
            values.push(current.value);
            current = current.next;
        }
        return values;
    }
}
class Hashmap {
    constructor(size) {
        this.size = size;
        this.map = new Array(size);
    }
    makeHash(key) {
        const asciiCodeSum = key.split("").reduce((acc, char) => {
            return acc + char.charCodeAt();
        }, 0);
        const multiPrime = asciiCodeSum * 599;
        const theIndex = multiPrime % this.size;
        return theIndex;
    }
    set(key, value) {
        const hash = this.makeHash(key);
        if(!this.map[hash]){
            this.map[hash] = new LinkedList();
        }

        this.map[hash].append({ [key]: value })
    }
    get(key){
        const hash = this.makeHash(key)
        const ll = this.map[hash]
        if(ll){
            let curr = ll.head
            while(curr){
                if(curr.value[key]){
                    return curr.value[key]
                }
                curr = curr.next
            }
        }
        return null
    }
    has(key){
        const hash = this.makeHash(key)
        const ll = this.map[hash]
        if(ll){
            let curr = ll.head
            while(curr){
                if(curr.value[key]){
                    return true
                }
                curr = curr.next
            }
        }else return false
    }
    keys(){
        let keys =[]
        this.map.forEach((ll)=>{
            let current = ll.head
            while(current){
                let key =Object.keys(current.value)
                key.map((key)=>{
                    keys.push(key)
                })
                current =current.next
            }
        })
        return keys
    }

    
}

module.exports =Hashmap