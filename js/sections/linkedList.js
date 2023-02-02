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
        this.length++;
    }

    addArray(values){
        for (let value of values){
            this.add(value);
        }
    }

    reverseList(){
        let prev = null,
            curr = this,
            limiter = 0;

        while (curr !== null){
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }

        return prev;
    }

    mergeSorted(list1, list2){
        let length;
        list1.length > list2.length ? length = list1.length : length = list2.length;

        let newList = new CreateLinkedList();

        while (list1 !== null && list2 !== null){
            if (list1?.val <= list2?.val){
                newList.add(list1.val);
                list1 = list1.next;
            } else if (list1?.val > list2?.val) {
                newList.add(list2.val);
                list2 = list2.next;
            }
        }
        return newList;
    }

    reorderList(forward, reversed){
        let currF = forward,
            currR = reversed,
            fast = forward.next,
            tempL,
            tempR,
            limiter = 0;

        while (fast !== null && fast.next !== null){
            if (limiter === 5) break; limiter++;

            tempL = currF.next;
            tempR = currR.next;
            currF.next = currR;
            currR.next = tempL;
            currF = currF.next.next;
            currR = tempR;

            fast = fast.next.next;
        }
    }
}

/*function reverseList(head){
    let reversedHead = [];
    for (let i = 0, j = head.length-1; i < head.length; i++, j--){
        reversedHead[j] = head[i];
    }

    return reversedHead;
}*/

//reverseList([1,2,3,4,5]);
function reverseList(head){
    let newHead = new CreateLinkedList();
    newHead.addArray(head);
    cc(newHead.reverseList());
}

//mergeSorted([1,2,4], [1,3,4]);
//mergeSorted([0], []);
function mergeSorted(list1, list2){
    let nodeList1 = new CreateLinkedList();
    nodeList1.addArray(list1);

    let nodeList2 = new CreateLinkedList();
    nodeList2.addArray(list2);

    let sortedNodeList = new CreateLinkedList();
    cc(sortedNodeList.mergeSorted(nodeList1, nodeList2));
}

reorderList([1,2,3,4,5]);

function reorderList(head){
    let forwardList = new CreateLinkedList();
    forwardList.addArray(head);

    let reversedList = new CreateLinkedList();
    reversedList.addArray(head);
    reversedList = reversedList.reverseList();

    let reorderedList = new CreateLinkedList();
    cc(reorderedList.reorderList(forwardList, reversedList));


}

