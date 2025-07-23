import { TreeNode } from "../Models/TreeNode";

export function goodNodes(root: TreeNode | null): number {
    if(!root){
        return 0
    }

    let result = [0]
    dfs(root, Number.NEGATIVE_INFINITY, result)
    return result[0]
};

function dfs(root: TreeNode | null,max: number, result: number[]): void {
    if(!root) {
        return
    }

    if(root.val >= max){
        result[0] = result[0] + 1
    }

    dfs(root.left, Math.max(max, root.val) , result)
    dfs(root.right, Math.max(max, root.val) , result)
}