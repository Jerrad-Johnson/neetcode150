function searchV1(nums, target){
    if (target.length === 0) return -1;

    for (let i = 0; i < nums.length; i++){
        if (nums[i] === target) return i;
    }

    return -1;
}

//cc(search([2,5], 2));
function searchV2(nums, target){ // Passed 30 testcases.
    if (nums.length === 0) return -1;
    let limiter = 0;
    let index = Math.floor(nums.length/2);
    let remainingOnLeft = Math.floor(nums.length/2);
    if (nums.length % 2 === 0) remainingOnLeft--;
    let remainingOnRight = Math.ceil(nums.length/2);
    if (nums[0] === target) return 0;
    if (nums[1] === target) return 1;


    while (limiter !== 5000){
        limiter++
        if (nums[index] === target) return index;
        if (target > nums[index]){
            let last = index;
            index = index + Math.floor(remainingOnRight/2);
            remainingOnRight = Math.ceil(remainingOnRight/2);
            remainingOnLeft = index - last;
            if (remainingOnRight === 0) break;
        } else {
            let last = index;
            index = index - Math.ceil(remainingOnLeft/2);
            remainingOnLeft = Math.floor(remainingOnLeft/2);
            remainingOnRight = index - last;
            if (remainingOnLeft === 0) break;
        }
    }

    return -1;
}

cc(search([-1,0,3,5,9,12], 2));
function search(nums, target){
    if (nums.length === 0) return -1;
    if (nums[0] === target) return 0;
    if (nums[1] === target) return 1;
    let result = -1;
    let left = 0;
    let right = nums.length-1;
    let index = Math.floor((nums.length-1)/2);

    while (true) {
        if (target === nums[index]) { result = index; break; }
        if (target > nums[index]) {
            if (left === right) break;
            left = index;
            index = index + Math.ceil((right - left) / 2);
        } else if (target < nums[index]) {
            if (index === right) break;
            right = index;
            index = index - Math.ceil((right - left) / 2);
        }

    }

    return result;
}