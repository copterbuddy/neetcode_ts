export function combinationSum(candidates: number[], target: number): number[][] {
    let result: number[][] = []

    function dfs(sub: number[], start: number, sum: number): void{
        if(sum > target){
            return
        }

        if(sum === target){
            result.push([... sub])
            return
        }

        for(let i = start; i < candidates.length; i++){
            let val = candidates[i]
            sub.push(val)
            dfs(sub, i, sum + val)
            sub.pop()
        }
    }

    dfs([], 0, 0)
    return result
};