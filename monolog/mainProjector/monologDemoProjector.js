import {pProjector} from "../../global-projectors/pProjector.js";
import {buttonProjector} from "../../global-projectors/buttonProjector.js";

export {monologDemoProjector}
const monologDemoProjector = (controller, rootElement) => {

    const pElement = pProjector("Show Sticky Success Notification by pushing the Button below.", ['demo-text']);
    rootElement.appendChild(pElement);

    const successButton = buttonProjector("Success Sticky", ["button-error"], () => { });
    rootElement.appendChild(successButton);

}