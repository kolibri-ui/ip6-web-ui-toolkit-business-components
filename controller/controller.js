import {ObservableList} from "../observable/observable.js";
import {Model} from "../model/model.js";
import {mainProjector} from "../mainProjector.js";

export {Controller, View}

const Controller = (service) => {

    const obsList = ObservableList([]);

    const add = () => {
        const model = Model();
        obsList.add(model);
        return model;
    }

    return {
        onAdd: obsList.onAdd,
        add: add,
        notification: service.notification,
    }
}

const View = (controller, rootElement) => {
    const render = model => mainProjector(controller, rootElement, model);
    controller.onAdd(render);
}