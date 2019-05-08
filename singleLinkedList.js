class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
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


    // if there is nothing on the list return undefined
    // cheack if no head or the length is 0 return undefined
    // else loop through the list until you reach the tail
    // set the next property of the 2nd to last node to be null
    // set the tail to be the 2nd to last node
    // Decrement the length of the list by 1
    // return the value of the node removed

    // removing node from the end of a linked list
    pop(){
            if(!this.head) return undefined;   // or this.tail instead of this.head, this.length can be checked if it is empty or null
            var current = this.head;
            var newTail = current;
            while(current.next){
                newTail = current;
                current = current.next;
            }
            this.tail = newTail;
            this.tail.next = null;
            this.length--;
            if(this.length === 0){   //making sure that head and tail are emptied when the last item is poped
                this.head = null;
                this.tail = null;
            }
            console.log(current);
    }

    //removing a node from the begining of a linked list
    // shift()
    // sudocode
    // if there are no nodes, return undefined
    // store the current head property in a variable
    // set the head property to be the current head's next property
    //making sure that head and tail are emptied when the last item is removed
    // decrement the length by 1

  

    shift(){
        if(!this.head) return undefined;
        var currentHead = this.head;
        this.head = currentHead.next;
        if(this.length == 0){
            this.tail = null;
        }
        this.length--;
        return currentHead;
    }

}

var list = new SinglyLinkedList();
list.push("Hi ");
list.push("there ");
list.push("!");

// pop operation
// list.pop();
// console.log(list);
// list.pop();
// console.log(list);
// list.pop();
// console.log(list);
// list.pop();

//shift operation
// console.log(list.shift());
// console.log(list.shift());
// console.log(list.shift());
// console.log(list);

