export {buttonProjector}

/**
 * Creates a <button> Element
 * @param text {string}
 * @param type {string[]}
 * @param classList
 * @param callback
 * @returns {HTMLElement} - Returns the anchor Element
 */
const buttonProjector = (text = "Change this", type= ["button-default"], classList = [], callback=(()=>{}) ) => {

    const buttonElement = document.createElement('button');
    buttonElement.innerText = text;
    buttonElement.classList.add('button');
    buttonElement.classList.add(...type);
    classList.forEach( c => buttonElement.classList.add(c));

    buttonElement.onclick = _ => callback();

    return buttonElement;

}