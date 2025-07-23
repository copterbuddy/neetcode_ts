import { arrayToTree } from "../Models/TreeNode"
import { goodNodes } from "./LeetCode1448CountGoodNodesInBinaryTree"

test("LeetCode1448 CountGoodNodesInBinaryTree Success Case 1",() => {
    let root = [3,1,4,3,null,1,5]
    let result = goodNodes(arrayToTree(root))
    expect(result).toBe(4)
})

test("LeetCode1448 CountGoodNodesInBinaryTree Success Case 2",() => {
    let root = [3,3,null,4,2]
    let result = goodNodes(arrayToTree(root))
    expect(result).toBe(3)
})

test("LeetCode1448 CountGoodNodesInBinaryTree Success Case 3",() => {
    let root = [1]
    let result = goodNodes(arrayToTree(root))
    expect(result).toBe(1)
})