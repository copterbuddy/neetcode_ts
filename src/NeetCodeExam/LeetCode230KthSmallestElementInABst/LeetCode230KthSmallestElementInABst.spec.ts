import { arrayToTree } from "../Models/TreeNode"
import { kthSmallest } from "./LeetCode230KthSmallestElementInABst"

test("LeetCode 230 KthSmallestElementInABst Success Case 1",() => {
    let root = [3,1,4,null,2], k = 1
    let result = kthSmallest(arrayToTree(root), k)
    expect(result).toBe(1)
})

test("LeetCode 230 KthSmallestElementInABst Success Case 2",() => {
    let root = [1,null,2], k = 2
    let result = kthSmallest(arrayToTree(root), k)
    expect(result).toBe(2)
})

test("LeetCode 230 KthSmallestElementInABst Failed Case 1",() => {
    let root = [5,3,6,2,4,null,null,1], k = 3
    let result = kthSmallest(arrayToTree(root), k)
    expect(result).toBe(3)
})