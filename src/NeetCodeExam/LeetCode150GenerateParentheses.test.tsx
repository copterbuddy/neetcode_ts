//LeetCode150GenerateParentheses.test.tsx
import LeetCode150GenerateParentheses from './LeetCode150GenerateParentheses'

test('GenerateParentheses success case 1', () => {
    let give: number = 3
    let result: string[] = LeetCode150GenerateParentheses(give)
    let want: string[] = ["((()))","(()())","(())()","()(())","()()()"]
    expect(result).toEqual(want)
});