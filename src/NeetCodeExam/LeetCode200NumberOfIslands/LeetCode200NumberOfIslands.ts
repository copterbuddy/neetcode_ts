export function numIslands_dfs(grid: string[][]): number {
    if(!grid) {
        return 0
    }

    let ROWS = grid.length
    let COLS = grid[0].length
    let result = 0;
    let direction: number[][] = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1]
    ]

    function dfs(r: number, c: number){
        if(r < 0 || c < 0 || r >= ROWS || c >= COLS || grid[r][c] === '0'){
            return
        }

        grid[r][c] = '0'
        for(let [dr, dc] of direction){
            dfs(r + dr, c + dc)
        }
    }

    for(let r = 0; r < ROWS; r++){
        for(let c = 0; c < COLS; c++){
            if(grid[r][c] === '1'){
                dfs(r, c)
                result++
            }
        }
    }
    
    return result
};