import {playground} from "../projector/playground.js";
import {ObservableList} from "../model/observable.js";

export {Controller, PlaygroundView}

const Controller = service => {

    const Playground = () => {}
    const monologModel = ObservableList([])

    const addPlayground = () => {
        const newPlayground = Playground()
        monologModel.add(newPlayground)
        return newPlayground
    }

    return {
        onPlaygroundAdd: monologModel.onAdd,
        addPlayground: addPlayground,
    }
}

const PlaygroundView = (controller, rootElement) => {
    const render = () => playground(controller, rootElement)
    controller.onPlaygroundAdd(render)
}