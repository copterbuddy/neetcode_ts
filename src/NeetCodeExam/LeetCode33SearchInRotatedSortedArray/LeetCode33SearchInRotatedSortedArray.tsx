export default function search(nums: number[], target: number): number {
    let l = 0
    let r = nums.length - 1
    while (l <= r){
        let m = Math.floor((l + r) / 2)
        if(target === nums[m]){
            return m
        }

        if(nums[l] <= nums[m]){
            //left section
            if(target >= nums[l] && target < nums[m]){
                r = m - 1
            }else{
                l = m + 1
            }
        }else{
            //rigth section
            if(target > nums[m] && target <= nums[r]){
                l = m + 1
            }else{
                r = m - 1
            }
        }
    }
    return -1
};