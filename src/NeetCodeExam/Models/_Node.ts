class _Node {
    val: number
    neighbors: _Node[]

    constructor(val?: number, neighbors?: _Node[]) {
        this.val = (val===undefined ? 0 : val)
        this.neighbors = (neighbors===undefined ? [] : neighbors)
    }
}

function buildGraph(adjList: number[][]): _Node | null {
    if (adjList.length === 0) return null;

    // สร้าง node ทุกตัวก่อน
    const nodes: _Node[] = [];
    for (let i = 0; i < adjList.length; i++) {
        nodes[i] = new _Node(i + 1); // ให้ val = 1-based
    }

    // เติม neighbors
    for (let i = 0; i < adjList.length; i++) {
        for (const neighbor of adjList[i]) {
            nodes[i].neighbors.push(nodes[neighbor - 1]); // เพราะ adjList ใช้เลข 1-based
        }
    }

    return nodes[0]; // return root (node 1)
}

function graphToAdjList(node: _Node | null): number[][] {
    if (!node) return [];

    let map = new Map<_Node, number>();
    let adj: number[][] = [];
    let queue: _Node[] = [node];
    let visited = new Set<_Node>();

    while (queue.length > 0) {
        let curr = queue.shift()!;
        if (visited.has(curr)) continue;
        visited.add(curr);

        if (!map.has(curr)) {
            map.set(curr, curr.val);
        }
        // สร้าง adjacency ของ curr
        adj[curr.val - 1] = curr.neighbors.map(n => n.val);

        for (let nei of curr.neighbors) {
            if (!visited.has(nei)) queue.push(nei);
        }
    }
    return adj;
}

export { _Node, buildGraph, graphToAdjList }