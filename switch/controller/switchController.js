import { switchProjector } from "../mainProjector/switchProjector.js";
import { ObservableList } from "../../observable/observable.js";
import { Attribute, VALUE } from "../../presentationModel/presentationModel.js";
import { gridOverlayProjector } from "../subProjectors/gridOverlayProjector.js";


export {SwitchController, View, Grid }

const SwitchController = () => {

    /**
     * -> Typen gross, typedef kein return
     * Holds all the Attributes of the Login component and makes them partially externally available
     * @typedef {object} Switch
     * @property threeState - threeState
     * @property threeStateOuter - threeStateOuter

     * ....... TBD

     * @returns {object} - Switch Model
     */
    const SwitchModel = () => {
        const darkModeAttr          = Attribute(false);
        const switchTypeAttribute   = Attribute(false);
        const showGridAttribute     = Attribute(false);

        return {
            isDark          : darkModeAttr          .getObs(VALUE),
            isThreeState    : switchTypeAttribute   .getObs(VALUE),
            isGridActive    : showGridAttribute     .getObs(VALUE)
        }
    }


    const switchModel = ObservableList([]);

    const addSwitch = () => {
        const newSwitch = SwitchModel();
        switchModel.add(newSwitch);
        return newSwitch;
    }

    const showGrid = () => {
        const showGrid = SwitchModel();
        switchModel.add(showGrid);
        return showGrid;
    }

    return {
        onSwitchAdd: switchModel.onAdd,
        addSwitch: addSwitch,
        onShowGrid: switchModel.onAdd,
        showGrid: showGrid
    }
}

const View = (controller, rootElement) => {
    const renderSwitchProjector = switchModel => switchProjector(controller, rootElement, switchModel);
    controller.onSwitchAdd(renderSwitchProjector);
}

const Grid = (controller, rootElement) => {
    const renderOverlayGrid = switchModel => gridOverlayProjector(controller, rootElement, switchModel);
    controller.onShowGrid(renderOverlayGrid);
}

