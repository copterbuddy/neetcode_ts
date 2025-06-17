import TimeMap from "./LeetCode981TimeBasedKeyValueStore";

test("",() => {
    let timeMap = new TimeMap()
    timeMap.set("foo", "bar", 1)
    let result = timeMap.get("foo", 1)
    expect(result).toBe("bar")
    result = timeMap.get("foo", 3)
    expect(result).toBe("bar")
    timeMap.set("foo", "bar2", 4)
    result = timeMap.get("foo", 4)
    expect(result).toBe("bar2")
    result = timeMap.get("foo", 5)
    expect(result).toBe("bar2")
})