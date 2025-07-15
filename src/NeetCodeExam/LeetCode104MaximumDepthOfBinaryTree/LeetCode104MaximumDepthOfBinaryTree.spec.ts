import { arrayToTree } from "../Models/TreeNode"
import { maxDepth } from "./LeetCode104MaximumDepthOfBinaryTree"

test("LeetCode104 maxDepth Success Case 1",() => {
    let root = [3,9,20,null,null,15,7]
    let result = maxDepth(arrayToTree(root))
    expect(result).toEqual(3)
})