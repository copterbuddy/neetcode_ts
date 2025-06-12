import findMin from "./LeetCode153FindMinimumInRotatedSortedArray"

test('LeetCode153 findMin success case 1',() => {
    let nums = [3,4,5,1,2]
    let want = 1
    let result = findMin(nums)
    expect(result).toEqual(want)
})

test('LeetCode153 findMin success case 2',() => {
    let nums = [4,5,6,7,0,1,2]
    let want = 0
    let result = findMin(nums)
    expect(result).toEqual(want)
})

test('LeetCode153 findMin success case 3',() => {
    let nums = [11,13,15,17]
    let want = 11
    let result = findMin(nums)
    expect(result).toEqual(want)
})