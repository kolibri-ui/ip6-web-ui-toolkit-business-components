export {buttonElement}

/**
 * Creates a <button> Element
 * @param text
 * @param type
 * @param callback
 * @returns {HTMLButtonElement}
 */
const buttonElement = (text = "Change this", type = "button-default", callback = (() => {})) => {
    const buttonElement = document.createElement('button');
    buttonElement.textContent = text;
    buttonElement.classList.add('button');
    buttonElement.classList.add(type);
    buttonElement.onclick = _ => callback();
    return buttonElement;
}
