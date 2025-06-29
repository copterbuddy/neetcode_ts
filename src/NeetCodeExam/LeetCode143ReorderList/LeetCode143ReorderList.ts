import {cloneList, ListNode} from "../Models/ListNode";

/**
 Do not return anything, modify head in-place instead.
 */
export default function reorderList(head: ListNode | null): void {
    let slow = head
    let fast = head!.next
    while (fast !== null && fast!.next !== null) {
        slow = slow!.next
        fast = fast!.next!.next
    }

    let mid = slow!.next
    slow!.next = null
    let prev: ListNode | null = null
    while (mid !== null){
        let tmp = mid!.next
        mid!.next = prev
        prev = mid
        mid = tmp
    }
    let second = prev

    let first = head
    while (second !== null){
        let tmp1 = first!.next
        let tmp2 = second!.next

        first!.next = second
        second!.next = tmp1

        first = tmp1
        second = tmp2
    }
};