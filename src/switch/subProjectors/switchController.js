import {Attribute} from "../../Kolibri/docs/src/kolibri/presentationModel.js";
import {Observable} from "../../Kolibri/docs/src/kolibri/observable.js";
import {Switch} from "./Switch.js";

const SwitchModel = () => {

    const checked = Observable(false);
    const required = Attribute(false);
    const indeterminate = Attribute(false);

    return {
        checked,
        required,
        indeterminate
    }

}


const SwitchController = options => {

    const {checked, required, indeterminate } = SwitchModel();
    const switchElement = Switch(checked, options);

}
