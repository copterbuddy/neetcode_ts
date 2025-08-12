export function subsetsWithDup(nums: number[]): number[][] {
    let result: number[][] = []
    nums.sort((a, b) => a - b)

    function dfs(start: number, sub: number[]){
        if(start > nums.length){
            return
        }

        result.push([... sub])

        for(let i = start; i < nums.length; i++){
            if(i > start && nums[i] === nums[i - 1]) {
                continue
            }
            sub.push(nums[i])
            dfs(i + 1, sub)
            sub.pop()
        }
    }

    dfs(0, [])
    return result
};