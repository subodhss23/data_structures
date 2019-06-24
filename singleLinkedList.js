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

    
    // shifting ---- shift()
    // removing a node from the begining of a linked list

    // sudocode
    // if there are no nodes, return undefined
    // store the current head property in a variable
    // set the head property to be the current head's next property
    // making sure that head and tail are emptied when the last item is removed
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


    // Unshifting
    // adding a new node to the beginning of the linked list

    //sudocode
    //function should accept a value
    //create a new node using th evalue passed to the function
    // if there is no head property on the list, set the head and tail to be the newly created 
    // <--node
    // Otherwise set the newly created node's next property to be the current head property on the list
    // set the head property on the list to be that newly creted node
    // increment the length of the list by 1
    // return the linked list

    unshift(value){
        var newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else{
            newNode.next = this.head;
            this.head = newNode;
        }
            this.length++;
            return this;
    }

    // this function should accept an index
    // if ther index is less than zero of greater than or equal to 
    // the length of the list, return null
    // loop through the list until you reac the index and 
    // return the node at the specific index

    get(index){
        if(index < 0 || index >= this.length) return null;
        var counter = 0;
        var current = this.head;
        while(counter !== index){
            current = current.next;
            counter++;
        }

        return current;
    }

    // set:- changing the value of a node based on it's position in th linked list
    // this function should accept index and value
    // use your get function to find the specific node
    // if the node is not found, return false
    // if the node is found, set the value of that node to be the value passed to the 
    // function and return true
    set(index, val){
        var foundNode = this.get(index);
        if(foundNode){
            foundNode.val = val;
            return true;
        }
        return false;
    }

   // insert
   // if the index is less than zero or greater than the length, return false
   // if the index is the same as the lenght, push a new node to the end of the list
   // if the index is 0, use unshift method (unshift a new node to the start of the list)
   // otherwise, using the get method, access the node at the index -1
    // set the next property on that node to be the new node
    // set the next property on the new node to be the previous next
    // increment the length
    // return true
    insert(index, val){
        if(index < 0 || index > this.length) return false;
        if(index === this.length) return !!this.push(val);
        if(index === 0) return !!this.unshift(val);
            
  
        var newNode = new Node(val);
        var prev = this.get(index - 1);
        var temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }

    //remove
    //removing a node from the linked list at a specific position
    //remove pseudocode
    //if the index is less than zero or greater than the length, return undefined
    //if the index is the same as the length-1, pop
    //if the index is 0, shift 
    //otherwise, using the get method, access the node at the index -1
    //set the next property on that node to be the next of the next node
    //Decrement the length
    //return the value of the node removed

    remove(index){
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return this.shift();
        if(index === this.length - 1) return this.pop();
        var previousNode = this.get(index -1);
        var removed = previousNode.next;
        previousNode.next = removed.next;
        this.length--;
        return removed;
    }

    //prints console.logs all the values of linkedlist in an array
    print(){
        var arr = [];
        var current = this.head;
        while(current){
            arr.push(current.val);
            current = current.next;
        }
        console.log(arr);
    }

    //reverse
    //reversing the linked list in place
    //**** how to reverse a single linked list *****/

    //reverse pseudocode
    //swap the head and tail
    // create a variable called next
    // create a variable called prev
    // create a variable called node and initialize it to the head property
    // loop through the list
    // set next to be the next property on whatever node is
    // set prev to be the value of the node variable
    // set the node variable to the value of the next variable
    reverse(){
        var node = this.head;
        this.head = this.tail;
        this.tail = node;
        var next;
        var prev = null;

        for(var i = 0; i < this.length; i++){
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }
}

var list = new SinglyLinkedList();
list.push(100);
list.push(201);
list.push(250);
list.push(350);
