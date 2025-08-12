import { subsetsWithDup } from "./LeetCode90Subsets_II"

test("LeetCode90 subsetsWithDup",() => {
    let nums = [1,2,2]
    let result = subsetsWithDup(nums)
    expect(result).toEqual([[],[1],[1,2],[1,2,2],[2],[2,2]])
})