import { expectEqualUnorderedArraysStrict } from "../Models/Array"
import { letterCombinations } from "./LeetCode17LetterCombinationsOfAPhoneNumber"

test("LeetCode17 LetterCombinationsOfAPhoneNumber Success Case1",() => {
    let digits = "23"
    let result = letterCombinations(digits)
    expect(expectEqualUnorderedArraysStrict(result, ["ad","ae","af","bd","be","bf","cd","ce","cf"]))
})

test("LeetCode17 LetterCombinationsOfAPhoneNumber Success Case2",() => {
    let digits = ""
    let result = letterCombinations(digits)
    expect(expectEqualUnorderedArraysStrict(result, []))
})

test("LeetCode17 LetterCombinationsOfAPhoneNumber Success Case3",() => {
    let digits = "2"
    let result = letterCombinations(digits)
    expect(expectEqualUnorderedArraysStrict(result, ["a","b","c"]))
})