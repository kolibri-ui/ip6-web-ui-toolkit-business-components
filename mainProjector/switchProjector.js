import { TwoStateSwitchLabelProjector } from '../subProjectors/TwoStateSwitchLabelProjector.js';
import { configurationProjector } from "../subProjectors/configurationProjector.js";
import { switchBoxProjector } from "../subProjectors/switchBoxProjector.js";
import { twoStateFeatureToggleProjector } from "../subProjectors/TwoStateFeatureToggleProjector.js";
import { ThreeStateSwitchLabelProjector } from "../subProjectors/ThreeStateSwitchLabelProjector.js";

export { switchProjector }

/* Build main switch projector, combine all sub projectors */
const switchProjector = (controller, rootElement, switchModel) => {

    const TwoStateSwitchLabelElement = TwoStateSwitchLabelProjector(switchModel);
    const ThreeStateSwitchLabelElement = ThreeStateSwitchLabelProjector(switchModel);

    const toggleLabelElement = twoStateFeatureToggleProjector(TwoStateSwitchLabelElement, switchModel);


    const statesDivElement = configurationProjector(TwoStateSwitchLabelElement);

    const TwoStateSwitchBoxDivElement = switchBoxProjector('2-State Switch');
    const ThreeStateSwitchBoxDivElement = switchBoxProjector('3-State Switch');


    TwoStateSwitchBoxDivElement.appendChild(TwoStateSwitchLabelElement);
    TwoStateSwitchBoxDivElement.appendChild(statesDivElement);

    ThreeStateSwitchBoxDivElement.appendChild(ThreeStateSwitchLabelElement);

    rootElement.appendChild(TwoStateSwitchBoxDivElement);
    rootElement.appendChild(ThreeStateSwitchBoxDivElement);
    rootElement.appendChild(toggleLabelElement);


}