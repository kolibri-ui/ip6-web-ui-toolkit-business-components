export {divProjector}

/**
 *
 * @param {string} text - Text to be displayed
 * @param {string} forElement - id of element for which the label is
 * @returns {HTMLDivElement}
 */
const divProjector = (classList = []) => {
    const divElement = document.createElement('div');
    classList.forEach( c => divElement.classList.add(c));
    return divElement;
}