import { switchLabelProjector } from '../subProjectors/switchLabelProjector.js';
import { twoStateProjector } from "../subProjectors/twoStateProjector.js";
import { configurationProjector } from "../subProjectors/configurationProjector.js";
import { switchBoxProjector } from "../subProjectors/switchBoxProjector.js";

export { switchProjector }

/* Build main switch projector, combine all sub projectors */
const switchProjector = (controller, rootElement) => {

const switchLabelElement = switchLabelProjector();

const statesDivElement = configurationProjector(switchLabelElement);

const switchBoxDivElement = switchBoxProjector();

//const twoStateElement = twoStateProjector();

switchBoxDivElement.appendChild(switchLabelElement);
switchBoxDivElement.appendChild(statesDivElement);

rootElement.appendChild(switchBoxDivElement);


}