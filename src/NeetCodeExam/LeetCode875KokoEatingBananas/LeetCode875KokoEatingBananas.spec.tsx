import minEatingSpeed from "./LeetCode875KokoEatingBananas"

test('koko eat bananas success case 1',() => {
    let piles = [3,6,7,11], h = 8
    let want = 4
    let result = minEatingSpeed(piles, h)
    expect(result).toEqual(want)
})

test('koko eat bananas success case 2',() => {
    let piles = [30,11,23,4,20], h = 5
    let want = 30
    let result = minEatingSpeed(piles, h)
    expect(result).toEqual(want)
})

test('koko eat bananas success case 3',() => {
    let piles = [30,11,23,4,20], h = 6
    let want = 23
    let result = minEatingSpeed(piles, h)
    expect(result).toEqual(want)
})