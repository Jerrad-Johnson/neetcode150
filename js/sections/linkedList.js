class Node{
    constructor(value) {
        this.val = value;
        this.next = null;
    }
}

class CreateLinkedList{
    constructor(){
        this.next = null;
        this.val = null;
        this.length = 0;
    }

    add(value){
        if (this.val === null){ this.val = value; return; }

        let head = this;
        while (head.next !== null){
            head = head.next;
        }

        head.next = new Node(value);
        length++;
    }

    addArray(values){
        for (let value of values){
            this.add(value);
        }
    }

}

reverseList([1,2,3,4,5]);
/*
function reverseList(head){
    let reversedHead = [];
    for (let i = 0, j = head.length-1; i < head.length; i++, j--){
        reversedHead[j] = head[i];
    }

    return reversedHead;
}*/
