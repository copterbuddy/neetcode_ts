import {diameterOfBinaryTree, diameterOfBinaryTree_Heap} from "./LeetCode543DiameterOfBinaryTree";
import {arrayToTree} from "../Models/TreeNode";

test("LeetCode543 diameterOfBinaryTree Success Case 1",() => {
    let root = [1,2,3,4,5]
    let result = diameterOfBinaryTree(arrayToTree(root))
    expect(result).toBe(3)
})

test("LeetCode543 diameterOfBinaryTree_Heap Success Case 1",() => {
    let root = [1,2,3,4,5]
    let result = diameterOfBinaryTree_Heap(arrayToTree(root))
    expect(result).toBe(3)
})