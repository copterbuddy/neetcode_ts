//LeetCode141LinkedListCycle.spec.tsx
import hasCycle from "./LeetCode141LinkedListCycle";
import ListNode from "./ListNode";

test('LeetCode141LinkedListCycle success case 1', () => {
    let node0: ListNode = { val: 3, next: null };
    let node1: ListNode = { val: 2, next: null };
    let node2: ListNode = { val: 0, next: null };
    let node3: ListNode = { val: 4, next: null };

    node0.next = node1;
    node1.next = node2;
    node2.next = node3;
    node3.next = node1;

    let result: boolean = hasCycle(node0)
    let want: boolean = true
    expect(result).toEqual(want)
});

test('LeetCode141LinkedListCycle success case 2', () => {
    let result: boolean = hasCycle(null)
    let want: boolean = false
    expect(result).toEqual(want)
});