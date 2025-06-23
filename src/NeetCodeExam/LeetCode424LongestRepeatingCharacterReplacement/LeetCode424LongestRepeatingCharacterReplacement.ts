export default function characterReplacement(s: string, k: number): number {
    let feq: {[key: string]:  number} = {}
    let max_size = 0
    let l = 0
    let r = 0

    while (r < s.length) {
        if(!feq[s[r]]) {
            feq[s[r]] = 1
        }else {
            feq[s[r]]++
        }

        let windows_size = r - l + 1
        const [_, maxVal] = Object.entries(feq).reduce(
            (maxEntry, current) => (current[1] > maxEntry[1] ? current : maxEntry)
        );

        if(windows_size - maxVal > k){
            feq[s[l]]--
            l++
        }

        windows_size = r - l + 1
        max_size = Math.max(max_size, windows_size)
        r++
    }
    return max_size
};

function characterReplacement_time_expire(s: string, k: number): number {
    let maxLength = 0
    for (let i = 0; i < s.length; i++) {
        let currLength = 1
        let carry = k
        for (let j = i + 1; j < s.length; j++) {
            if(s.charAt(i) ===  s.charAt(j)){
                currLength++
                continue
            }

            if(carry === 0){
                break
            }

            currLength++
            carry--
        }

        let leftIndex = i - 1
        while (leftIndex >= 0){
            if(s.charAt(i) ===  s.charAt(leftIndex)){
                currLength++
                leftIndex--
                continue
            }

            if(carry === 0){
                break
            }

            currLength++
            carry--
            leftIndex--
        }
        maxLength = Math.max(currLength, maxLength)
    }
    return maxLength
};