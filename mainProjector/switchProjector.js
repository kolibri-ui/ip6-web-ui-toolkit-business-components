import { switchLabelProjector } from '../subProjectors/switchLabelProjector.js'

export {switchProjector}

/* Build main switch projector, combine all sub projectors */
const switchProjector = (controller, rootElement) => {

const switchLabelElement = switchLabelProjector();

rootElement.appendChild(switchLabelElement);

}

