class MinStack{
    constructor(){
        this.stack = null;
        this.min = null;
        this.RPNStack = null;
    }

    createStack(vals){
        this.addToStacks(vals);
    }

    calculateRPN(vals){
        for (let entry of vals){
            if (
                (entry !== "*") &&
                (entry !== "/") &&
                (entry !== "+") &&
                (entry !== "-")
            ){
                let temp = this.RPNStack;
                this.RPNStack = {};
                this.RPNStack.data = +entry;
                this.RPNStack.prev = temp;
            } else {
                this.applyOperator(entry);
            }
        }
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

    applyOperator(operator){
        let val1 = this.RPNStack.prev.data;
        let val2 = this.RPNStack.data;
        let result;

        if (operator === "*") result = val1 * val2;
        if (operator === "/") result = val1 / val2;
        if (operator === "-") result = val1 - val2;
        if (operator === "+") result = val1 + val2;

        let temp = this.RPNStack;
        this.RPNStack = {};
        this.RPNStack.data = result;
        this.RPNStack.prev = temp;
    }
}