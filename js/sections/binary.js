function search(nums, target){
    if (target.length === 0) return -1;

    for (let i = 0; i < nums.length; i++){
        if (nums[i] === target) return i;
    }

    return -1;
}