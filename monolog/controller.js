import {playground} from "./projector/playground.js"
import {ObservableList} from "./model/observable.js"

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
        onMonologAdd: monologModel.onAdd,
        addMonolog: addView,
    }
}

const View = (controller, rootElement) => {
    const render = () => playground(controller, rootElement);
    controller.onMonologAdd(render);
}