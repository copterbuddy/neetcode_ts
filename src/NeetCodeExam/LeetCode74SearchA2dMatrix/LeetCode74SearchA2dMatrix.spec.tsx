import searchMatrix from "./LeetCode74SearchA2dMatrix";

test('Search2dMatrix',() => {
    let matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]]
    let target = 13 
    let result: boolean = searchMatrix(matrix, target);
    expect(result).toBe(false)

})