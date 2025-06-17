export default class TimeMap {
    private dict: { [key: string]: [value: string,timestamp: number][] } = {}

    constructor() {

    }

    set(key: string, value: string, timestamp: number): void {
        if (!this.dict[key]) {
            this.dict[key] = []
        }

        this.dict[key].push([value, timestamp])
    }

    get(key: string, timestamp: number): string {
        if(!this.dict[key]) return ""

        let data = this.dict[key]
        let l = 0
        let r = data.length - 1
        let result = ""
        while (l <= r){
            let m = Math.floor((l + r) / 2)
            let mData = data[m]
            if(mData[1] <= timestamp){
                result = mData[0]
                l = m + 1
            }
            else{
                r = m - 1
            }
        }

        return result
    }
}

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */