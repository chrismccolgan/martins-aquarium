/*
    This function will convert a single location object to an
    HTML representation and return it
*/

const locationConverter = (locationObject) => {

    const locationHTMLRepresentation = 
    `<div class="location__container">
        <div>
            <img class="location__picture" src="${locationObject.picture}"
                alt="${locationObject.location}" />
        </div>
        <div class="location__details">
            ${locationObject.description}
        </div>
    </div>`

    return locationHTMLRepresentation

}