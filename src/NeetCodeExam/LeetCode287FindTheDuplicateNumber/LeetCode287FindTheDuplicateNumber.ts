export default function findDuplicate(nums: number[]): number {
    let dict: Map<number, number> = new Map()
    for(let num of nums){
        let val = dict.get(num) ?? null;
        if(!val){
            dict.set(num, 1)
            continue;
        }

        return num!
    }

    return -1
};

export function findDuplicate2(nums: number[]): number {


    for(let i = 0; i <nums.length; i++){
        let idx = Math.abs(nums[i])
        if(nums[idx]<0){
            return idx
        }
        nums[idx] = -nums[idx]
    }

    return nums.length

};