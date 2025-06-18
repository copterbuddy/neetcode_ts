import maxProfit from "./LeetCode121BestTimeToBuyAndSellStock";

test("LeetCode121 Success Case 1",() => {
    let prices = [7,1,5,3,6,4]
    let output = 5
    let result = maxProfit(prices)
    expect(result).toBe(output)
})

test("LeetCode121 Success Case 2",() => {
    let prices = [7,6,4,3,1]
    let output = 0
    let result = maxProfit(prices)
    expect(result).toBe(output)
})

test("LeetCode121 Success Case 3",() => {
    let prices = [1,2]
    let output = 1
    let result = maxProfit(prices)
    expect(result).toBe(output)
})

test("LeetCode121 Success Case 4",() => {
    let prices = [2,4,1]
    let output = 2
    let result = maxProfit(prices)
    expect(result).toBe(output)
})
/*
loop[0] == 7
max,min = 7
=========
loop i = 1
loop[1] == 1
max,min = 7

loop[1] < min
1 < 7
{
min,max = 1
}

=========
loop i = 2
loop[2] == 5
max,min = 1

loop[2] > max
5 > 1
max = 5
=========
loop i = 3
loop[3] == 3
max = 5
min = 1

loop[3] > max
3 > 5
=========
loop i = 4
loop[4] == 6
max = 5
min = 1

loop[4] > max
6 > 5
max = 6
=========
loop i = 5
loop[5] == 4
max = 5
min = 1






if loop[i] < min{
min,max = loop[i]
}else{
max = loop[i]
}

* */