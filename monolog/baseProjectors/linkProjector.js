export {linkProjector}

/**
 * Creates a <a> Element
 * @param {string} linkText - Describes what the text of the link should be
 * @param {string} href - Describes the location where the link is pointing. If empty, the attribute gets not created
 * @param {string} classlist - Describes class list for element
 * @returns {HTMLAnchorElement} - Returns the anchor Element
 */
const linkProjector = (linkText, href = '', classlist = '') => {
    const aElement = document.createElement('a');
    aElement.innerHTML = linkText;
    (href !== '' ? aElement.setAttribute('href', href) : '');
    (classlist !== '' ? aElement.classList.add(classlist) : '');
    return aElement
}