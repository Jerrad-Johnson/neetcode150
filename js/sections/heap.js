class MinHeap{
    constructor(k){
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
}

let x = new MinHeap(3);
x.add([1,2,3])
x.add(5);
cc(x.getKth());