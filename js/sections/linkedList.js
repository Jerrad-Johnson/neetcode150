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

let temp = new CreateLinkedList();
temp.add(5);
temp.add(7);
temp.add(9);
temp.add(9);
temp.addArray([1,2,3,4]);


cc(temp);
