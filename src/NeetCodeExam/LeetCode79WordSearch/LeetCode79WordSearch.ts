export function exist(board: string[][], word: string): boolean {
    let ROWS = board.length
    let COLS = board[0].length
    let path: Set<string> = new Set()

    function dfs(r: number,c: number): boolean{
        //validate currect words
        if(path.size === word.length){
            return true
        }

        //validate old path
        if(path.has(`${r},${c}`)){
            return false
        }

        //validate position
        if(r < 0 || c < 0 || r >= ROWS || c >= COLS){
            return false
        }

        //validate currect character
        if(board[r][c] !== word[path.size]){
            return false
        }

        path.add(`${r},${c}`)
        let result = 
                        dfs(r + 1, c) ||
                        dfs(r - 1, c) ||
                        dfs(r, c + 1) ||
                        dfs(r, c - 1)
        if(!result){
            path.delete(`${r},${c}`)
        }
        return result
    }

    for(let r = 0; r < ROWS; r ++){
        for(let c = 0; c < COLS; c++){
            if(dfs(r, c)){
                return true
            }
        }
    }

    return false
};


