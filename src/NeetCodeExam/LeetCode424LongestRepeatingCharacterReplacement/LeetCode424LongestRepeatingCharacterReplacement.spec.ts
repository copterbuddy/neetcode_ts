import characterReplacement from "./LeetCode424LongestRepeatingCharacterReplacement";

test("LeetCode424 Case 1",() => {
    let s = "ABAB"
    let k = 2
    let result = characterReplacement(s, k)
    expect(result).toBe(4)
})

test("LeetCode424 Case 2",() => {
    let s = "AABABBA"
    let k = 1
    let result = characterReplacement(s, k)
    expect(result).toBe(4)
})

test("LeetCode424 Case 3",() => {
    let s = "BAAAB"
    let k = 2
    let result = characterReplacement(s, k)
    expect(result).toBe(5)
})

test("LeetCode424 Case 4",() => {
    let s = "AAAA"
    let k = 2
    let result = characterReplacement(s, k)
    expect(result).toBe(4)
})