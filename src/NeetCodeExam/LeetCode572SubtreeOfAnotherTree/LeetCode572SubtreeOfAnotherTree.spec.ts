import { arrayToTree } from "../Models/TreeNode"
import { isSubtree } from "./LeetCode572SubtreeOfAnotherTree"

test("LeetCode572 isSubtree Success Case 1",() => { 
    let root = [3,4,5,1,2,null,null]
    let subRoot = [4,1,2]
    let result = isSubtree(arrayToTree(root), arrayToTree(subRoot))
    expect(result).toBe(true)
})