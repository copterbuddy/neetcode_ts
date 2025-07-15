import { TreeNode } from "../Models/TreeNode";

export function maxDepth(root: TreeNode | null): number {
    let max = 0

    function dfs(node: TreeNode | null, currLevel: number){
        if(node === null){
            return
        }
        currLevel++
        max = Math.max(max, currLevel)
        dfs(node.left, currLevel)
        dfs(node.right, currLevel)
        currLevel--
    }
    
    dfs(root, 0)
    return max
};