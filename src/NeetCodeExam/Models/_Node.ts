class _Node {
    val: number
    next: _Node | null
    random: _Node | null
    constructor(val?: number, next?: _Node, random?: _Node) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
        this.random = (random===undefined ? null : random)
    }
}

function arrayToListNode(arr: number[]): _Node | null {
    if (arr.length === 0) return null;

    const head = new _Node(arr[0]);
    let current = head;

    for (let i = 1; i < arr.length; i++) {
        current.next = new _Node(arr[i]);
        current = current.next;
    }

    return head;
}

function listToArray(head: _Node | null): number[] {
    const result: number[] = [];
    while (head) {
        result.push(head.val);
        head = head.next;
    }
    return result;
}

function cloneList(head: _Node | null): _Node | null {
    if (!head) return null;

    const newHead = new _Node(head.val);
    let currOld = head.next;
    let currNew = newHead;

    while (currOld) {
        currNew.next = new _Node(currOld.val);
        currNew = currNew.next;
        currOld = currOld.next;
    }

    return newHead;
}

export { _Node, arrayToListNode, listToArray, cloneList }