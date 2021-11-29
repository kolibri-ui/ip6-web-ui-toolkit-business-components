import {switchProjector} from "../projector/switch";
import {ObservableList} from "../observable/observable";

export {Controller, View}

const Controller = service => {

    const Switch = () => {}

    const switchModel = ObservableList([])

    const addSwitch = () => {
        const newSwitch = Switch()
        switchModel.add(newSwitch)
        return newSwitch
    }

    return {
        onSwitchAdd: switchModel.onAdd,
        addSwitch: addSwitch,
    }
}

const View = (controller, rootElement) => {
    const render = () => switchProjector(controller, rootElement)
        controller.onSwitchAdd(render)
}

