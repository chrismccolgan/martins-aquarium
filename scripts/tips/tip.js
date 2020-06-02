/*
    This function will convert a single tip object to an
    HTML representation and return it
*/

const tipConverter = (tipObject) => {

    const tipHTMLRepresentation = 
    `<div class="tip">${tipObject.tip}</div>`

    return tipHTMLRepresentation

}