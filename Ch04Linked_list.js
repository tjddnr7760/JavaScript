'use strict'

class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        const first = new Node(null);
        this.head = first;
        this.tail = first;
    }

    append(data) {
        const newNode = new Node(data);
        this.tail.next = newNode;
        this.tail = newNode;
    }

    find(data) {
        let curNode = this.head;
        while(curNode.data !== data){
            curNode = curNode.next
        }
        return curNode;
    }

    insert(node, data){
        const newNode = new Node(data);
        newNode.next = node.next;
        node.next = newNode;
    }

    remove(data){
        let prevNode = this.head;
        while(prevNode.next.data !== data){
            prevNode = prevNode.next;
        }
        
        if(prevNode.next !== null){
            prevNode.next = prevNode.next.next;
        }
    }

    display(){
        let curNode = this.head;
        while(curNode !== this.tail){
            console.log(curNode.data);
            curNode = curNode.next;
        }
        console.log(curNode.data);
    }
}

const linkedList = new SinglyLinkedList();
linkedList.append(9);
linkedList.append(7);
linkedList.append(5);
linkedList.append(6);
linkedList.append(4);
linkedList.display();
console.log(linkedList.find(5));
linkedList.remove(6);
linkedList.display();
linkedList.insert(linkedList.find(5), 6);
linkedList.display();