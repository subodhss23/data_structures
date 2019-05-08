class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value){
        var newNode = new Node(value);
        if (!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
        return this;
    }

    // traverse(){
    //     var current = this.head;
    //     while(current){
    //         console.log(current.value);
    //         current = current.next;
    //     }
    // }


    // if there is nothing on the list return undefined
    // cheack if no head or the length is 0 return undefined
    // else loop through the list until you reach the tail
    // set the next property of the 2nd to last node to be null
    // set the tail to be the 2nd to last node
    // Decrement the length of the list by 1
    // return the value of the node removed

    pop(){
            if(!this.head) return undefined;   // or this.tail instead of this.head, this.size can be checked if it is empty or null
            var current = this.head;
            var newTail = current;
            while (current.next){
                newTail = current;
                current = current.next;
            }
            this.tail = newTail;
            this.tail.next = null;
            this.length--;
            return current;
    }
}

var list = new SinglyLinkedList();
list.push("Hi ");
list.push("there ");
list.push("!");
console.log(list.pop());
console.log(list.pop());
console.log(list.pop());


