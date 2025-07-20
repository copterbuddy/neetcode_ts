import { TreeNode } from "../Models/TreeNode";

export function isBalanced(root: TreeNode | null): boolean {
    let result = dfs(root, [0, false])
    return result[1]
};

function dfs(root: TreeNode | null, res: [number, boolean]): [number, boolean] {
    if(!root){
        return [0, true]
    }

    let left = dfs(root.left, res)
    let right = dfs(root.right, res)

    let height = 1 + Math.max(left[0], right[0])
    let isBalanced = (left[0] - right[0] >= -1) && (left[0] - right[0] <= 1) && left[1] && right[1]

    return [height, isBalanced]
}

export function isBalanced_Heap(root: TreeNode | null): boolean {
    if(!root){
        return true
    }

    let stack = [root]
    let dict: Map<TreeNode, [h: number, b: boolean]> = new Map()

    while(stack.length > 0){
        let node = stack.at(-1)!
        if(node.left && !dict.has(node.left)){
            stack.push(node.left)
        }
        else if(node.right && !dict.has(node.right)){
            stack.push(node.right)
        }
        else {
            node = stack.pop()!

            let [leftHeight , leftBalanced] = dict.get(node.left!)! ?? [0, true]
            let [rigthHeight , rightBalanced] = dict.get(node.right!)! ?? [0, true]
            let height = 1 + Math.max(leftHeight, rigthHeight)
            let isBalanced = Math.abs(leftHeight - rigthHeight) <= 1 && leftBalanced && rightBalanced

            dict.set(node, [height, isBalanced])
        }
    }
    return dict.get(root!)![1]
};