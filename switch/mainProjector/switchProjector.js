import { TwoStateSwitchLabelProjector } from '../subProjectors/TwoStateSwitchLabelProjector.js';
import { TwoStateConfigurationProjector } from "../subProjectors/TwoStateConfigurationProjector.js";
import { switchBoxProjector } from "../subProjectors/switchBoxProjector.js";
import { featureToggleProjector } from "../subProjectors/featureToggleProjector.js";
import { ThreeStateSwitchLabelProjector } from "../subProjectors/ThreeStateSwitchLabelProjector.js";
import { ThreeStateConfigurationProjector } from "../subProjectors/ThreeStateConfigurationProjector.js";
import { gridProjector } from "../subProjectors/gridProjector.js";

export { switchProjector }

/* Build main switch projector, combine all sub projectors */
const switchProjector = (controller, rootElement, switchModel) => {

    switchModel.isThreeState.setValue(true);

    /* 3-State Switch */
    const ThreeStateSwitchLabelElement = ThreeStateSwitchLabelProjector();
    const ThreeStateConfigurationElement = ThreeStateConfigurationProjector(ThreeStateSwitchLabelElement);
    const BoxThreeStateSwitchElement = switchBoxProjector('3-State Switch');

    /* 2-State Switch */
    const TwoStateSwitchLabelElement = TwoStateSwitchLabelProjector(switchModel);
    const TwoStateConfigurationElement = TwoStateConfigurationProjector(TwoStateSwitchLabelElement);
    const BoxTwoStateSwitchElement = switchBoxProjector('2-State Switch');

    /* Dark- / Light-Mode Toggle */
    const toggleLabelElement = featureToggleProjector(TwoStateSwitchLabelElement, switchModel);

    /* Show Grid Toggle */
    const gridElement = gridProjector(switchModel, ThreeStateSwitchLabelElement, '');
    rootElement.appendChild(gridElement[0]);

    if (switchModel.isGridActive.getValue() === true) {
        const gridElement1 = gridProjector(switchModel, ThreeStateSwitchLabelElement, 'activeOn');
        rootElement.appendChild(gridElement1[1]);

    } else {

        if (switchModel.isThreeState.getValue() === true) {
            BoxThreeStateSwitchElement.appendChild(ThreeStateSwitchLabelElement);
            BoxThreeStateSwitchElement.appendChild(ThreeStateConfigurationElement);
            rootElement.appendChild(BoxThreeStateSwitchElement);
        } else {
            BoxTwoStateSwitchElement.appendChild(TwoStateSwitchLabelElement);
            BoxTwoStateSwitchElement.appendChild(TwoStateConfigurationElement);

            rootElement.appendChild(BoxTwoStateSwitchElement);
            rootElement.appendChild(toggleLabelElement);
        }

    }

}