import removeNthFromEnd from "./LeetCode19RemoveNthNodeFromEndofList";
import {arrayToListNode, listToArray} from "../Models/ListNode";

test("LeetCode 19 Success Case 1",() => {
    let head = [1,2,3,4,5]
    let n = 2
    let result = removeNthFromEnd(arrayToListNode(head), n)
    expect(listToArray(result)).toEqual([1,2,3,5])
})

test("LeetCode 19 Success Case 2",() => {
    let head = [1]
    let n = 1
    let result = removeNthFromEnd(arrayToListNode(head), n)
    expect(listToArray(result)).toEqual([])
})

test("LeetCode 19 Success Case 3",() => {
    let head = [1,2]
    let n = 1
    let result = removeNthFromEnd(arrayToListNode(head), n)
    expect(listToArray(result)).toEqual([1])
})