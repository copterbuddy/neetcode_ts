import { arrayToTree } from "../Models/TreeNode"
import { levelOrder } from "./LeetCode102BinaryTreeLevelOrderTraversala"

test.only("LeetoCode102 Binary Tree Level Order Traversal Success Case1",() => {
    let root = [3,9,20,null,null,15,7]
    let result = levelOrder(arrayToTree(root))
    expect(result).toEqual([[3],[9,20],[15,7]])
})