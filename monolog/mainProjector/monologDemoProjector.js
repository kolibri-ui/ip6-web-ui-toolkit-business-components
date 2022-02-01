import {pProjector} from "../../global-projectors/pProjector.js";
import {buttonProjector} from "../../global-projectors/buttonProjector.js";
import {Monolog} from "../subProjectors/Monolog.js";

export {monologDemoProjector}
const monologDemoProjector = (controller, rootElement) => {

    const monolog = Monolog();
    rootElement.appendChild(monolog.list());

    const pElement = pProjector("Show Sticky Success Notification by pushing the Button below.", ['demo-text']);
    rootElement.appendChild(pElement);



    const successStickButton = buttonProjector("Success Sticky", ["button-success"], () => {
        monolog.success({
            title: "Some Info",
            message: "Just a Test",
            sticky: true
        });
    });

    const codeErrorButton = buttonProjector("CodeError", ["button-error"], () => {
        monolog.error({
            title: "Some Code Error",
            message: "Ask a developer.",
            codeError:"Example of a Code Error"
        });
    });

    rootElement.appendChild(successStickButton);
    rootElement.appendChild(codeErrorButton);
}