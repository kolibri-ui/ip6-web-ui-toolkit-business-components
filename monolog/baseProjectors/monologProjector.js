import {notificationProjector} from "./notificationProjector.js";

export {monologProjector}

/**
 * Creates a Monolog List on the given Position
 * @param position
 * @returns {HTMLDivElement}
 */
const monologProjector = (position = 'top right') => {
    const monologListElement = document.createElement('div');
    monologListElement.classList.add('monolog-list', 'top', 'right');
    return monologListElement;
}