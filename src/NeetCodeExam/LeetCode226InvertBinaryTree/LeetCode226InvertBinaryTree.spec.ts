import invertTree from "./LeetCode226InvertBinaryTree";
import {arrayToTree, treeToArray} from "../Models/TreeNode";

test("LeetCode 226 InvertTree Success Case1",() => {
    let root = [2,1,3]
    let result = invertTree(arrayToTree(root))
    expect(treeToArray(result)).toStrictEqual([2,3,1])
})

test("LeetCode 226 InvertTree Success Case2",() => {
    let root = [4,2,7,1,3,6,9]
    let result = invertTree(arrayToTree(root))
    expect(treeToArray(result)).toStrictEqual([4,7,2,9,6,3,1])
})