import {notificationProjector} from "./notificationProjector.js";

export {monologListProjector}

/**
 * Creates a Monolog List on the given Position
 * @param position
 * @returns {HTMLDivElement}
 */
const monologListProjector = (position = 'top right') => {
    const monologListElement = document.createElement('div');
    monologListElement.classList.add('monolog-list', 'top', 'right');
    return monologListElement;
}