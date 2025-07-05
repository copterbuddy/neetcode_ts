import { _Node } from "../Models/_Node";

export default function copyRandomList(head: _Node | null): _Node | null {
    if (!head) return null;

    let dict: Map<_Node, _Node | null> = new Map();
    let cur: _Node | null = head
    while (cur) {
        dict.set(cur,new _Node(cur.val));
        cur = cur.next;
    }

    cur = head;
    while (cur) {
        let node: _Node | null = dict.get(cur)!
        node!.next = cur.next ? dict.get(cur.next)! : null;
        node!.random = cur.random ? dict.get(cur!.random)! : null;
        cur = cur.next;
    }

    return dict.get(head!)!
};