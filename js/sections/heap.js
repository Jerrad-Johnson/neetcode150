class MinHeap{
    constructor(k = Number.POSITIVE_INFINITY){
        this.heap = [];
        this.k = k
    }

    add(nums) {
        if (Array.isArray(nums)) {
            for (let num of nums) {
                this.heap.push(num);
            }
        } else {
            this.heap.push(nums);
        }

        this.heap.sort();

        while (this.heap.length > this.k){
            this.heap.shift();
        }
        return this.heap[0];
    }

    getKth(){
        return this.heap[0];
    }

    lastStoneWeight(){
        while (this.heap.length > 1){
            this.heap.sort();
            let length = this.heap.length;
            let remainder = this.heap[length-1] - this.heap[length-2];
            if (remainder !== 0){
                this.heap.pop();
                this.heap.pop();
                this.heap.unshift(remainder);
            } else {
                this.heap.pop();
                this.heap.pop();
            }
        }

        return this.heap;
    }
}

let x = new MinHeap(3);
x.add([1,2,3])
x.add(5);
//cc(x.getKth());

let stones = new MinHeap();
stones.add([2,7,4,1,8,1]);
cc(stones.lastStoneWeight());

