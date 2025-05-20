//LeetCode150GenerateParentheses.test.tsx
import generateParenthesis from './LeetCode150GenerateParentheses'

test('generateParenthesis success case 1', () => {
    let give: number = 3
    let result: string[] = generateParenthesis(give)
    let want: string[] = ["((()))","(()())","(())()","()(())","()()()"]
    expect(result).toEqual(want)
});