import { TreeNode } from "../Models/TreeNode";

export function kthSmallest(root: TreeNode | null, k: number): number {
    let res: number[] = [Number.MAX_SAFE_INTEGER, 0]
    dfs(root, k, res)
    return res[0]
};

function dfs(root: TreeNode | null, k: number, res: (number)[]): void{
    if(!root || res[1] >= k){
        return 
    }

    dfs(root.left, k, res)
    res[1] += 1
    if(res[1] === k){
        res[0] = Math.min(res[0], root.val)
        return
    }
    
    dfs(root.right, k, res)
}