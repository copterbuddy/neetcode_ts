function lengthOfLongestSubstring(s: string): number {
    let result = 0
    for (let i = 0; i < s.length; i++) {
        let seen: Set<string> = new Set<string>()
        for (let j = i; j < s.length; j++) {
            if(seen.has(s[j])){
                break
            }
            seen.add(s[j])
        }
        result = Math.max(result, seen.size)
    }

    return result
};

function lengthOfLongestSubstring2(s: string): number {
    const charSet = new Set();
    let l = 0;
    let res = 0;

    for (let r = 0; r < s.length; r++) {
        while (charSet.has(s[r])) {
            charSet.delete(s[l]);
            l++;
        }
        charSet.add(s[r]);
        res = Math.max(res, r - l + 1);
    }
    return res;
}

function lengthOfLongestSubstring3(s: string): number {
    let mp = new Map();
    let l = 0, res = 0;

    for (let r = 0; r < s.length; r++) {
        if (mp.has(s[r])) {
            l = Math.max(mp.get(s[r]) + 1, l);
        }
        mp.set(s[r], r);
        res = Math.max(res, r - l + 1);
    }
    return res;
}

export { lengthOfLongestSubstring, lengthOfLongestSubstring2, lengthOfLongestSubstring3 }