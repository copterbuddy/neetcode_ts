import { partition } from "./LeetCode131PalindromePartitioning"
import { expectEqualUnorderedArraysStrict } from '../Models/Array';

test("LeetCode131 PalindromePartitioning Success Case1",() => {
    let s = "aab"
    let result = partition(s)
    expect(expectEqualUnorderedArraysStrict(result, [["a","a","b"],["aa","b"]])).toBeTruthy
})

test("LeetCode131 PalindromePartitioning Success Case2",() => {
    let s = "a"
    let result = partition(s)
    expect(expectEqualUnorderedArraysStrict(result, [["a"]])).toBeTruthy
})