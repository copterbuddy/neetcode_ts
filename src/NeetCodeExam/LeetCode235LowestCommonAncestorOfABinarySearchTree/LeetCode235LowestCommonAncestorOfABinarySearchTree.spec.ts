import { arrayToTree, TreeNode } from "../Models/TreeNode"
import { lowestCommonAncestor } from "./LeetCode235LowestCommonAncestorOfABinarySearchTree"

test("LeetCode235. Lowest Common Ancestor of a Binary Search Tree",() => {
    let root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
    let result = lowestCommonAncestor(arrayToTree(root), new TreeNode(p), new TreeNode(q))
    expect(result?.val).toEqual(6)
})