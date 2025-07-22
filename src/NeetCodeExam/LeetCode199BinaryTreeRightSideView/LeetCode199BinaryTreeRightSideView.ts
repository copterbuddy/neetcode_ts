import { TreeNode } from "../Models/TreeNode";

export function rightSideView(root: TreeNode | null): number[] {
    if(!root){
        return []
    }

    let result: number[] = []
    let queue: (TreeNode | null)[] = [root]
    while(queue.length > 0){
        let levelSize = queue.length
        let currentLevel: number[] = []

        for(let i: number = 0; i < levelSize; i++){
            let node = queue.shift() ?? null
            if(node){
                currentLevel.push(node.val)
                queue.push(node.left)
                queue.push(node.right)
            }
        }
        
        while(currentLevel.length > 1){
            currentLevel.shift()
        }

        if(currentLevel.length == 1){
            result.push(currentLevel[0])
        }
    }

    return result
};