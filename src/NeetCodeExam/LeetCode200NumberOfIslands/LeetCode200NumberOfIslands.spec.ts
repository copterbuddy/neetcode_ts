import { numIslands_dfs } from "./LeetCode200NumberOfIslands"

test("LeetCode200 numIslands Success Case 1",() => {
    let grid = [
                ["1","1","1","1","0"],
                ["1","1","0","1","0"],
                ["1","1","0","0","0"],
                ["0","0","0","0","0"]
                ]
    let result = numIslands_dfs(grid)
    expect(result).toBe(1)
})

test("LeetCode200 numIslands Success Case 2",() => {
    let grid = [
                ["1","1","0","0","0"],
                ["1","1","0","0","0"],
                ["0","0","1","0","0"],
                ["0","0","0","1","1"]
                ]
    let result = numIslands_dfs(grid)
    expect(result).toBe(3)
})