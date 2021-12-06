import {gridProjector} from "./gridProjector.js";
import {ThreeStateSwitchLabelProjector} from "./ThreeStateSwitchLabelProjector.js";

export { gridOverlayProjector }

const gridOverlayProjector = (controller, rootElement, switchModel) => {

    const gridButtonElement = gridProjector(switchModel)[0];
    const overlayElement = gridProjector(switchModel)[1];

    const SwitchLabelElements = [];
    for (let i = 0; i < 10; i++) {

       SwitchLabelElements[i] = (ThreeStateSwitchLabelProjector());
     //   console.log(SwitchLabelElements);
    }

    gridButtonElement.onclick = function() {
        switchModel.isGridActive.setValue(true);
        //    gridOverlayProjector(gridProjector())
        const activeOn = gridProjector(switchModel, SwitchLabelElements[0], 'activeOn');
        overlayElement.appendChild(activeOn[2]);

        const activeOff = gridProjector(switchModel, SwitchLabelElements[1], 'activeOff');
        overlayElement.appendChild(activeOff[2]);

        const activeIndet = gridProjector(switchModel, SwitchLabelElements[2], 'activeIndet');
        overlayElement.appendChild(activeIndet[2]);
    };


    rootElement.appendChild(gridButtonElement);
    rootElement.appendChild(overlayElement);

}