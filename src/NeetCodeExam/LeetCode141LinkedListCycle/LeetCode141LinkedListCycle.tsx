//LeetCode141LinkedListCycle.tsx

function hasCycle(head: ListNode | null): boolean {
    let curr: ListNode | null = head
    const dict = new Map<ListNode | null, 0>();

    if(curr === null){
        return false
    }

    while (curr?.next !== null){
        if(curr != null && !dict.has(curr.next)){
            dict.set(curr, 0)
            curr = curr?.next
            continue
        }

        return true
    }

    return false
};

export default hasCycle