import {cardProjector} from "../baseProjectors/cardProjector.js";
import {monologProjector} from "../baseProjectors/monologProjector.js";
import {buttonProjector} from "../baseProjectors/buttonProjector.js";


export {playground}


const playground = (controller, rootElement) => {

    const monologList = monologProjector();
    const defaultButton = buttonProjector('Default', [],() => {
        controller.notification(monologList,
            "default",
            false,
            false,
            false,
            "Default Title",
            "and a default Message",5000
        );
    });

    const infoButton = buttonProjector('Info', ["button-info"],() => {
        controller.notification(monologList,
            "info",
            false,
            false,
            false,
            "info Title",
            "and a info Message",5000
        );
    });

    const successButton = buttonProjector('Success', ["button-success"],() => {
        controller.notification(monologList,
            "success",
            false,
            false,
            false,
            "Success Title",
            "and a success Message",5000
        );
    });

    const warningButton = buttonProjector('Warning', ["button-warning"],() => {
        controller.notification(monologList,
            "warning",
            false,
            false,
            false,
            "Warning Title",
            "and a warning Message",5000
        );
    });

    const errorButton = buttonProjector('Error', ["button-error"],() => {
        controller.notification(monologList,
            "error",
            false,
            false,
            false,
            "Error Title",
            "and a error Message, 1 sec", 1000
        );
    });

    const buttonCard = cardProjector('Non-Sticky', [defaultButton, infoButton, successButton, warningButton, errorButton]);


    const defaultButtonSticky = buttonProjector('Default', [],() => {
        controller.notification(monologList,
            "default",
            true,
            false,
            false,
            "Default Title",
            "and a default Message",5000
        );
    });

    const infoButtonSticky = buttonProjector('Info', ["button-info"],() => {
        controller.notification(monologList,
            "info",
            true,
            false,
            false,
            "info Title",
            "and a info Message",5000
        );
    });

    const successButtonSticky = buttonProjector('Success', ["button-success"],() => {
        controller.notification(monologList,
            "success",
            true,
            false,
            false,
            "Success Title",
            "and a success Message",5000
        );
    });

    const warningButtonSticky = buttonProjector('Warning', ["button-warning"],() => {
        controller.notification(monologList,
            "warning",
            true,
            false,
            false,
            "Warning Title",
            "and a warning Message",5000
        );
    });

    const errorButtonSticky = buttonProjector('Error', ["button-error"],() => {
        controller.notification(monologList,
            "error",
            true,
            false,
            false,
            "Error Title",
            "and a error Message", 1000
        );
    });

    const errorButtonStickyAttention = buttonProjector('Error Shake', ["button-error"],() => {
        controller.notification(monologList,
            "error",
            true,
            true,
            false,
            "Error Title",
            "and a error Message", 1000
        );
    });

    const buttonCardSticky = cardProjector('Sticky', [defaultButtonSticky, infoButtonSticky, successButtonSticky, warningButtonSticky, errorButtonSticky, errorButtonStickyAttention]);



    rootElement.appendChild(buttonCard);
    rootElement.appendChild(buttonCardSticky);
    rootElement.appendChild(monologList);
}