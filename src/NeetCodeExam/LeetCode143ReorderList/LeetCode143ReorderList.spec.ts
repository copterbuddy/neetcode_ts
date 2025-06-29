import {ListNode, arrayToListNode, listToArray} from "../Models/ListNode";
import reorderList from './LeetCode143ReorderList'

test("LeetCode 143 Success Case1",() => {
    let head = arrayToListNode([1,2,3,4])
    reorderList(head)
    expect(listToArray(head)).toEqual([1, 4, 2, 3]);
})

test("LeetCode 143 Success Case2",() => {
    let head = arrayToListNode([1,2,3,4,5])
    reorderList(head)
    expect(listToArray(head)).toEqual([1,5,2,4,3]);
})
