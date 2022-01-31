export {divProjector}

/**
 *
 * @returns {HTMLDivElement}
 * @param classList
 */
const divProjector = (classList = []) => {
    const divElement = document.createElement('div');
    classList.forEach( c => divElement.classList.add(c));
    return divElement;
}