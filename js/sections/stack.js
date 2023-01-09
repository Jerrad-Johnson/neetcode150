function stacks(){
    //cc(isValid("()[]{}"));

    let stack = new MinStack();
    stack.createStack([4, 3, 2, 4, 4]);
    stack.pop(1);
    stack.push(8);
    cc(stack.top());
    cc(stack.getMin());
}

function isValid(str){
        let arr = [...str];
        let tempArr = [];
        let length = arr.length;
        let x;
        let failure = false;

        if (length == 1){
            return false;
        }

        for (i = 0; i < length; i++){
            x = arr.shift();
            if (x == "[" || x == "(" || x == "{"){
                tempArr.push(x);
            } else if ( (x == ")") && (tempArr.at(-1) == "(") ) {
                tempArr.splice(-1,1);
            } else if ( (x == "]") && (tempArr.at(-1) == "[") ) {
                tempArr.splice(-1,1);
            } else if ( (x == "}") && (tempArr.at(-1) == "{") ) {
                tempArr.splice(-1,1);
            } else {
                failure = true;
            }
        }

        if (tempArr.length != 0){
            return false;
        }

        return !failure;
}

class MinStack{
    constructor(){
        this.stack = null;
        this.min = null;
    }

    createStack(vals){
        this.addToStacks(vals);
    }

    push(val){
        this.addToStacks([val]);
    }

    pop(count){
        for (let i = 0; i < count; i++){
            this.stack = this.stack.prev;
            this.min = this.min.prev;
        }
    }

    top(){
        return this.stack.data;
    }

    getMin(){
        return this.min.data;
    }

    addToStacks(val){
        for (let entry of val){
            let temp = this.stack;
            this.stack = {};
            this.stack.data = entry;
            this.stack.prev = temp;

            let tempMin = this.min;
            this.min = {};
            (tempMin?.data && entry > tempMin.data) ? this.min.data = tempMin.data : this.min.data = entry;
            this.min.prev = tempMin;
        }
    }
}