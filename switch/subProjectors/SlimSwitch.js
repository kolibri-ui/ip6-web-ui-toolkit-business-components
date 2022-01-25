import {Switch} from "./Switch.js";

export {SlimSwitch}


const SlimSwitch = (observable, defaultState = null, isThreeState = false, id = null) => {
    return Switch(observable, defaultState, isThreeState, id, ['switch-slim'], true);
}