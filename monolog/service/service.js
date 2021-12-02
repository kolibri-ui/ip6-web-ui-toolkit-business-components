import {notificationProjector} from "../baseProjectors/notificationProjector.js";

export {monologService}

/**
 * Playground Service. Add some Checks like a login check or other functionalities
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