import { arraysEqualUnordered2D } from "../Models/Array"
import { subsets } from "./LeetCode78Subsets"

test("Leetcode78 Subsets Success Case 1",() => {
    let nums = [1,2,3]
    let result = subsets(nums)
    expect(arraysEqualUnordered2D(result, [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]])).toBe(true)
})