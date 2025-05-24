function search(nums: number[], target: number): number {
    
    let l: number = 0
    let r: number = nums.length - 1
    while(l < r){
        let m: number = Math.round((l + r) / 2)
        if(nums[m] < target){
            l = m
        }else if(nums[m] > target){
            r = m
        }else{
            return m
        }
    }
    return -1
};

export default search