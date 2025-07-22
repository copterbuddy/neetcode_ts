import { TreeNode } from "../Models/TreeNode";

export function levelOrder(root: TreeNode | null): number[][] {
    if(!root){
        return []
    }

    let result: number[][] = []
    let queue: (TreeNode | null)[] = [root]
    while(queue.length > 0){
        let levelSize = queue.length
        let currentLevel: number[] = []

        for (let index = 0; index <= levelSize - 1; index++) {
            let node = queue.shift() ?? null
            if(node){
                currentLevel.push(node.val)
            }
            
            if(node?.left){
                queue.push(node.left)
            }

            if(node?.right){
                queue.push(node.right)
            }
        }
        result.push(currentLevel)
    }

    return result
};