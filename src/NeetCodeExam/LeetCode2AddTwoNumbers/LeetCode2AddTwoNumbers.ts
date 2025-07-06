import {ListNode} from "../Models/ListNode";

export default function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let sum = (l1?.val ?? 0) + (l2?.val ?? 0)
    let carry  = Math.floor(sum / 10)

    let head: ListNode | null = new ListNode(sum % 10);
    let node: ListNode | null = head

    l1 = l1?.next ?? null
    l2 = l2?.next ?? null

    while(l1 !== null || l2 !== null){
        sum = (l1?.val ?? 0) + (l2?.val ?? 0) + carry
        carry = Math.floor(sum / 10)
        node!.next = new ListNode(sum % 10)
        node = node?.next ?? null
        l1 = l1?.next ?? null
        l2 = l2?.next ?? null
    }

    if (carry > 0){
        node!.next = new ListNode(carry)
    }

    return head
};