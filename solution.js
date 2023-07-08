/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    let result = [];
    candidates.sort((a, b) => a - b);

    const backtrack = (combination, currSum, start) => {
        if (currSum === target) {
            result.push(combination);
            return;
        }
        if (currSum > target || start >= candidates.length) {
            return;
        }

        for (let i = start; i < candidates.length; i++) {
            const candidate = candidates[i];
            if (currSum + candidate > target) {
                break;
            }
            backtrack([...combination, candidate], currSum + candidate, i);
        }
    };

    backtrack([], 0, 0);
    return result;
};
