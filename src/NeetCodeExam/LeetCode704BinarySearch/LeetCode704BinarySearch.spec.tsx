import search from "./LeetCode704BinarySearch";

test('search case found', () => {
    let nums: number[] = [-1,0,3,5,9,12]
    let target: number = 9
    let result: number = search(nums,target)
    let want: number = 4
    expect(result).toEqual(want)
});

test('search case not found', () => {
    let nums: number[] = [-1,0,3,5,9,12]
    let target: number = 2
    let result: number = search(nums,target)
    let want: number = -1
    expect(result).toEqual(want)
});