import {switchProjector} from "../mainProjector/switchProjector.js";
import {ObservableList} from "../../observable/observable.js";
import {Attribute, VALUE} from "../../presentationModel/presentationModel.js";


export {SwitchController, View }

const SwitchController = () => {

    const SwitchModel = () => {
        const darkModeAttr          = Attribute(false);
        const threeState            = Attribute(null);

        return {
            isDark          : darkModeAttr          .getObs(VALUE),
            ThreeState      : threeState            .getObs(VALUE)
        }
    }


    const switchModel = ObservableList([]);

    const addSwitch = () => {
        const newSwitch = SwitchModel();
        switchModel.add(newSwitch);
        return newSwitch;
    }

    return {
        onSwitchAdd: switchModel.onAdd,
        addSwitch: addSwitch,
    }
}

const View = (controller, rootElement) => {
    const renderSwitchProjector = switchModel => switchProjector(controller, rootElement, switchModel);
    controller.onSwitchAdd(renderSwitchProjector);
}
