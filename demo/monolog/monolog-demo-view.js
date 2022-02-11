import {monologDemoProjector} from "./monolog-demo-projector.js";

export {DemoView}

const DemoView = (controller, rootElement) => {
    const render = () => monologDemoProjector(controller, rootElement);
    controller.onMonologAdd(render);
}
