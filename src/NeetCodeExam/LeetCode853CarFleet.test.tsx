import carFleet from './LeetCode853CarFleet'

test('carFleet success case 1', () => {
    let target = 12, position = [10,8,0,5,3], speed = [2,4,1,1,3]
    let result: number = carFleet(target, position, speed)
    let want = 3
    expect(result).toEqual(want)
});