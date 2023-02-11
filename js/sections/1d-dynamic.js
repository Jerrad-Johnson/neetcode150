function climbStairs(n){
    let curr = 1,
        last = 1;

    for (let i = 0; i < n-1; i++){
        temp = curr;
        curr = curr + last;
        last = temp;
    }

    return curr;
}

function minCostClimbingStairs(arr){ // Basically works, but I slightly misunderstood the requirement. It *should* also count the last step.
    let min = {min: Number.POSITIVE_INFINITY};
    let dp = {};

    recursion(0);

    function recursion(i, total = 0){
        if (dp[`i${i}t${total}`] === 1) return;
        dp[`i${i}t${total}`] = 1;
        if (i !== arr.length-1) total = total + arr[i];
        if (i === arr.length-1 && total < min.min) {min.min = total; cc("IRAN")};

        if (i < arr.length){
            recursion(i+1, total);
            recursion(i+2, total);
        }
    }

    return min;
}

//cc(climbStairs(12))
//cc(minCostClimbingStairs([1,100,1,1,1,100,1,1,100,1]))
//cc(minCostClimbingStairs([10,15,20]))

