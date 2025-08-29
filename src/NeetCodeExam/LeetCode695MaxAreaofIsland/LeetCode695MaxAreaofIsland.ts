export function maxAreaOfIsland(grid: number[][]): number {
    let ROW = grid.length
    let COL = grid[0].length
    let visited: Set<[number, number]> = new Set()
    let direction = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
    ]
    let res = 0

    function dfs(r: number, c: number): number{
        if(r < 0 || c < 0 || r >= ROW || c >= COL || visited.has([r, c]) || grid[r][c] === 0){
            return 0
        }

        visited.add([r, c])
        grid[r][c] = 0
        let count: number = 1
        for(let [dr, dc] of direction){
            count += dfs(r + dr, c + dc)
        }

        return count
    }

    for(let r = 0; r < ROW; r ++){
        for(let c = 0; c < COL; c++){
            if(grid[r][c] === 1 && !visited.has([r, c])){
                res = Math.max(dfs(r, c), res)
            }
        }
    }

    return res
};