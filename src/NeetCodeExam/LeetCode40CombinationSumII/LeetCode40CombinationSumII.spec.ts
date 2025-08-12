import { combinationSum2 } from "./LeetCode40CombinationSumII"

test.only("LeetCode40 combinationSum2 Success Case 1",() => {
    let candidates = [10,1,2,7,6,1,5], target = 8
    let result = combinationSum2(candidates, target)
    let want = [
                [1,1,6],
                [1,2,5],
                [1,7],
                [2,6]
                ]
    expect(result).toEqual(want)
})

test.only("LeetCode40 combinationSum2 Success Case 2",() => {
    let candidates = [2,5,2,1,2], target = 5
    let result = combinationSum2(candidates, target)
    let want = [
                [1,2,2],
                [5]
                ]
    expect(result).toEqual(want)
})