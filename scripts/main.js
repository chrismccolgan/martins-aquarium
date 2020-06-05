getFishData().then(
    () => {
        console.log("inside", fishCollection)
        fishList()
    }
)

getLocationData().then(
    () => {
        console.log("inside", locationCollection)
        locationList()
    }
)

getTipData().then(
    () => {
        console.log("inside", tipCollection)
        tipList()
    }
)

getQuoteData().then(
    () => {
        console.log("inside", quoteCollection)
        quoteList()
    }
)