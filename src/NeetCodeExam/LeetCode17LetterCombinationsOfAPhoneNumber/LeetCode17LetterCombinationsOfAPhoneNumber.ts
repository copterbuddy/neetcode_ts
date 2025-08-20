export function letterCombinations(digits: string): string[] {
    let res: string[] = []
    if (digits.length === 0) return res;
    const digitToChar: Map<string, string> = new Map([
        ["2", 'abc'],
        ["3", 'def'],
        ["4", 'ghi'],
        ["5", 'jkl'],
        ["6", 'mno'],
        ["7", 'qprs'],
        ["8", 'tuv'],
        ["9", 'wxyz'],
    ])

    function bt(idx: number, curr: string){
        if(idx == digits.length){
            res.push(curr)
            return
        }

        let n = digitToChar.get(digits[idx])!
        for(let i of n){
            bt(idx + 1, curr + i)
        }
    }

    bt(0, '')
    return res
}