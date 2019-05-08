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
        this.size = 0;
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
}

var list = new SinglyLinkedList();
console.log(list);
list.push(2);
list.push(3);
list.push(4);
console.log(list);