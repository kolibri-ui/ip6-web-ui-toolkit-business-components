import { switchLabelProjector } from '../subProjectors/switchLabelProjector.js';
import { twoStateProjector } from "../subProjectors/twoStateProjector.js";
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

    //const twoStateElement = twoStateProjector();


    const switchTheme = state => {

        if (toggleLabelElement.checked) {
            if (state) {
                document.documentElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark'); //add this
            } else {
                document.documentElement.setAttribute('data-theme', 'light');
                localStorage.setItem('theme', 'light'); //add this
            }
        }
    }


    switchBoxDivElement.appendChild(switchLabelElement);
    switchBoxDivElement.appendChild(statesDivElement);

    rootElement.appendChild(switchBoxDivElement);
    rootElement.appendChild(toggleLabelElement);
    //rootElement.appendChild(switchThemeElement);


}