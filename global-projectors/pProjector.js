export {pProjector}

/**
 * Create a Paragraph Element
 * @param text
 * @param classList
 * @returns {HTMLParagraphElement}
 */
const pProjector = (text ="", classList = []) => {
    const pElement = document.createElement('p');
    pElement.innerText = text;
    classList.forEach( c => pElement.classList.add(c));
    return pElement;
}