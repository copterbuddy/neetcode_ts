import { TreeNode } from "../Models/TreeNode";

export function isValidBST(root: TreeNode | null): boolean {
    let bool = dfs(root, [new TreeNode(Number.NEGATIVE_INFINITY)])
    return bool
};

function dfs(root: TreeNode | null, min: TreeNode[]): boolean{
    if(!root){
        return true
    }

    let leftValid = dfs(root.left, min)

    min[0] = root.val > min[0].val ? root : min[0]
    if((root.left && root.val <= root.left.val) || root.val < min[0].val){
        return false
    }

    if((root.right && root.val >= root.right.val) || root.val < min[0].val){
        return false
    }

    if(root !== min[0] && root.val === min[0].val){
        return false
    }

    let rightValid = dfs(root.right, min)

    return (leftValid && rightValid)
}