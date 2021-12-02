import {cardProjector} from "../baseProjectors/cardProjector.js";
import {monologProjector} from "../baseProjectors/monologProjector.js";
import {buttonProjector} from "../baseProjectors/buttonProjector.js";


export {playground}


const playground = (controller, rootElement) => {

    const monologList = monologProjector();


    const defaultButton = buttonProjector('Default', null);
    const buttonCard = cardProjector('Non-Sticky', [defaultButton]);


    rootElement.appendChild(buttonCard);
    rootElement.appendChild(monologList);
}