export {hProjector}

/**
 * Creates a <br> Element
 * @returns {HTMLBRElement}
 */
const hProjector = (type = 1, text = "") => {
    const h = document.createElement('h' + type);
    h.innerText = text;
    return h;
}