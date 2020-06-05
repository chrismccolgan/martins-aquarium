let quoteCollection = []

const getQuoteData = () => {
    return fetch("http://localhost:8088/quotes").then(
        (httpResponse) => {
                return httpResponse.json()
        }
    )
    .then(
        (arrayOfQuotes) => {
            quoteCollection = arrayOfQuotes
        }
    )
}