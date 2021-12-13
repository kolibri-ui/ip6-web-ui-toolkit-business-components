import {monologProjector} from "./mainProjector/monologProjector.js";
import {ObservableList} from "./model/observable.js";

export {Controller, View}

const Controller = service => {

    const Monolog = () => {}
    const monologModel = ObservableList([]);

    const addView = () => {
        const newMonolog = Monolog();
        monologModel.add(newMonolog);
        return newMonolog;
    }

    return {
        notification: service.notification,
        onMonologAdd: monologModel.onAdd,
        addMonolog: addView
    }
}

const View = (controller, rootElement) => {
    const render = () => monologProjector(controller, rootElement);
    controller.onMonologAdd(render);
}