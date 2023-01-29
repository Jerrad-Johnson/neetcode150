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

    /*let tempStack = new MinStack();
    tempStack.createStack([73,74,75,71,69,72,76,73]);*/
    /*cc(dailyTemperatures([73,74,75,71,69,72,76,73]));

    generateParentheses(3);*/
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
    let stack = [];
    let res = [];
    recursion(0, 0);

    function recursion(openN, closedN){
        if (openN === closedN && closedN === n){
            res.push([...stack]);
            return;
        }

        if (openN < n){
            stack.push("(");
            recursion(openN + 1, closedN);
            stack.pop();
        }

        if (closedN < openN){
            stack.push(")");
            recursion(openN, closedN + 1);
            stack.pop();
        }
    }

    return res;
}

function dailyTemperatures(temperatures){ // Pretty much a copy of https://leetcode.com/problems/daily-temperatures/solutions/1450496/Javascript-easyandclean-solution/
    let results = new Array(temperatures.length).fill(0);
    let stack = [];

    for (let iteration = 0; iteration < temperatures.length; iteration++){
        while (stack.length > 0 && temperatures[iteration] > temperatures[stack[stack.length-1]]){
            let immediateIndex = stack.pop();
            results[immediateIndex] = iteration - immediateIndex;
        }
        stack.push(iteration);
    }

    return results;
}

