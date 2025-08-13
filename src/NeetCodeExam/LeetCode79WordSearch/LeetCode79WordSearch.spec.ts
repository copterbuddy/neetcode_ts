import { exist } from "./LeetCode79WordSearch"

test("LeetCode79 Word Search Success Case 1",() => {
    let board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
    let result = exist(board, word)
    expect(result).toBe(true)
})

test("LeetCode79 Word Search Success Case 2",() => {
    let board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
    let result = exist(board, word)
    expect(result).toBe(true)
})

test("LeetCode79 Word Search Failed Case 1",() => {
    let board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
    let result = exist(board, word)
    expect(result).toBe(false)
})