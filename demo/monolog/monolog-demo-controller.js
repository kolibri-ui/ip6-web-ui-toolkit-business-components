import {ObservableList} from "../../src/Kolibri/docs/src/kolibri/observable.js";

export {MonologDemoController}

const MonologDemoController = () => {

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
