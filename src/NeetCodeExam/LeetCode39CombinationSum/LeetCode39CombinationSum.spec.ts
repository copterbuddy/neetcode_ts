import { combinationSum } from "./LeetCode39CombinationSum"

test.only("LeetCode39 combinationSum Success Case 1",() => {
    let candidates = [2,3,6,7], target = 7
    let result = combinationSum(candidates, target)
    expect(result).toEqual([[2,2,3],[7]])
})

test.only("LeetCode39 combinationSum Success Case 2",() => {
    let candidates = [8,7,4,3], target = 11
    let result = combinationSum(candidates, target)
    expect(result).toEqual([[8,3],[7,4],[4,4,3]])
})