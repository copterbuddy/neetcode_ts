import { arrayToTree } from "../Models/TreeNode"
import { isSameTree } from "./LeetCode100SameTree"

test("LeetCode100. Same Tree Success Case 1",() => {
    let p = [1,2,3], q = [1,2,3]
    let result = isSameTree(arrayToTree(p), arrayToTree(q))
    expect(result).toBe(true)
})

test("LeetCode100. Same Tree Success Case 2",() => {
    let p = [1], q: number[] = []
    let result = isSameTree(arrayToTree(p), arrayToTree(q))
    expect(result).toBe(false)
})

test("LeetCode100. Same Tree Failed Case 1",() => {
    let p = [1,2], q = [1,null,2]
    let result = isSameTree(arrayToTree(p), arrayToTree(q))
    expect(result).toBe(false)
})

test("LeetCode100. Same Tree Failed Case 2",() => {
    let p = [1,2,1], q = [1,1,2]
    let result = isSameTree(arrayToTree(p), arrayToTree(q))
    expect(result).toBe(false)
})