import {notificationProjector} from "./notificationProjector";

export {monologProjector}

/**
 * Creates a Monolog List on the given Position
 * @param position
 * @returns {HTMLDivElement}
 */
const monologProjector = (position = 'top right') => {

    const monologListElement = document.createElement('div');
    monologListElement.classList.add('monolog-list', position);

    function emit(type = "default",
                  sticky = false,
                  attention = false,
                  icon = false,
                  title = '',
                  message = '',
                  timeout = 5000) {
        const notification = notificationProjector(type, sticky, attention, icon, title, message, timeout);
        monologListElement.appendChild(notification);

    }

    return monologListElement;
}