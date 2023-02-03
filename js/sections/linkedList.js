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
            tempR;

        while (fast !== null && fast.next !== null){

            tempL = currF.next;
            tempR = currR.next;
            currF.next = currR;
            currR.next = tempL;
            currF = currF.next.next;
            currR = tempR;

            fast = fast.next.next;
        }
        return forward;
    }

    removeNth(n){
        let temp = this;
        let curr, next;

        for (let i = 0; i < n-1; i++){
            temp = temp.next;
        }

        next = temp.next.next;
        curr = temp;
        curr.next = next;

        return this;
    }

    removeNthFromEnd(n){
        let temp = this;
        let temp2 = this;
        let length = 0;

        while (temp !== null){
            temp = temp.next;
            length++;
        }

        for (let i = 0; i < length-n-1; i++){
            temp2 = temp2.next;
        }

        let curr = temp2;
        let newNext = curr.next.next;
        curr.next = newNext;

        return this;
    }

    copyRandomList(){
        let listCopy2 = {...this};
        let listCopy = listCopy2;

        let length = 0;
        let nodes = [];

        while (listCopy !== null){
            nodes.push(listCopy);
            listCopy = listCopy.next;
            length++;
        }

        for (let i = 0; i < nodes.length; i++){
            let nodeToPointTo = recursiveRandom(i, length);
            nodes[i].randomPointer = nodes[nodeToPointTo];
        }

        function recursiveRandom(cannotBe, length){
            let random = Math.floor(Math.random() * (length-1 - 0 + 1) + 0);
            if (cannotBe === random) random = recursiveRandom(cannotBe, length);
            return random;
        }

        return listCopy2;
    }

    addTwoNumbers(list1, list2){
        let sum1 = +getSum(list1).join(""),
            sum2 = +getSum(list2).join("");

        let newSum = sum1+sum2;
        newSum = newSum.toString().split("").reverse();
        let newList = new CreateLinkedList();
        newList.addArray(newSum);

        return newList;

        function getSum(list){
            let sum = [];

            while (list !== null){
                sum.push(list.val)
                list = list.next;
            }

            return sum.reverse();
        }
    }

    findDuplicate(){
        let map = {};
        let nodeCopy = this;

        while (nodeCopy !== null){
            if (map[nodeCopy.val]) return true;
            map[nodeCopy.val] = 1;
            nodeCopy = nodeCopy.next;
        }

        return false;
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

//reorderList([1,2,3,4,5]);
function reorderList(head){
    let forwardList = new CreateLinkedList();
    forwardList.addArray(head);

    let reversedList = new CreateLinkedList();
    reversedList.addArray(head);
    reversedList = reversedList.reverseList();

    let reorderedList = new CreateLinkedList();
    cc(reorderedList.reorderList(forwardList, reversedList));
}

//removeNthFromEnd([1,2,3,4,5], 2);
function removeNthFromEnd(list, n){
    let nodeList = new CreateLinkedList();
    nodeList.addArray(list);
    nodeList.removeNthFromEnd(n);
}

//copyRandomList([5, 3, 2, 1, 9, 8]);
function copyRandomList(list){
    let nodeList = new CreateLinkedList();
    nodeList.addArray(list);
    let randomPointers = nodeList.copyRandomList();
}

addTwoNumbers([9,9,9,9,9,9,9], [9,9,9,9]);
function addTwoNumbers(l1, l2){
    let list1 = new CreateLinkedList();
    list1.addArray(l1);

    let list2 = new CreateLinkedList();
    list2.addArray(l2);

    let newList = new CreateLinkedList();
    cc(newList.addTwoNumbers(list1, list2));
}

findDuplicate([1,2,3,4,5,2])
function findDuplicate(nums){
    let nodes = new CreateLinkedList();
    nodes.addArray(nums);

    cc(nodes.findDuplicate());
}