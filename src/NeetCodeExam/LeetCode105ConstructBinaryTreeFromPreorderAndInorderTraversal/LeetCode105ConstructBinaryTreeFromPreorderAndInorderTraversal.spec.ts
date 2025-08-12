import { arrayToTree } from "../Models/TreeNode"
import { buildTree } from "./LeetCode105ConstructBinaryTreeFromPreorderAndInorderTraversal"

test("LeetCode105 ConstructBinaryTree Success Case 1", () => {
    let preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
    let result = buildTree(preorder, inorder)
    expect(result).toEqual(arrayToTree([3,9,20,null,null,15,7]))
})