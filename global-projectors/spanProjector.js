export {spanProjector}

/**
 *
 * @param {string} text - Text to be displayed
 * @param {string} forElement - id of element for which the label is
 * @returns {HTMLSpanElement}
 */
const spanProjector = (text = '', classList = []) => {
    const spanElement = document.createElement('span');
    spanElement.innerHTML = text;
    classList.forEach(c => spanElement.classList.add(c));
    return spanElement;
}