import {notificationProjector} from "../subProjectors/notificationProjector.js";

export {monologService}

/**
 * Monolog Service.
 */
const monologService = () => {

    const notification = (elem ,
                          type,
                          sticky,
                          attention,
                          icon,
                          codeError,
                          title,
                          message,
                          timeout) => {
        const notification = notificationProjector(type, sticky, attention, icon, codeError, title, message, timeout);
        elem.appendChild(notification);
    }

    return {
        notification
    }
}