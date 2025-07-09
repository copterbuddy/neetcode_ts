import findDuplicate, {findDuplicate2} from "./LeetCode287FindTheDuplicateNumber";

test("LeetCode287FindTheDuplicateNumber SuccessCase 1", () => {
    let nums = [1,3,4,2,2]
    let result = findDuplicate2(nums)
    expect(result).toBe(2)
})

test("LeetCode287FindTheDuplicateNumber SuccessCase 2", () => {
    let nums = [3,1,3,4,2]
    let result = findDuplicate(nums)
    expect(result).toBe(3)
})

test("LeetCode287FindTheDuplicateNumber SuccessCase 3", () => {
    let nums = [3,3,3,3,3]
    let result = findDuplicate(nums)
    expect(result).toBe(3)
})