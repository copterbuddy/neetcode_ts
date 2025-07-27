import { TreeNode } from "../Models/TreeNode";

export function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    let dict: Map<number, number> = new Map()
    inorder.forEach((val, i) => {
        dict.set(val, i)
    });
    let idx = 0

    function dfs(l: number, r: number): TreeNode | null {
        if(l > r) {
            return null
        }

        let root_val = preorder[idx++]
        let root_idx = dict.get(root_val)!
        let root = new TreeNode(root_val)
        root.left = dfs(l, root_idx - 1)
        root.right = dfs(root_idx + 1, r)
        return root
    }
    
    return dfs(0, preorder.length - 1)
};