import { arrayToTree } from "../Models/TreeNode"
import { isValidBST } from "./LeetCode98ValidateBinarySearchTree"

test.only("LeetCode98 Validate BST Success Case 1",() => {
    let root = [2,1,3]
    let result = isValidBST(arrayToTree(root))
    expect(result).toBe(true)
})

test.only("LeetCode98 Validate BST Failed Case 1",() => {
    let root = [5,1,4,null,null,3,6]
    let result = isValidBST(arrayToTree(root))
    expect(result).toBe(false)
})

test.only("LeetCode98 Validate BST Failed Case 2",() => {
    let root = [5,4,6,null,null,3,7]
    let result = isValidBST(arrayToTree(root))
    expect(result).toBe(false)
})

test.only("LeetCode98 Validate BST Failed Case 3",() => {
    let root = [3,1,5,0,2,4,6,null,null,null,3]
    /*
            3
        1           5
    0       2   4       6
n     n  n    3 
     */
    let result = isValidBST(arrayToTree(root))
    expect(result).toBe(false)
})