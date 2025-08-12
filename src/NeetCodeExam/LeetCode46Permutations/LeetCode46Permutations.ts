export function permute(nums: number[]): number[][] {
    let result: number[][] = []
    let used: Map<number, boolean> = new Map()
    nums.forEach(v => {
        used.set(v, false)
    })

    function dfs(start: number, sub: number[]){
        if(sub.length === nums.length){
            result.push([... sub])
            return
        }
        for(let i = start; i < nums.length; i++){
            if(used.get(nums[i])){
                continue
            }

            used.set(nums[i], true)
            sub.push(nums[i])
            dfs(start, sub)
            sub.pop()
            used.set(nums[i], false)
        }
    }

    dfs(0, [])
    return result;
};
