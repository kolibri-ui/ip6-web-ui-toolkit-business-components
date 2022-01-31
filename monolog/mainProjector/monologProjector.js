import {monologListProjector} from "../subProjectors/monologListProjector.js";
import {buttonProjector} from "../../global-projectors/buttonProjector.js";
import {cardProjector} from "../../global-projectors/cardProjector.js";


export {monologProjector}


const monologProjector = (controller, rootElement) => {

    const monologList = monologListProjector();

    const buttonTypes = ['Info', 'Success', 'Warning', 'Error'];
    const nonStickyButtons = [];

    buttonTypes.forEach(b => {
        nonStickyButtons.push(
            buttonProjector(b, ["button-" + b.toLowerCase()], () => {
                controller.notification(monologList,
                    {
                        title: b + " Title ",
                        message: "and a " + b + " Message, 1 sec",
                        type: b,
                    }
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
                    {
                        title: b + " Title ",
                        message: "and a " + b + " Message",
                        type: b,
                        sticky: true
                    }
                );
            })
        );
    });

    stickyButtons.push(
        buttonProjector('Error Shake', ["button-error"], () => {
            controller.notification(monologList,
                {
                    title: " Error Title",
                    message: "and a error Message",
                    type: "Error",
                    sticky: true,
                    attention: true
                }
            );
        })
    );

    stickyButtons.push(
        buttonProjector('Code Error', ["button-error"], () => {
            controller.notification(monologList,
                {
                    title: "Code Error",
                    message: "Please contact the IT support.",
                    type: "Error",
                    sticky: true,
                    codeError: "salut"
                }
            );
        })
    );

    const buttonCardSticky = cardProjector('Sticky', stickyButtons);

    rootElement.appendChild(buttonCard);
    rootElement.appendChild(buttonCardSticky);
    rootElement.appendChild(monologList);


    /* TODO: Implement stacked monolog, find y-value of selected monolog*/
    /*    if(monologList.offsetHeight >= window.innerHeight){
            console.log("now!");
        }

        console.log("Window Height: " + window.innerHeight);
        console.log("Monolog Height: " + monologList.offsetHeight);*/

}