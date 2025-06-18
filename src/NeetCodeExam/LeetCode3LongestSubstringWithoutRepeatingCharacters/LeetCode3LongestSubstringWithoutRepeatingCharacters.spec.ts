import {
    lengthOfLongestSubstring,
    lengthOfLongestSubstring2,
    lengthOfLongestSubstring3
} from "./LeetCode3LongestSubstringWithoutRepeatingCharacters";

test("LeetCode3 lengthOfLongestSubstring Success Case1",() => {
    let s = "abcabcbb"
    let result = lengthOfLongestSubstring3(s)
    expect(result).toBe(3)
})

test("LeetCode3 lengthOfLongestSubstring Success Case2",() => {
    let s = "bbbbb"
    let result = lengthOfLongestSubstring3(s)
    expect(result).toBe(1)
})

test("LeetCode3 lengthOfLongestSubstring Success Case3",() => {
    let s = "pwwkew"
    let result = lengthOfLongestSubstring(s)
    expect(result).toBe(3)
})

test("LeetCode3 lengthOfLongestSubstring Success Case4",() => {
    let s = " "
    let result = lengthOfLongestSubstring(s)
    expect(result).toBe(1)
})