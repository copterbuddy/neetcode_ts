import search from "./LeetCode33SearchInRotatedSortedArray"

test('Test LeetCode 33 Success Case 1',() => {
    let nums = [4,5,6,7,0,1,2], target = 0
    let result = search(nums, target)
    expect(result).toBe(4)
})

test('Test LeetCode 33 Success Case 2',() => {
    let nums = [4,5,6,7,0,1,2], target = 3
    let result = search(nums, target)
    expect(result).toBe(-1)
})

test('Test LeetCode 33 Success Case 3',() => {
    let nums = [1], target = 0
    let result = search(nums, target)
    expect(result).toBe(-1)
})

test('Test LeetCode 33 Success Case 4',() => {
    let nums = [3, 1], target = 3
    let result = search(nums, target)
    expect(result).toBe(0)
})

test('Test LeetCode 33 Success Case 5',() => {
    let nums = [1, 3], target = 3
    let result = search(nums, target)
    expect(result).toBe(1)
})