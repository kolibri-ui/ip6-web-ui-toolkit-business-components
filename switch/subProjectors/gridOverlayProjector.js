import { gridProjector } from "./gridProjector.js";
import { ThreeStateSwitchLabelProjector } from "./ThreeStateSwitchLabelProjector.js";

export { gridOverlayProjector }

const gridOverlayProjector = (controller, rootElement, switchModel) => {

    const gridButtonElement = gridProjector(switchModel)[0];
    const overlayElement = gridProjector(switchModel)[1];

    const SwitchLabelElements = [];


    gridButtonElement.onclick = function () {
        gridButtonElement.style.visibility = "hidden";
        rootElement.appendChild(overlayElement);

        for (let i = 0; i < 15; i++) {
            SwitchLabelElements[i] = (ThreeStateSwitchLabelProjector());
        }

        switchModel.isGridActive.setValue(true);

        const activeOff = gridProjector(switchModel, SwitchLabelElements[0], 'activeOff');
        overlayElement.appendChild(activeOff[2]);

        const activeIndet = gridProjector(switchModel, SwitchLabelElements[1], 'activeIndet');
        overlayElement.appendChild(activeIndet[2]);

        const activeOn = gridProjector(switchModel, SwitchLabelElements[2], 'activeOn');
        overlayElement.appendChild(activeOn[2]);

        const focusedOff = gridProjector(switchModel, SwitchLabelElements[3], 'focusedOff');
        overlayElement.appendChild(focusedOff[2]);

        const focusIndet = gridProjector(switchModel, SwitchLabelElements[4], 'focusIndet');
        overlayElement.appendChild(focusIndet[2]);

        const focusOn = gridProjector(switchModel, SwitchLabelElements[5], 'focusOn');
        overlayElement.appendChild(focusOn[2]);

        const disabledOff = gridProjector(switchModel, SwitchLabelElements[6], 'disabledOff');
        overlayElement.appendChild(disabledOff[2]);

        const disabledIndet = gridProjector(switchModel, SwitchLabelElements[7], 'disabledIndet');
        overlayElement.appendChild(disabledIndet[2]);

        const disabledOn = gridProjector(switchModel, SwitchLabelElements[8], 'disabledOn');
        overlayElement.appendChild(disabledOn[2]);

        const readonlyOff = gridProjector(switchModel, SwitchLabelElements[9], 'readonlyOff');
        overlayElement.appendChild(readonlyOff[2]);

        const readonlyIndet = gridProjector(switchModel, SwitchLabelElements[10], 'readonlyIndet');
        overlayElement.appendChild(readonlyIndet[2]);

        const readonlyOn = gridProjector(switchModel, SwitchLabelElements[11], 'readonlyOn');
        overlayElement.appendChild(readonlyOn[2]);

        const requiredInvalid = gridProjector(switchModel, SwitchLabelElements[12], 'requiredInvalid');
        overlayElement.appendChild(requiredInvalid[2]);

        const requiredFocused = gridProjector(switchModel, SwitchLabelElements[13], 'requiredFocused');
        overlayElement.appendChild(requiredFocused[2]);
    };


    rootElement.appendChild(gridButtonElement);


}