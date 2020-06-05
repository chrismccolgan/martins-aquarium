
/*
Responsible for generating a list of location HTML
representations, and putting in the browser
*/

const locationList = () => {
    // Iterate the collection of location objects
    for (const currentlocationObject of locationCollection) {

        // Convert the current location to its HTML representation
        const locationHTML = locationConverter(currentlocationObject)

        // Find the <article> element in index.html
        const locationArticleElement = document.querySelector(".location")

        // Put the location HTML representation inside the <article> element
        locationArticleElement.innerHTML += locationHTML
    }
}


const locationVisibilityButton = document.querySelector(".toggleLocation")

locationVisibilityButton.addEventListener("click", clickEvent => {
    document.querySelector(".locationList").classList.toggle("hidden")
})