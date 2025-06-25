import checkInclusion from "./LeetCode567PermutationInString";

test("LeetCode567PermutationInString Success Case 1", () => {
    let s1 = "ab", s2 = "eidbaooo"
    let result = checkInclusion(s1, s2);
    expect(result).toBe(true)
})

test("LeetCode567PermutationInString Success Case 2", () => {
    let s1 = "ab", s2 = "eidboaoo"
    let result = checkInclusion(s1, s2);
    expect(result).toBe(false)
})

test("LeetCode567PermutationInString Success Case 3", () => {
    let s1 = "adc", s2 = "dcda"
    let result = checkInclusion(s1, s2);
    expect(result).toBe(true)
})