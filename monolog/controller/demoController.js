import {ObservableList} from "../../Kolibri/docs/src/kolibri/observable.js";
import {monologDemoProjector} from "../mainProjector/monologDemoProjector.js";

export {DemoController, DemoView}

const DemoController = () => {

    const Monolog = () => {
    }
    const monologModel = ObservableList([]);

    const addView = () => {
        const newMonolog = Monolog();
        monologModel.add(newMonolog);
        return newMonolog;
    }

    return {
        onMonologAdd: monologModel.onAdd,
        addMonolog: addView
    }
}

const DemoView = (controller, rootElement) => {
    const render = () => monologDemoProjector(controller, rootElement);
    controller.onMonologAdd(render);
}