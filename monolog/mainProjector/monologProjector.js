import {Monolog} from "../subProjectors/Monolog.js";
import {buttonProjector} from "../../global-projectors/buttonProjector.js";
import {cardProjector} from "../../global-projectors/cardProjector.js";


export {monologProjector}


const monologProjector = (controller, rootElement) => {

    const monolog = Monolog();
    
    const buttonTypes = ['Info', 'Success', 'Warning', 'Error'];
    const nonStickyButtons = [];

    buttonTypes.forEach(b => {
        nonStickyButtons.push(
            buttonProjector(b, ["button-" + b.toLowerCase()], () => {
                controller.notification(monolog.list(),
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
                controller.notification(monolog.list(),
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
            controller.notification(monolog.list(),
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
            controller.notification(monolog.list(),
                {
                    title: "Code Error",
                    message: "Please contact the IT support.",
                    type: "Error",
                    sticky: true,
                    codeError: "Exception in thread \"main\" java.lang.NullPointerException: Fictitious NullPointerException at\n" +
                        "                        ClassName.methodName1(ClassName.java:lineNumber) at\n" +
                        "                        ClassName.methodName2(ClassName.java:lineNumber) at\n" +
                        "                        ClassName.methodName3(ClassName.java:lineNumber) at\n" +
                        "                        ClassName.main(ClassName.java:lineNumber)"
                }
            );
        })
    );

    const buttonCardSticky = cardProjector('Sticky', stickyButtons);

    rootElement.appendChild(buttonCard);
    rootElement.appendChild(buttonCardSticky);
    rootElement.appendChild(monolog.list());


    /* TODO: Implement stacked monolog.list(), find y-value of selected monolog.list()*/
    /*    if(monolog.list()List.offsetHeight >= window.innerHeight){
            console.log("now!");
        }

        console.log("Window Height: " + window.innerHeight);
        console.log("Monolog Height: " + monolog.list()List.offsetHeight);*/

}