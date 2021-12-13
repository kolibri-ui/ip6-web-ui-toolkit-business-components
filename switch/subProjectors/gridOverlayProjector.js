import {gridProjector} from "./gridProjector.js";
import {ThreeStateSwitchLabelProjector} from "./ThreeStateSwitchLabelProjector.js";
import {TwoStateSwitchLabelProjector} from "./TwoStateSwitchLabelProjector.js";

export {gridOverlayProjector}

const gridOverlayProjector = (controller, rootElement, switchModel) => {

    const gridButtonElement = gridProjector(switchModel)[0];
    const overlayElement = gridProjector(switchModel)[1];
    const closeOverlayElement = gridProjector(switchModel)[3];

    const ThreeState_NameArray = [];
    const threeStateSwitchLabelElements = [];
    const threeState_StatesArray = ['activeOff', 'activeIndet', 'activeOn', 'focusedOff', 'focusIndet', 'focusOn', 'disabledOff',
        'disabledIndet', 'disabledOn', 'readonlyOff', 'readonlyIndet', 'readonlyOn', 'requiredInvalid', 'requiredFocused'];

    for (let i = 0; i < threeState_StatesArray.length; i++) {
        threeStateSwitchLabelElements[i] = (ThreeStateSwitchLabelProjector());
        ThreeState_NameArray[i] = document.createElement('label');

        let threeState_state = threeState_StatesArray[i];
        ThreeState_NameArray[i].textContent = threeState_state;
        overlayElement.appendChild(ThreeState_NameArray[i]);
        const getState_ThreeState = gridProjector(switchModel, threeStateSwitchLabelElements[i], threeState_state);
        overlayElement.appendChild(getState_ThreeState[2]);
    }


    const TwoState_NameArray = [];
    const twoStateSwitchLabelElements = [];
    const twoState_StatesArray = ['activeOff', 'activeOn', 'focusedOff', 'focusOn', 'disabledOff', 'disabledOn', 'readonlyOff',
        'readonlyOn', 'requiredInvalid', 'requiredFocused'];

    for (let i = 0; i < twoState_StatesArray.length; i++) {
        twoStateSwitchLabelElements[i] = (TwoStateSwitchLabelProjector(switchModel));
        TwoState_NameArray[i] = document.createElement('label');

        let state = twoState_StatesArray[i];
        TwoState_NameArray[i].textContent = state;
        overlayElement.appendChild(TwoState_NameArray[i]);
        const activeOff = gridProjector(switchModel, twoStateSwitchLabelElements[i], state);
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