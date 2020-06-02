
/*
Responsible for generating a list of fish HTML
representations, and putting in the browser
*/

const quoteList = () => {
    // Iterate the collection of fish objects
    for (const currentQuoteObject of quoteCollection) {

        // Convert the current fish to its HTML representation
        const quoteHTML = quoteConverter(currentQuoteObject)

        // Find the <article> element in index.html
        const quoteArticleElement = document.querySelector(".quoteList")

        // Put the fish HTML representation inside the <article> element
        quoteArticleElement.innerHTML += quoteHTML
    }
}