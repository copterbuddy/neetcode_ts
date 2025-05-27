function searchMatrix(matrix: number[][], target: number): boolean {
    let tmp: number[] = []
    matrix.forEach(item => {
        tmp = tmp.concat(item)
    })

    let l = 0
    let r = tmp.length - 1
    while (l <= r){
        let m = Math.round((l + r) / 2)
        if(target > tmp[m]){
            l = m + 1
        }else if (target < tmp[m]){
            r = m - 1
        }
        else{
            return true
        }
    }

    return false
};

export default searchMatrix