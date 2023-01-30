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

//cc(search([-1,0,3,5,9,12], 2));
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

//cc(searchMatrix([[1],[3],[5]], 2));
function searchMatrix(matrix, target){
    let rightTopPointer = matrix.length-1;
    let leftTopPointer = 0;
    let topIndex = Math.floor(rightTopPointer/2);
    let matrixIsShort = false;
    if (matrix.length < 3){
        matrixIsShort = true;
        if (Array.isArray(matrix[1]) && target >= matrix[1][0] && target <= matrix[1][matrix[1].length-1]){
            topIndex = 1; // Because the default is 0, I do not need to check matrix[0].
        }
    }

    for (;;){
        if (matrixIsShort) break;
        if (rightTopPointer === topIndex || leftTopPointer === topIndex) break;
        if (matrix[topIndex][0] > target){
            rightTopPointer = topIndex;
            topIndex = topIndex + Math.floor((leftTopPointer - topIndex) /2);
        } else if (matrix[topIndex][matrix[topIndex].length-1] < target){
            leftTopPointer = topIndex;
            topIndex = topIndex + Math.ceil((rightTopPointer - topIndex) /2);
        } else {
            break;
        }
    }

    let subArray = matrix[topIndex];
    if (subArray[0] === target) return true;
    let result = false;
    let left = 0;
    let right = subArray.length-1;
    let index = Math.floor((subArray.length-1)/2);

    while (true) {
        if (target === subArray[index]) { result = true; break; }
        if (target > subArray[index]) {
            if (left === right) break;
            left = index;
            index = index + Math.ceil((right - left) / 2);
        } else if (target < subArray[index]) {
            if (index === right) break;
            right = index;
            index = index - Math.ceil((right - left) / 2);
        }
    }

    return result;
}

cc(minEatingSpeed([3,6,7,11], 8));
function minEatingSpeed(piles, h){
    let max = Math.max(...piles);
    if (h === max) return max;
    let totalBananas = piles.reduce((curr, prev) => {return curr + prev});
    let initialMinimum = Math.ceil(totalBananas / h);
    let range = [];

    for (let i = initialMinimum; i < max +1; i++){
        range.push(i);
    }

    let limiter = 0;
    let left = 0;
    let right = range.length-1;
    let index = Math.floor(right/2);
    let possibleSolutions = [];

    let result = testThisPile([3,6,7,11]);

    if (result !== -1) possibleSolutions.push(result);

    cc(result);

    function testThisPile(pile){
        let possibleSolution = -1;

        outer:
        while (true){
            if (limiter === 1) break;
            limiter++;
            let hoursSpent = 0;

            for (let i = 0; i < pile.length; i++){
                let rate = range[index];
                let limiter2 = 0;

                while (true){
                    if (hoursSpent === h) break outer;
                    if (limiter2 === 10) break;
                    limiter2++;

                    pile[i] = (pile[i] - rate);
                    hoursSpent++;

                    if (pile[pile.length-1] <= 0){
                        possibleSolution = rate;
                        break outer;
                    }

                    if (pile[i] <= 0) break;
                }
            }
        }

        return possibleSolution;
    }



}



findMedianSortedArrays([1,3], [2])
function findMedianSortedArrays(nums1, nums2){

}

