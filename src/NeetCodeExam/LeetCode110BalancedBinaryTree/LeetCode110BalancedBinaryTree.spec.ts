import { arrayToTree } from "../Models/TreeNode"
import { isBalanced, isBalanced_Heap } from "./LeetCode110BalancedBinaryTree"

test("LeetCode110BalancedBinaryTree Success Case 1",() => {
    let root = [3,9,20,null,null,15,7]
    let reuslt = isBalanced(arrayToTree(root))
    expect(reuslt).toBe(true)
})

test("LeetCode110BalancedBinaryTree_Heap Success Case 1",() => {
    let root = [3,9,20,null,null,15,7]
    let reuslt = isBalanced_Heap(arrayToTree(root))
    expect(reuslt).toBe(true)
})