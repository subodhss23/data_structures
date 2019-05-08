class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

// var first = new Node('hi');
// first.next = new Node('there');
// first.next.next = new Node(' ,Bob!')

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        var newNode = new Node(val);
        if (!this.head){
            this.head = newNode;
            this.tail = this.head;
        }
    }
}

var list = new SinglyLinkedList();
list.push("Hello");