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

cc(climbStairs(12))