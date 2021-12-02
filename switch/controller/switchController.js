import { switchProjector } from "../mainProjector/switchProjector.js";
import { ObservableList } from "../../observable/observable.js";
import { Attribute, VALUE } from "../../presentationModel/presentationModel.js";


export {SwitchController, View}

const SwitchController = () => {

    /**
     * Holds all the Attributes of the Login component and makes them partially externally available
     * @typedef {object} switch
     * @property threeState - threeState
     * @property threeStateOuter - threeStateOuter

     * ....... TBD

     * @returns {object} - Switch Model
     */
    const SwitchModel = () => {

        const darkModeAttr = Attribute(false);


        return {
            isDark : darkModeAttr.getObs(VALUE)

        }
    }


    const switchModel = ObservableList([])

    const addSwitch = () => {
        const newSwitch = SwitchModel()
        switchModel.add(newSwitch)
        return newSwitch
    }

    return {
        onSwitchAdd: switchModel.onAdd,
        addSwitch: addSwitch,
    }
}

const View = (controller, rootElement) => {
    const render = switchModel => switchProjector(controller, rootElement, switchModel)
    controller.onSwitchAdd(render)
}

