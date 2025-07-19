import {TreeNode} from "../Models/TreeNode";

export function diameterOfBinaryTree(root: TreeNode | null): number {
    let res = [0]
    dfs(root, res)
    return res[0]
}

function dfs(root: TreeNode | null, res: number[]): number{
    if(!root) {
        return 0
    }
    let left = dfs(root.left, res)
    let right = dfs(root.right, res)
    res[0] = Math.max(res[0], left + right)

    return 1 + Math.max(left, right)
}

export function diameterOfBinaryTree_Heap(root: TreeNode | null): number {
    if(!root){
        return 0
    }
    
    let stack = [root]
    let dict: Map<TreeNode, [number, number]> = new Map()

    while(stack.length > 0){
        let node: TreeNode = stack.at(-1)!
        if(node!.left !== null && !dict.has(node!.left)){
            stack.push(node!.left)
        }
        else if(node!.right !== null && !dict.has(node!.right)){
            stack.push(node!.right)
        }
        else {
            node = stack.pop()!

            let [leftHeight, leftDiametor] = dict.get(node.left!) ?? [0, 0]
            let [rightHeight, rightDiametor] = dict.get(node.right!) ?? [0, 0]
            let height = 1 + Math.max(leftHeight, rightHeight)
            let diametor = Math.max(height, leftDiametor, rightDiametor)
            dict.set(node, [height, diametor])
        }
    }

    return dict.get(root)![1]
}