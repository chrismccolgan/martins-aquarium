let fishCollection = []

const getFishData = () => {
    return fetch("http://localhost:8088/fish").then(
        (httpResponse) => {
                return httpResponse.json()
        }
    )
    .then(
        (arrayOfFish) => {
            fishCollection = arrayOfFish
        }
    )
}

// 3, 6, 9, 12, etc... fish


const mostHolyFish = () => {
    const holyFish = []

    for (const fish of fishCollection) {
        if (fish.length % 3 === 0) {
            holyFish.push(fish)
        }
    }
    return holyFish
}

// // 5, 10, 15, 20, 25, etc... fish
const soldierFish = () => {
    const soldierFishArray = []

    for (const fish of fishCollection) {
        if (fish.length % 5 === 0 && fish.length % 3 !== 0) {
            soldierFishArray.push(fish)
        }
    }
    return soldierFishArray
}

// // Any fish not a multiple of 3 or 5
const fishPlebs = () => {
    const plebs = []

    for (const fish of fishCollection) {
        if (fish.length % 5 !== 0 && fish.length % 3 !== 0) {
            plebs.push(fish)
        }
    }
    return plebs
}