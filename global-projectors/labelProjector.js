export {labelProjector}

/**
 *
 * @param {string} text - Text to be displayed
 * @param {string} forElement - id of element for which the label is
 * @returns {HTMLLabelElement}
 */
const labelProjector = (text = '', forElement = '') => {
    const labelElement = document.createElement('label');
    labelElement.innerHTML = text;
    (forElement !== '' ? labelElement.setAttribute('for', forElement) : '');
    return labelElement;
}