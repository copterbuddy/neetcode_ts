export default function findMin(nums: number[]): number {
    let l = 0
    let r = nums.length - 1
    let res = nums[0]

    while(l < r){
        if(nums[l] < nums[r]){
            return Math.min(res, nums[l])
        }

        let m = Math.floor((l + r) / 2)
        res = Math.min(nums[m], res)
        if(nums[l] < nums[m]){
            l = m + 1
        }else{
            r = m - 1
        }
    }

    return res
};