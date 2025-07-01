import {ListNode} from "../Models/ListNode";

export default function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    if (n <= 0) return head

    let tmp: ListNode | null = new ListNode(0, head)
    let curr: ListNode | null = tmp
    let last: ListNode | null = tmp
    for (let i = 0; i <= n; i++) {
        last = last!.next
    }

    while (last !== null) {
        last = last!.next
        curr = curr!.next
    }

    curr!.next = curr!.next!.next

    return tmp!.next
};