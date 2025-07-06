import addTwoNumbers from "./LeetCode2AddTwoNumbers";
import {arrayToListNode, listToArray} from "../Models/ListNode";

test("LeetCode 2 Add two numbers", () => {
    let l1 = [2,4,3], l2 = [5,6,4]
    let result = addTwoNumbers(arrayToListNode(l1), arrayToListNode(l2))
    expect(listToArray(result)).toEqual([7,0,8])
})