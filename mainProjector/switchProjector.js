import { switchLabelProjector } from '../subProjectors/switchLabelProjector.js'
import { twoStateProjector } from "../subProjectors/twoStateProjector.js";

export { switchProjector }

/* Build main switch projector, combine all sub projectors */
const switchProjector = (controller, rootElement) => {

const switchLabelElement = switchLabelProjector();

const twoStateElement = twoStateProjector();

rootElement.appendChild(switchLabelElement);
rootElement.appendChild(twoStateElement);

}