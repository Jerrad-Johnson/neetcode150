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
/*function search(nums, target){
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
}*/

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

//cc(minEatingSpeed([312884470], 312884469)); // Partially works, but Neetcode led me astray and I don't want to recreate it. Uses too much memory.
function minEatingSpeed(piles, h){
    if (piles.length === 1)return Math.ceil(piles[0] / h);
    let max = Math.max(...piles);
    if (h === max || h === piles.length) return max;
    let totalBananas = piles.reduce((curr, prev) => {return curr + prev});
    let initialMinimum = Math.ceil(totalBananas / h);
    let range = [];

    for (let i = initialMinimum; i < max +1; i++){
        range.push(i);
    }

    let left = 0;
    let right = range.length-1;
    let index = Math.floor(right/2);
    let possibleSolutions = [];


    while (true) {
        let result = testThisRate(piles);

        if (result === -1){
            if (left === right) break;
            left = index;
            index = index + Math.ceil((right - left) / 2);
        } else {
            possibleSolutions.push(result);
            if (index === right) break;
            right = index;
            index = index - Math.ceil((right - left) / 2);
        }
    }

    function testThisRate(pile){
        let possibleSolution = -1;
        let hoursSpent = 0;
        let pileCopy = [...pile];

        outer:
        for (let i = 0; i < pile.length; i++){
            let rate = range[index];

            while (true){
                if (hoursSpent === h) break outer;
                pileCopy[i] = (pileCopy[i] - rate);
                hoursSpent++;

                if (pileCopy[pileCopy.length-1] <= 0){
                    possibleSolution = rate;
                    break outer;
                }

                if (pileCopy[i] <= 0) break;
            }
        }
        return possibleSolution;
    }

    return Math.min(...possibleSolutions);
}

//cc(findMin([11,13,15,17]));
function findMin(nums){
    let left = 0;
    let right = nums.length-1;
    let index = Math.ceil((right - left) /2);
    let lastR = -1;
    let lastL = -1;

    for (let limiter = 0; limiter < 50; limiter++){
        if (nums[left] > nums[index]){
            right = index;
            index = Math.floor(index - ((index - left) / 2));
            if (left === index){ lastL = left, lastR = right; break; }
        } else if (nums[right] < nums[index]){
            left = index;
            index = Math.ceil(index + ((right - index) / 2));
            if (right === index){ lastL = left, lastR = right; break; }
        } else {
            return nums[0];
        }
    }

    return nums[lastR];
}

cc(search([4,5,6,7,0,1,2], 0));
function search(nums, target){
    let left = 0;
    let right = nums.length-1;
    let index = Math.ceil((right - left) /2);
    let lastR = -1;
    let lastL = -1;

    for (let limiter = 0; limiter < 50; limiter++){
        if (nums[left] > nums[index]){
            right = index;
            index = Math.floor(index - ((index - left) / 2));
            if (left === index){ lastL = left, lastR = right; break; }
        } else if (nums[right] < nums[index]){
            left = index;
            index = Math.ceil(index + ((right - index) / 2));
            if (right === index){ lastL = left, lastR = right; break; }
        } else {
            lastR = 0;
        }
    }

    let limiter = 40;
    let result;
    let offset = lastR - nums.length;
    left = convertedPosition("initialL");
    right = convertedPosition("initialR");
    index = Math.floor(Math.abs(-left + right));


    let indexOffset = 0;
    if (nums.length % 2 !== 0) indexOffset = 1;
    index = Math.ceil((indexOffset + right - left) /2) + offset;

    while (true) {
        if (limiter === 50) break;
        limiter++;

        if (target === nums[index]) { result = index; break; }
        if (target > nums[index]) {
            if (left === right) break;
            left = index;
            index = convertedPosition("l");
        } else if (target < nums[index]) {
            if (index === right) break;
            right = index;
            cc(index);
            index = convertedPosition("r");
            cc(index);
            // javascript doesn't reverse-loop search for array values when using a negative index.
        }
    }

    function convertedPosition(direction){
        switch (direction){
            case "r":
                let distance = Math.abs(index - left);
                let privateIndex = index - Math.ceil(distance);
                if (privateIndex < 0) return nums.length-1+privateIndex;
                break;
            case "l":
                break;
            case "initialL":
                let tempL = offset;
                if (tempL < 0) tempL += nums.length;
                return tempL;
            case "initialR":
                let tempR = offset;
                if (tempR < 0){
                    tempR += nums.length-1
                } else {
                    tempR += -1;
                }
                return tempR;
        }
    }

    return result;
}



findMedianSortedArrays([1,3], [2])
function findMedianSortedArrays(nums1, nums2){

}

