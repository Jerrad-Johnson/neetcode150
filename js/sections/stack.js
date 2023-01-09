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
    //cc(evalRPM)

    generateParentheses(2);
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

function generateParentheses(n = 3){
    let originalN = n;
    n *= n;
    let arr = [];
    let openParentheses = 0;
    let closedParentheses = 0;

    let resultL = recursion(0, n, arr, openParentheses, closedParentheses, originalN);
    let resultR = recursion(1, n, arr, openParentheses, closedParentheses, originalN);
    cc(resultL)

    function recursion(pref, n, arr, openParentheses, closedParentheses, originalN){
        arr = [...arr];
        n--;
        if (openParentheses < originalN && pref === 0){
            arr.push("(");
            openParentheses++;
        } else if (openParentheses > closedParentheses && pref === 1){
            arr.push(")");
            closedParentheses++;
        } else if (openParentheses === closedParentheses){
            arr.push("(");
            openParentheses++;
        } else if (openParentheses === originalN && closedParentheses !== originalN) {
            arr.push(")");
            closedParentheses++;
        } else if (openParentheses === originalN && closedParentheses == originalN){
            return arr;
        }
        if (n === 0) cc(n)
        if (n === 0) return arr;

        return (recursion(0, n, arr, openParentheses, closedParentheses, originalN), recursion(1, n, arr, openParentheses, closedParentheses, originalN));
    }
}


