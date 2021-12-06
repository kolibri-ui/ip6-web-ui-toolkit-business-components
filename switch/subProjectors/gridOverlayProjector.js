import {gridProjector} from "./gridProjector.js";
import {ThreeStateSwitchLabelProjector} from "./ThreeStateSwitchLabelProjector.js";

export {gridOverlayProjector}

const gridOverlayProjector = (controller, rootElement, switchModel) => {

    const gridButtonElement = gridProjector(switchModel)[0];
    const overlayElement = gridProjector(switchModel)[1];
    const closeOverlayElement = gridProjector(switchModel)[3];

    const stateNameArray = [];
    const SwitchLabelElements = [];
    const stateArray = ['activeOff', 'activeIndet', 'activeOn', 'focusedOff', 'focusIndet', 'focusOn', 'disabledOff',
        'disabledIndet', 'disabledOn', 'readonlyOff', 'readonlyIndet', 'readonlyOn', 'requiredInvalid', 'requiredFocused'];

    for (let i = 0; i < 14; i++) {
        SwitchLabelElements[i] = (ThreeStateSwitchLabelProjector());
        stateNameArray[i] = document.createElement('label');

        let state = stateArray[i];
        stateNameArray[i].textContent = state;
        overlayElement.appendChild(stateNameArray[i]);
        const activeOff = gridProjector(switchModel, SwitchLabelElements[i], state);
        overlayElement.appendChild(activeOff[2]);
    }

    switchModel.isGridActive.setValue(true);

    gridButtonElement.onclick = function () {
        overlayElement.style.visibility = 'visible';
        gridButtonElement.style.visibility = "hidden";
        rootElement.appendChild(overlayElement);
        overlayElement.appendChild(closeOverlayElement);
    };

    closeOverlayElement.onclick = function () {
        gridButtonElement.style.visibility = "visible";
        overlayElement.style.visibility = 'hidden';
    }


    rootElement.appendChild(gridButtonElement);


}