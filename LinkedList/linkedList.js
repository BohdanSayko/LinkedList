class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next; 
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    add(value) {
        if(this.head === null) {
            this.head = new Node(value);

            return;
        }

        let current = this.head;
        while(current.next !== null){
            current = current.next;
        }

        current.next = new Node(value);
    }

    prepend(value) {
        if(this.head === null) {
            this.head = new Node(value);

            return;
        }

        let newNode = new Node(value, this.head);
        this.head = newNode;
    }

    find(value) {
        let current = this.head;
        while(current !== null) {
            if(current.data === value) {
                return current;
            }

            current = current.next;
        }

        return null;
    }

    delete(value) {
        if (this.head === null) {
            return;
        }

        if (this.head.data === value) {
            this.head = this.head.next;

            return;
        }

        let current = this.head;
        while (current.next !== null) {
            if (current.next.data === value) {
                current.next = current.next.next;

                return;
            }
            current = current.next;
        }
    }
}

const list = new LinkedList();
list.add(2);
list.add(3);
list.add(4);
list.add(5);
list.add(6);
list.add(7);
list.add(8);
list.add(9);
list.add(10);
list.prepend(1);
console.log(list.find(5));
list.delete(5);
console.log(list.find(5));