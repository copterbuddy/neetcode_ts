import { arrayToTree } from "../Models/TreeNode"
import { rightSideView } from "./LeetCode199BinaryTreeRightSideView"

test("LeetCode199 rightSideView Success Case 1",() => {
    let root = [1,2,3,null,5,null,4]
    let result = rightSideView(arrayToTree(root))
    expect(result).toEqual([1,3,4])
})