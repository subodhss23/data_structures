class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
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
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    traverse(){
        var current = this.head;
        while(current){
            console.log(current.value);
            current = current.next;
        }
    }

    //removing a node from the end of the linked list(confusing one)
    pop(){
        if(!this.head) return undefined;
        var current = this.head;
        var newTail = current;
        while (current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    //removing a new node from the beginning of the linked list
    shift(){

    }
}

var list = new LinkedList();
list.push(1);
list.push(2);
list.push(3);
// list.traverse();

list.pop();
