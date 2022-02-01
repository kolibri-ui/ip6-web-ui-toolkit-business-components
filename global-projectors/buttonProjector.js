export {buttonProjector}

/**
 * Creates a <button> Element
 * @param text {string}
 * @param type {string[]}
 * @param callback
 * @returns {HTMLElement} - Returns the anchor Element
 */
const buttonProjector = (text = "Change this", type= [], callback=(()=>{}) ) => {

    const buttonElement = document.createElement('button');
    buttonElement.innerText = text;
    buttonElement.classList.add('button');
    buttonElement.classList.add(...type);

    buttonElement.onclick = _ => callback();

    return buttonElement;

}