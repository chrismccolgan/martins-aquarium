/*
Responsible for generating a list of tip HTML
representations, and putting in the browser
*/

const tipList = () => {
    // Iterate the collection of tip objects
    for (const currenttipObject of tipCollection) {

        // Convert the current tip to its HTML representation
        const tipHTML = tipConverter(currenttipObject)

        // Find the <article> element in index.html
        const tipArticleElement = document.querySelector(".tipList")

        // Put the tip HTML representation inside the <article> element
        tipArticleElement.innerHTML += tipHTML
    }
}

const tipVisibilityButton = document.querySelector(".toggleTips")

tipVisibilityButton.addEventListener("click", clickEvent => {
    document.querySelector(".tipList").classList.toggle("hidden")
})