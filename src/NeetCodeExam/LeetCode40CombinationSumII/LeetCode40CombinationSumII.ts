export function combinationSum2(candidates: number[], target: number): number[][] {
    let result: number[][] = []
    candidates.sort((a, b) => a - b)
    function dfs(start: number, sub: number[], sum: number){
        if(start > candidates.length || sum < 0){
            return
        }

        if(sum === 0){
            result.push([... sub])
            return
        }

        for(let i = start; i < candidates.length; i++) {
            if(i > start && candidates[i] === candidates[i - 1]){
                continue
            }

            sub.push(candidates[i])
            dfs(i + 1, sub, sum - candidates[i])
            sub.pop()
        }
    }
    dfs(0, [], target)
    return result
};