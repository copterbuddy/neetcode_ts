//LeetCode150GenerateParentheses.tsx
function generateParenthesis(n: number): string[] {
    let result: string[] = []

    function dfs(current: string, open: number,close: number): void {
        if(current.length === (n * 2)){
            result.push(current)
            return
        }

        if(open < n){
            dfs(current + "(",open + 1, close)
        }

        if(close < open){
            dfs(current + ")", open, close + 1)
        }
    }
    dfs("",0,0)
    return result
};

export default generateParenthesis