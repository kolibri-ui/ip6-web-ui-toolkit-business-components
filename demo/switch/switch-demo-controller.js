import {ObservableList} from "../../src/Kolibri/docs/src/kolibri/observable.js";
import {Attribute, VALUE} from "../../src/Kolibri/docs/src/kolibri/presentationModel.js";

export {SwitchDemoController}

const SwitchDemoController = () => {

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

