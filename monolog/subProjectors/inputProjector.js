export {inputProjector}

/**
 *
 * @param {string} value - Value for input
 * @param {string} placeholder - Placeholder for input
 * @param {string} id - ID for input
 * @returns {HTMLInputElement}
 */
const inputProjector = (value = '', placeholder = '', id = '') => {
    const inputElement = document.createElement('input');
    (id !== '' ? inputElement.setAttribute('id', id) : '');
    (value !== '' ? inputElement.setAttribute('value', value) : '');
    (placeholder !== '' ? inputElement.setAttribute('placeholder', placeholder) : '');
    return inputElement;
}