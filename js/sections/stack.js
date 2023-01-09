function stacks(){
    cc(isValid("()[]{}"));
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
    constructor(stack) {
        this.stack = stack;
    }

    push(val){

    }

    pop(count){

    }

    top(){

    }

    getMin(){

    }
}