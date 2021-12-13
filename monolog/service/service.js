import {notificationProjector} from "../baseProjectors/notificationProjector.js";

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
                          title,
                          message,
                          timeout) => {
        const notification = notificationProjector(type, sticky, attention, icon, title, message, timeout);
        elem.appendChild(notification);
    }

    return {
        notification
    }
}