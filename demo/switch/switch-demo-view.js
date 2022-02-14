import {switchDemoProjector} from "./switch-demo-projector.js";

export {View}

const View = (controller, rootElement) => {
    const renderSwitchProjector = switchModel => switchDemoProjector(controller, rootElement, switchModel);
    controller.onSwitchAdd(renderSwitchProjector);
}
