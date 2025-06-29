class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function arrayToListNode(arr: number[]): ListNode | null {
    if (arr.length === 0) return null;

    const head = new ListNode(arr[0]);
    let current = head;

    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }

    return head;
}

function listToArray(head: ListNode | null): number[] {
    const result: number[] = [];
    while (head) {
        result.push(head.val);
        head = head.next;
    }
    return result;
}

function cloneList(head: ListNode | null): ListNode | null {
    if (!head) return null;

    const newHead = new ListNode(head.val);
    let currOld = head.next;
    let currNew = newHead;

    while (currOld) {
        currNew.next = new ListNode(currOld.val);
        currNew = currNew.next;
        currOld = currOld.next;
    }

    return newHead;
}

export { ListNode, arrayToListNode, listToArray, cloneList};