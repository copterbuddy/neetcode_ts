import { TreeNode } from "../Models/TreeNode";

export function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
	if(!root){
        return null
    }

    let curr = root
    while(curr){
        if(curr.val > p!.val && curr.val > q!.val){
            curr = curr.left!
        }else if(curr.val < p!.val && curr.val < q!.val){
            curr = curr.right!
        }else{
            return curr
        }
    }

    return null
};