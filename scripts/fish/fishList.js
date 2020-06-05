
// /*
// Responsible for generating a list of fish HTML
// representations, and putting in the browser
// */

// const fishList = () => {
//     // Iterate the collection of fish objects
//     for (const currentFishObject of fishCollection) {

//         // Convert the current fish to its HTML representation
//         const fishHTML = fishConverter(currentFishObject)

//         // Find the <article> element in index.html
//         const fishArticleElement = document.querySelector(".fish")

//         // Put the fish HTML representation inside the <article> element
//         fishArticleElement.innerHTML += fishHTML
//     }
// }

// Function to show holy fish in the browser


const fishTypeDropdown = document.querySelector(".typeChoice")
const contentTarget= document.querySelector(".fish")

const clearFishList = () => contentTarget.innerHTML = ""

fishTypeDropdown.addEventListener("change", (clickEvent) => {
    // Get the value of the option chosen by the user
    const userChoice = clickEvent.target.value

    // If the user chose Holy, clear the list and only show holy fish
    if (userChoice === "holy") {
        clearFishList()
        showHolyFish()
    }
    else if (userChoice === "soldier") {
        clearFishList()
        showSoldierFish()
    }
    else if (userChoice === "plebs") {
        clearFishList()
        showPlebFish()
    }
    else if (userChoice === "all") {
        clearFishList()
        fishList()
    }
        
})

const fishVisibilityButton = document.querySelector(".toggleFish")

fishVisibilityButton.addEventListener("click", clickEvent => {
    document.querySelector(".fishList").classList.toggle("hidden")
})

const showHolyFish = () => {
    const fishObjectsArray = mostHolyFish()

    for (const fishObject of fishObjectsArray) {
        const fishHTMLRepresentation = fishConverter(fishObject)
        const fishArticleElement = document.querySelector(".fish")
        fishArticleElement.innerHTML += fishHTMLRepresentation
    }
}


const showSoldierFish = () => {
    const soldierFishObjectsArray = soldierFish()

    for (const soldierFishObject of soldierFishObjectsArray) {
        const fishHTMLRepresentation = fishConverter(soldierFishObject)
        const fishArticleElement = document.querySelector(".fish")
        fishArticleElement.innerHTML += fishHTMLRepresentation
    }
}

const showPlebFish = () => {
    const plebFishObjectsArray = fishPlebs()

    for (const plebFishObject of plebFishObjectsArray) {
        const fishHTMLRepresentation = fishConverter(plebFishObject)
        const fishArticleElement = document.querySelector(".fish")
        fishArticleElement.innerHTML += fishHTMLRepresentation
    }
}

const fishList = () => {
    showHolyFish()
    showSoldierFish()
    showPlebFish()
}