export default function minEatingSpeed(piles: number[], h: number): number {
    let maxEat = Math.max(...piles)
    let maxHour = h
    let l = 1
    let r = maxEat
    let res = maxEat
    while(l < r){
        let speed = Math.floor((l + r) / 2)
        let totalHourUsed =  0
        for(let i: number = 0; i < piles.length; i++){
            let hourUse = Math.ceil(piles[i] / speed)
            totalHourUsed += hourUse
        }

        if(totalHourUsed <= maxHour){
            res = speed
        }

        if (totalHourUsed > maxHour){
            l = speed + 1
        }else {
            r = speed - 1
        }
    }

    return res
};