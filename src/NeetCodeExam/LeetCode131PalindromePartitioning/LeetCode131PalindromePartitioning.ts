export function partition(s: string): string[][] {
    let result: string[][] = []
    let path: string[] = []

    function dfs(i: number, j: number){
        if(j === s.length){
            if(i === j){
                result.push([... path])
            }
            return
        }

        if(isPalin(s, i, j)){
            path.push(s.substring(i, j + 1))
            dfs(j + 1, j + 1)
            path.pop()
        }
        dfs(i, j + 1)
    }
    
    dfs(0, 0)
    return result
}

const isPalin = (source: string, l: number, r: number) => {
    while(l < r){
        if(source[l] !== source[r]){
            return false
        }
        l++
        r--
    }
    return true
}