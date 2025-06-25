export default function checkInclusion(s1: string, s2: string): boolean {
    let s1m: {[key: string]: number} = {}
    let s2m: {[key: string]: number} = {}
    for (let t of s1){
        if(!s1m[t]){
            s1m[t] = 1
            continue
        }
        s1m[t] = s1m[t]+1
    }
    let windowsSize = s1.length
    let l = 0
    let r = 0
    let s2mCount = 0
    while (r <= s2.length){
        if(s2mCount != windowsSize) {
            if(!s2m[s2[r]]){
                s2m[s2[r]] = 1
                r+=1
                s2mCount+=1
                continue
            }
            let raw = s2m[s2[r]]
            let val = raw+1
            s2m[s2[r]] = val
            r+=1
            s2mCount+=1
            continue
        }

        let isSuccess = true
        for (let key in s2m) {
            if (s1m[key] !== s2m[key]) {
                isSuccess = false
                break
            }
        }
        if (isSuccess){
            return true
        }

        if (s2m[s2[l]] === 1){
            delete s2m[s2[l]]
        }else {
            let raw = s2m[s2[l]]
            let val = raw-1
            s2m[s2[l]] = val
        }
        s2mCount-=1
        l+=1
    }
    return false
};