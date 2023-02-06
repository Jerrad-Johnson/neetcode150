function singleNumber(nums){
    let res = 0;

    for (let entry of nums){
        res = entry ^ res;
    }

    return res;
}

function hammingWeight(num){
    let res = 0;

    while (num){
        res += num % 2;
        num = num >> 1;
    }

    return res;
}

cc(hammingWeight(0000000011001111));