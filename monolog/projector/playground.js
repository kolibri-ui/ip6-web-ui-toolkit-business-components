import {linkProjector} from "../baseProjectors/linkProjector"
import {cardProjector} from "../baseProjectors/cardProjector"
import {monologProjector} from "../baseProjectors/monologProjector"

export {playground}


const playground = (controller, rootElement) => {


    const buttonCard = cardProjector('Non-Sticky', [link])
    const link = linkProjector("https://www.google-.com")
    buttonCard.appendChild(link);

    const monologList = monologProjector();

    rootElement.appendChild(buttonCard);
    rootElement.appendChild(monologList);
}