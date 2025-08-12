import { permute } from "./LeetCode46Permutations"

test.only("LeetCode46Permutations Success Case 1",() => {
    let nums = [1,2,3]
    let result = permute(nums)
    expect(result).toEqual([[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]])
})