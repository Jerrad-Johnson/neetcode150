// From https://medium.com/@alexanderpavlov_18884/javascript-algorithms-backtracking-222cde11842c
function subsets(nums) {
    let combinations = [];

    function backtrack(nums, path){
        combinations.push([...path]);
        for (var i = 0; i < nums.length; i++){
            path.push(nums[i]);
            backtrack(nums.slice(i + 1), path);
            path.pop();
        }
    }
    backtrack(nums, []);
    return combinations;
}

function combinationSum(){
    let combinations = [];
    let sums = [];

    function backtrack(nums, path){
        combinations.push([...path]);
        if (path.reduce((a, b) => a + b) === target) sums.push([...path]);
        for (var i = 0; i < nums.length; i++){
            path.push(nums[i]);
            backtrack(nums.slice(i + 1), path);
            path.pop();
        }
    }
    backtrack(nums, []);
    return combinations;
}

//cc(subsets([1,5,2]));