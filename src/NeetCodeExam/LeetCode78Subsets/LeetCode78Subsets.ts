export function subsets(nums: number[]): number[][] {
    let result: number[][] = []
    
    function dfs(sub: number[], start: number): void{
        if(start <= nums.length){
            result.push([... sub])
        }

        if(start === nums.length){
            return
        }
        
        for(let i: number = start; i < nums.length; i++){
            sub.push(nums[i])
            dfs(sub, i + 1)
            sub.pop()
        }
    }

    dfs([], 0)
    return result
};