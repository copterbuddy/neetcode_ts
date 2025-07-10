import {TreeNode} from "../Models/TreeNode";

export default function invertTree(root: TreeNode | null): TreeNode | null {
    if (!root) return null;

    root.left = invertTree(root.left);
    root.right = invertTree(root.right);

    let tmp = root.left
    root.left = root.right
    root.right = tmp


    return root
};