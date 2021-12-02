export {buttonProjector}

/**
 * Creates a <button> Element
 * @param text
 * @param {string} classlist - Describes class list for element
 * @param callback
 * @returns {HTMLElement} - Returns the anchor Element
 */
const buttonProjector = (text = "Change this", callback) => {

    const buttonElement = document.createElement('button');
    buttonElement.innerText = text;
    buttonElement.classList.add('button', "button-default");

    buttonElement.onclick = _ => callback();

    return buttonElement;

}