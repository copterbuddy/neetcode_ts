import { TreeNode } from "../Models/TreeNode";

export function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
    if(!subRoot){
        return true
    }

    if(!root){
        return false
    }

    if(SameTree(root, subRoot)) {
        return true
    }

    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
};

function SameTree(p: TreeNode | null, q: TreeNode | null): boolean{
    if(!p && !q){
        return true
    }

    if(p && q && p.val === q.val){
        return SameTree(p.left, q.left) && SameTree(p.right, q.right)
    }
    else{
        return false
    }
}