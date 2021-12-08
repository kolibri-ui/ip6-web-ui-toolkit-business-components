import {cardProjector} from "../baseProjectors/cardProjector.js";
import {monologProjector} from "../baseProjectors/monologProjector.js";
import {buttonProjector} from "../baseProjectors/buttonProjector.js";


export {playground}


const playground = (controller, rootElement) => {

    const monologList = monologProjector();

    const buttonTypes = ['Default', 'Info', 'Success', 'Warning', 'Error'];
    const nonStickyButtons = [];

    buttonTypes.forEach(b => {
        nonStickyButtons.push(
            buttonProjector(b, ["button-" + b.toLowerCase()], () => {
                controller.notification(monologList,
                    b.toLowerCase(),
                    false,
                    false,
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
                "error",
                true,
                true,
                false,
                "Error Title",
                "and a error Message", 1000
            );
        })
    );

    const buttonCardSticky = cardProjector('Sticky', stickyButtons);


    rootElement.appendChild(buttonCard);
    rootElement.appendChild(buttonCardSticky);
    rootElement.appendChild(monologList);
}