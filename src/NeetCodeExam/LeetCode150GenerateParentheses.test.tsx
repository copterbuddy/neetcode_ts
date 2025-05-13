//LeetCode150GenerateParentheses.test.tsx
import LeetCode150GenerateParentheses from './LeetCode150GenerateParentheses'

test.only('GenerateParentheses success case 1', () => {
    let give: number = 3
    let result: string[] = LeetCode150GenerateParentheses(give)
    let want: string[] = ["((()))","(()())","(())()","()(())","()()()"]
    console.log("i want", JSON.stringify(want), "but i got", JSON.stringify(result))
    expect(result).toEqual(want)
});