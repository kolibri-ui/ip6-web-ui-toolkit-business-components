import {cardProjector} from "../subProjectors/cardProjector.js";
import {monologListProjector} from "../subProjectors/monologListProjector.js";
import {buttonProjector} from "../subProjectors/buttonProjector.js";


export {monologProjector}


const monologProjector = (controller, rootElement) => {

    const monologList = monologListProjector();

    const buttonTypes = ['Default', 'Info', 'Success', 'Warning', 'Error'];
    const nonStickyButtons = [];

    buttonTypes.forEach(b => {
        nonStickyButtons.push(
            buttonProjector(b, ["button-" + b.toLowerCase()], () => {
                controller.notification(monologList,
                    b,
                    false,
                    false,
                    true,
                    false,
                    b + " Title",
                    "and a " + b.toLowerCase() + " Message, 1 sec", 1000
                );
            })
        )
    });

    const buttonCard = cardProjector('Non-Sticky', nonStickyButtons);

    const stickyButtons = [];
    buttonTypes.forEach(b => {
        stickyButtons.push(
            buttonProjector(b, ["button-" + b.toLowerCase()], () => {
                controller.notification(monologList,
                    b,
                    true,
                    false,
                    true,
                    false,
                    b + " Title",
                    "and a " + b.toLowerCase() + " Message", 5000
                );
            })
        );
    });

    stickyButtons.push(
        buttonProjector('Error Shake', ["button-error"], () => {
            controller.notification(monologList,
                "Error",
                true,
                true,
                true,
                false,
                "Error Title",
                "and a error Message", 1000
            );
        })
    );

    stickyButtons.push(
        buttonProjector('Code Error', ["button-error"], () => {
            controller.notification(monologList,
                "code-error",
                true,
                false,
                true,
                true,
                "Code Error\n" +
                "Please contact the IT support.",
                '', 1000
            );
        })
    );

    const buttonCardSticky = cardProjector('Sticky', stickyButtons);


    rootElement.appendChild(buttonCard);
    rootElement.appendChild(buttonCardSticky);
    rootElement.appendChild(monologList);
}