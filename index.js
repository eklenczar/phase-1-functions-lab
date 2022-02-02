function distanceFromHqInBlocks(blocks) {
    const headQ = 42;
    if (blocks <= headQ) {
        return headQ - blocks
    } else (blocks >= headQ) 
        return blocks - headQ
}

function distanceFromHqInFeet(blocks) {
    return distanceFromHqInBlocks(blocks) * 264;
}

function distanceTravelledInFeet(start, destination) {
    distanceTravelledInFeet = Math.abs(start - destination) * 264  
    return distanceTravelledInFeet
}    

function calculatesFarePrice(start, destination) {
    calculatesFarePrice = Math.abs(start - destination) * 264
    let distance = calculatesFarePrice
        if (distance <= 400) 
            return 0
        else if (distance >= 401 && distance <= 2000) 
            return (distance - 400) * .02
        else if (distance >= 2000 && distance <= 2499)
            return 25
        else if (distance > 2500)
            return 'cannot travel that far'           
    }