function carFleet(target: number, position: number[], speed: number[]): number {
    let totalCar: number = position.length
    let zip: [number, number][] = []

    for (let i: number = 0; i < totalCar; i++){
        zip.push([position[i], speed[i]])
    }

    zip.sort((a, b) => a[0] - b[0])

    let time: number[] = []
    for (let i: number = 0; i < totalCar; i++){
        time.push((target - position[i]) / speed[i])
    }

    let result: number = 0
    let curr: number = Number.NEGATIVE_INFINITY
    for(let i: number = totalCar - 1; i >= 0; i--){
        if(time[i] > curr){
            curr = time[i]
            result++
        }
    }
    
    return result
};

export default carFleet