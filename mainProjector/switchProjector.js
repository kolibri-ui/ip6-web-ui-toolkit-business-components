import { switchLabelProjector } from '../subProjectors/switchLabelProjector.js';
import { configurationProjector } from "../subProjectors/configurationProjector.js";
import { switchBoxProjector } from "../subProjectors/switchBoxProjector.js";
import { featureToggleProjector } from "../subProjectors/featureToggleProjector.js";

export { switchProjector }

/* Build main switch projector, combine all sub projectors */
const switchProjector = (controller, rootElement, switchModel) => {

    const switchLabelElement = switchLabelProjector(switchModel);

    const toggleLabelElement = featureToggleProjector(switchLabelElement, switchModel);
   // const switchThemeElement = featureToggleProjector(switchLabelElement)[1];


    const statesDivElement = configurationProjector(switchLabelElement);

    const switchBoxDivElement = switchBoxProjector();

    //const featureToggleLabelElement = featureToggleProjector(switchLabelElement)[0];


    switchBoxDivElement.appendChild(switchLabelElement);
    switchBoxDivElement.appendChild(statesDivElement);

    rootElement.appendChild(switchBoxDivElement);
    rootElement.appendChild(toggleLabelElement);
    //rootElement.appendChild(switchThemeElement);


}