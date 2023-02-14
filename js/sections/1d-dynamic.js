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

function longestPalindrome(s){ // Mostly works, but doesn't get all even-length cases. Next solution does.
    let arr = s.split("");
    let best = [];

    for (let i = 0; i < arr.length; i++){
        let curr = [arr[i]];
        let l = i-1;
        let r = i+1;
        while (arr[l] === arr[r] && arr[l] !== undefined && arr[r] !== undefined){
            if (arr[l] === arr[r]){
                curr.push(arr[r]);
                curr.unshift(arr[l]);
            }
            l--;
            r++;
        }
        if (curr.length > best.length) best = curr;
    }

    if (best.length < 3){
        for (let i = 1; i < arr.length; i++){
            if (arr[i] === arr[i-1]){
                best = [arr[i-1], arr[i]];
            }
        }
    }

    return best.join("");
}

function countSubstrings(s){
    let arr = s.split("");
    let results = [];

    for (let i = 0; i < arr.length; i++){
        let l = i,
            r = i;

        while (arr[l] === arr[r] && arr[l] !== undefined && arr[r] !== undefined){
            results.push(arr.slice(l, r+1).join(""));
            l--; r++;
        }

        l = i;
        r = i+1;

        while (arr[l] === arr[r] && arr[l] !== undefined && arr[r] !== undefined){
            results.push(arr.slice(l, r+1).join(""));
            l--; r++;
        }
    }

    return results.length;
}

function decodeWays(nums){
    let arr = String(nums).split("");
    arr = arr.map((e) => Number(e));
    let combinations = 0;

    for (let i = 0; i < arr.length; i++){
        if (arr[i] !== 0) {
            combinations++;
        } if ((arr[i] === 1) || (arr[i] === 2) && (i < arr.length)){
            combinations++;
        }
    }

    return combinations;
}

//cc(climbStairs(12))
//cc(minCostClimbingStairs([1,100,1,1,1,100,1,1,100,1]))
//cc(minCostClimbingStairs([10,15,20]))
//cc(longestPalindrome("bbd"));
//cc(countSubstrings("aaa"));

cc(decodeWays(1221))
