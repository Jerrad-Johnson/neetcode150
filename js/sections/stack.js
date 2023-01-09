function stacks(){
    //cc(isValid("()[]{}"));

    let stack = new MinStack();
    stack.createStack([4, 3, 2, 4, 4]);
    stack.pop(1);
    stack.push(8);
    /*cc(stack.top());
    cc(stack.getMin());*/

    evalRPM = new MinStack();
    evalRPM.calculateRPN(["2","1","+","3","*"]);
    cc(evalRPM)
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

