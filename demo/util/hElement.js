export { HElement }

/**
 * Creates a h Element
 * @param type
 * @param text
 * @returns {HTMLHeadElement}
 * @constructor
 */
const HElement = (type = 1, text = "") => {
    const h     = document.createElement('h' + type);
    h.innerText = text;
    return h;
}
