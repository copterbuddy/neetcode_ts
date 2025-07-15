

export class LRUCache {
    private readonly capacity: number
    private readonly cache: Map<number, Node>
    private readonly left: Node | null
    private readonly right: Node | null

    constructor(capacity: number) {
        this.capacity = capacity
        this.cache = new Map<number, Node>()
        this.left = new Node(0,0)
        this.right = new Node(0,0)
        this.left.next = this.right
        this.right.prev = this.left
    }

    private remove(node: Node) {
        let prev = node.prev
        let next = node.next
        prev!.next = next
        next!.prev = prev
    }

    private insert(node: Node) {
        let prev = this.right!.prev
        prev!.next = node
        node.prev = prev
        this.right!.prev = node
        node.next = this.right

    }

    get(key: number): number {
        if(!this.cache.has(key)) {
            return -1
        }
        let node = this.cache.get(key)!
        this.remove(node)
        this.insert(node)
        return node.val
    }

    put(key: number, value: number): void {
        let node = this.cache.get(key) ?? null
        if(this.cache.has(key)) {
            this.cache.delete(key)
            this.remove(node!)
        }
        else if(this.cache.size === this.capacity){
            let lru = this.left!.next!
            this.cache.delete(lru!.key)
            this.remove(lru!)
        }
        let newNode = new Node(key, value)
        this.insert(newNode)
        this.cache.set(key, newNode)
    }
}

export class Node {
    public key : number
    public val: number
    public prev: Node | null
    public next: Node | null

    constructor(key: number, val: number) {
        this.key = key;
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}