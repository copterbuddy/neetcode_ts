export class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

export function arrayToTree(arr: (number | null)[]): TreeNode | null {
    if (!arr.length || arr[0] === null) return null;

    const root = new TreeNode(arr[0]);
    const queue: (TreeNode | null)[] = [root];
    let i = 1;

    while (queue.length > 0 && i < arr.length) {
        const current = queue.shift() ?? null

        // ใส่แม้กระทั่ง current เป็น null เพื่อคงตำแหน่งใน tree
        if (current !== null) {
            if (i < arr.length) {
                const leftVal = arr[i];
                current.left = leftVal !== null ? new TreeNode(leftVal) : null;
                queue.push(current.left);
                i++;
            }

            if (i < arr.length) {
                const rightVal = arr[i];
                current.right = rightVal !== null ? new TreeNode(rightVal) : null;
                queue.push(current.right);
                i++;
            }
        }
    }

    return root;
}

//arrayToTree([1, 2, 3, null, 4, 5, null])
export function treeToArray(root: TreeNode | null): (number | null)[] {
    const result: (number | null)[] = [];
    const queue: (TreeNode | null)[] = [root];

    while (queue.length) {
        const node = queue.shift();
        if (node) {
            result.push(node.val);
            queue.push(node.left);
            queue.push(node.right);
        } else {
            result.push(null);
        }
    }

    // ตัด null ด้านท้ายออก
    while (result[result.length - 1] === null) result.pop();

    return result;
}